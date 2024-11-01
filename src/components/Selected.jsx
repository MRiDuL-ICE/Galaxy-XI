import PropTypes from "prop-types";
import PlayersCard from "./PlayersCard";
import { useState } from "react";

const Selected = ({
  selected,
  handleAddMore,
  morePlayer,
  handleSelected,
  handleDeletePlayer,
}) => {
  selected.map((player) => console.log(player.bidding_price));

  const [showPlayerCard, setShowPlayerCard] = useState(false);

  const handleAddMoreClick = () => {
    handleAddMore("addMore");
    setShowPlayerCard(!showPlayerCard);
  };

  return (
    <div>
      <button
        onClick={handleAddMoreClick}
        className="btn btn-primary bg-[#E7FE29] text-black border-gray-200 hover:bg-purple-900 hover:text-white hover:border-none"
      >
        Add More Player
      </button>

      {showPlayerCard && (
        <PlayersCard
          handleSelected={handleSelected}
          morePlayer={morePlayer}
          handleAddMore={handleAddMore}
        ></PlayersCard>
      )}

      {selected.map((man, idx) => (
        <div key={idx}>
          <div className="card bg-base-100 w-full shadow-xl mb-2 mt-4">
            <div className="card-body flex justify-between flex-row items-center">
              <div className="flex items-center gap-5">
                <div>
                  <img
                    width={150}
                    height={100}
                    className="rounded-xl"
                    src={man.image}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{man.name}</h1>
                  <p className="text-gray-400 mt-2">{man.role}</p>
                  <p className="mt-2">${man.bidding_price}</p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleDeletePlayer(man.id, man.bidding_price)}
                  className="text-red-500 text-4xl"
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Selected.propTypes = {
  selected: PropTypes.array.isRequired,
  handleAddMore: PropTypes.func.isRequired,
  morePlayer: PropTypes.object.isRequired,
};

export default Selected;
