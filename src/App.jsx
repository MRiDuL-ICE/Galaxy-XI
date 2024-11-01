import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Toggle from "./components/Toggle";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [credit, setCredit] = useState(0);

  const handleCreditDeduction = (price) => {
    if (credit >= price) {
      setCredit((prevCredit) => prevCredit - price);
      return true;
    } else {
      toast.error("Insufficient credit balance!");
      return false;
    }
  };

  const [isActive, setIsActive] = useState({
    available: true,
  });

  const handleIsActive = (status) => {
    if (status === "available") {
      setIsActive({
        available: true,
      });
    } else {
      setIsActive({
        available: false,
      });
    }
  };

  const freeCredit = (coins) => {
    console.log("free coins", typeof coins);
      setCredit(prevCoins => prevCoins + coins);
      toast.success("Credit Added to Your Account");
  };

  return (
    <div>
      <div className="w-10/12 mx-auto pt-6">
        <Navbar credit={credit}></Navbar>
        <Banner freeCredit={freeCredit}></Banner>
        <Toggle
          handleCreditDeduction={handleCreditDeduction}
          isActive={isActive}
          handleIsActive={handleIsActive}
          setCredit={setCredit}
        ></Toggle>
        <Newsletter></Newsletter>
      </div>
      <Footer></Footer>

      {/* Toast */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
}

export default App;
