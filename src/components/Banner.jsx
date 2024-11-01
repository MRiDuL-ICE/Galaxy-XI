import blur from "../assets/bg-shadow.png";
import blogo from "../assets/banner-main.png";
import PropTypes from "prop-types";

const Banner = ({ freeCredit }) => {
  let coins = 85000000;
  return (
    <div>
      <div className="hero md:min-h-[700px] rounded-full mt-32 ">
        <img
          className="md:h-[700px] w-full rounded-2xl object-cover"
          src="https://i.ibb.co.com/0Y6jBsP/pexels-shotbyrain-3934623.jpg"
          alt=""
        />
        <div className="hero-overlay bg-opacity-10 rounded-2xl"></div>
        <img className="w-full md:h-full rounded-2xl" src={blur} alt="" />
        <div className="hero-content text-neutral-content text-center flex flex-col gap-14">
          <div>
            <img src={blogo} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-white">
              Assemble Your Ultimate Galaxy 11 Cricket Team
            </h1>
            <p>Beyond Boundaries Beyond Limits</p>
          </div>
          <button
            onClick={() => freeCredit(coins)}
            className="btn btn-primary bg-[#E7FE29] text-black border-gray-200 hover:bg-purple-900 hover:text-white hover:border-none"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  freeCredit: PropTypes.func.isRequired,
  isBtnDisabled: PropTypes.bool.isRequired,
};

export default Banner;
