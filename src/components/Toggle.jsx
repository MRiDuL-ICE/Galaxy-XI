import PropTypes from "prop-types";
import Selected from "./Selected";
import PlayersCard from "./PlayersCard";
import { useState } from "react";
import { toast } from "react-toastify";

const Toggle = ({
  handleIsActive,
  isActive,
  handleCreditDeduction,
  setCredit,
}) => {
  const [selected, setSelected] = useState([]);
  console.log(typeof selected);

  const handleDeletePlayer = (id, price) => {
    const updatedSelected = selected.filter((player) => player.id !== id);
    setSelected(updatedSelected);
    setCredit((prevCredit) => prevCredit + price);
    toast.warn('Player removed')
  };

  const handleSelected = (player, price, id) => {
    if (selected.length >= 6) {
      toast.error("cannot select more than 6 players");
      return;
    }
    const isAlreadySelected = selected.some(
      (selectedPlayer) => selectedPlayer.id === id
    );
    console.log(isAlreadySelected);
    if (!isAlreadySelected) {
      const success = handleCreditDeduction(price);
      if (success) {
        const newSelected = [...selected, player];
        setSelected(newSelected);
        toast.success("Player is successfully selected");
      }
    } else {
      toast.error("Player is already selected");
    }
  };

  const [morePlayer, setMorePlayer] = useState({
    morePlayerBtn: false,
  });

  const handleAddMore = (moreBtn) => {
    if (moreBtn === "addMore") {
      handleIsActive("available");
      setMorePlayer(true);
    } else {
      return;
    }
  };

  const { available } = isActive;
  console.log(isActive);
  return (
    <>
      <div className="flex justify-between mt-16 mb-10">
        <div className="text-3xl font-bold">
          <h1>
            {isActive.available
              ? `Available Players`
              : `Selected Players (${selected.length}/6)`}
          </h1>
        </div>
        <div className="flex border-2 border-gray-100 rounded-xl">
          <button
            onClick={() => handleIsActive("available")}
            className={`btn rounded-sm ${
              available ? "bg-[#E7FE29] text-black" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActive("selected")}
            className={`btn rounded-sm ${
              available ? "" : "bg-[#E7FE29] text-black"
            }`}
          >
            Selected ({selected.length})
          </button>
        </div>
      </div>
      {isActive.available ? (
        <PlayersCard handleSelected={handleSelected}></PlayersCard>
      ) : (
        <Selected
          handleAddMore={handleAddMore}
          handleDeletePlayer={handleDeletePlayer}
          morePlayer={morePlayer}
          selected={selected}
        ></Selected>
      )}
    </>
  );
};

Toggle.propTypes = {
  handleIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.object.isRequired,
};

export default Toggle;
