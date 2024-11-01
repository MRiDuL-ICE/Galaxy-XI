import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const PlayersCard = ({ handleSelected }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="md:w-full grid grid-cols-3 gap-10 mt-10">
      {players.map((player, idx) => (
        <div
          key={idx}
          className="card bg-base-100 shadow-xl flex flex-col  p-2 h-[780px]"
        >
          <div className="px-4 pt-6">
            <img
              src={player.image}
              alt=""
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </div>
          <div className="card-body p-4 w-full gap-6 mt-4">
            <h2 className="card-title">
              <i className="fa-solid fa-user"></i>
              {player.name}
            </h2>
            <div className="flex items-center justify-between">
              <h4 className="text-gray-600 flex gap-2 items-center">
                <i className="fa-solid fa-flag"></i>
                {player.country}
              </h4>
              <h4 className="btn text-gray-600">{player.role}</h4>
            </div>
            <h3 className="divider"></h3>
            <div>
              <h3 className=" flex items-center gap-4">
                <span className="text-lg font-bold">Rating:</span>
                <span className="text-orange-500 font-bold flex gap-1 items-center">
                  {player.rating}
                  <img
                    width="20"
                    height=""
                    src="https://img.icons8.com/fluency/48/star--v1.png"
                    alt="star--v1"
                  />
                </span>
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">{player.batting_style}</h3>
              <h3 className="text-lg font-bold text-gray-600">
                {player.bowling_style}
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">
                Price: ${player.bidding_price}
              </h3>
              <button
                onClick={() =>
                  handleSelected(player, player.bidding_price, player.id)
                }
                className="btn bg-gray-300  hover:bg-purple-900 hover:text-white"
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

PlayersCard.propTypes = {
  handleSelected: PropTypes.func.isRequired,
};

export default PlayersCard;
