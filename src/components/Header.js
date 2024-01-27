import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  
  const [Tbtn, SetTbtn] = useState("login");
  const activeStatus = useOnlineStatus();
  
  return (
    <div className="flex justify-between bg-yellow-50 shadow-lg m-2">
      <div className="logo-container">
         <Link to='/'><img src={LOGO_URL} className="logo" /></Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5">
          <li className="px-4">online Status : {activeStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4"><Link>Cart</Link></li>
          <button
            className="login"
            onClick={() => {
              // SetTbtn("logout")
              Tbtn === "login" ? SetTbtn("logout") : SetTbtn("login");
            }}
          >
            {Tbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
