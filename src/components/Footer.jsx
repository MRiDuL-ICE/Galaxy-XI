import flogo from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#06091A] flex flex-col mx-auto justify-center pb-10 mt-72 p-10 pt-72">
      <div className="mx-auto p-10">
        <img src={flogo} alt="" />
      </div>
      <div className="flex justify-around">
        <div className="text-white flex flex-col gap-4">
          <h3 className="text-2xl font-bold">About Us</h3>
          <p className="w-80">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="text-white flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Quick Links</h3>
          <li>
            <a href="" className="hover:text-orange-400">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-orange-400">
              Fixture
            </a>
          </li>
          <li>
            <a href="" className="hover:text-orange-400">
              Teams
            </a>
          </li>
          <li>
            <a href="" className="hover:text-orange-400">
              Schedule
            </a>
          </li>
        </div>
        <div className="text-white flex flex-col gap-6">
          <h3 className="text-2xl font-bold">Subscribe</h3>
          <p className="w-80">
            Subscribe to our newsletter for the latest updates.
          </p>
          <label className="input flex items-center justify-end">
            <input
              type="text"
              className="grow"
              placeholder="Enter Your Email"
            />
            <button className="btn h-full text-right bg-gradient-to-r from-pink-500 to-orange-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 translate-x-4">
              Subscribe
            </button>
          </label>
        </div>
      </div>
      <div></div>
      <div className="border-2 border-gray-800 mt-10"></div>
      <div className="flex mx-auto mt-8">
        <p className="text-gray-600">@2024 MRiDuL-ICE All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
