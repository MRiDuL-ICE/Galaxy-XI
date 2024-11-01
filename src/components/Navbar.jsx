import logo from "../assets/logo.png";
import PropTypes from "prop-types";

const Navbar = ({ credit }) => {
  return (
    <div className="relative w-10/12 px-10 hover:absolute z-50">
      <div className="navbar flex justify-between min-h-[80px] mx-auto px-36 fixed top-0 left-0 right-0 p-10 backdrop-blur-2xl">
        <div className="navbar-start">
          <a className="btn btn-ghost text-3xl text-purple-900">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex gap-8 pr-6 text-black font-bold">
          <a href="" className=" hover:text-purple-900">
            Home
          </a>
          <a href="" className=" hover:text-purple-900">
            Fixture
          </a>
          <a href="" className=" hover:text-purple-900">
            Teams
          </a>
          <a href="" className=" hover:text-purple-900">
            Schedules
          </a>
          <div>
            <button className="btn btn-primary bg-transparent text-black border-gray-200 hover:bg-purple-900 hover:text-white">
              {credit} Coins{" "}
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/fluency/48/cheap-2--v1.png"
                alt="cheap-2--v1"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  credit: PropTypes.number.isRequired,
};

export default Navbar;
