import blur from "../assets/bg-shadow.png";

const Newsletter = () => {
  return (
    <div className="absolute -translate-y-22 translate-x-32">
      <div className="hero  rounded-full mt-10">
        <div className="hero-overlay bg-white rounded-2xl"></div>
        <img className="w-full h-full rounded-2xl" src={blur} alt="" />
        <div className="hero-content text-neutral-content text-center flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-black">
              Subscribe to our Newsletter
            </h1>
            <p className="text-black">
              Get the latest updates and news right in your inbox!
            </p>
          </div>
          <label className="input border-gray-300 flex items-center justify-end">
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
    </div>
  );
};

export default Newsletter;
