import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartLogo from "../assets/cart-icon.svg";
import UserIcon from "../assets/user.svg";
import TruckIcon from "../assets/truck.svg";
import HeartIcon from "../assets/heart.svg";

const loginStatus = localStorage.getItem("user");

const NavigationHeader = () => {
  const [activeStatus, setActiveStatus] = useState(JSON.parse(loginStatus) || []);
  const [dropDown, setDropDown] = useState(false);
  const handleDropDownButton = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(activeStatus));
  }, [activeStatus]);

  const handleLogout = () => {
    setActiveStatus(false);
    setDropDown(!dropDown);
  }
  const handleLogin = () => setActiveStatus(true);

  return (
    <div className="flex flex-row justify-between items-center py-3 font-poppins font-normal px-10  bg-slate-800">
      <div className="">
        <Link to="/">
          <img src={TruckIcon} alt="cartLogo" className="w-7 inline " />
          <p className="inline ms-3 font-medium text-white">
            Dunlop Hypermarket
          </p>
        </Link>
      </div>

      <div className="relative flex items-center flex-row">
        <NavLink className={"text-small  text-white"} to={`/cart`}>
          <img src={HeartIcon} className="w-8" alt="" />
        </NavLink>
        <NavLink className={"ms-5 text-small  text-white"} to={`/cart`}>
          <img src={CartLogo} className="w-8" alt="" />
        </NavLink>
        {activeStatus || (
          <Link to="/" className="block text-left mb-2 text-white" onClick={() => handleLogin()} >
            Login

          </Link>
        )}
        {activeStatus && (
          <img src={UserIcon} className="w-9  ms-8 shadow-md cursor-pointer" onClick={handleDropDownButton} alt="" />
        )}
        <div
          className={`absolute top-10 right-0 rounded-sm w-auto  h-auto text-ssss p-3 bg-white
        ${dropDown === false ? "hidden" : ""} shadow-sm `} >
          <Link to="user" className="block text-left mb-2">
            Orders
          </Link>
          <Link to="/" className="block text-left mb-2" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavigationHeader;
