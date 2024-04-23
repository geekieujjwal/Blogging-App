import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import appLogo from "../assets/appLogo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md py-3 px-3">
      <div className="flex gap-3 max-[1000px]:ml-8">
        <div className="rounded overflow-hidden">
          <img src={appLogo} alt="app-logo" width="40px" />
        </div>
        <div className="flex relative">
          <input
            type="text"
            name="search-bar"
            id="search-bar"
            placeholder="Search..."
            className="border-[1.7px] border-[#BFBFBF] rounded-lg placeholder-[#535252] px-2 sm:w-80 md:w-96"
          />
          <IoSearchOutline
            size={25}
            color="#535252"
            className="absolute top-[50%] translate-y-[-50%] right-2"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <Link to="/login">
          <button className="rounded-md cursor-pointer hover:text-[#3B49DF] hover:underline px-2 py-1 hover:bg-[#c3c6e4]">
            Log in
          </button>
        </Link>
        <Link to="/register">
          <button className="border-[1.7px] cursor-pointer rounded-md border-[#3B49DF] hover:underline hover:text-white hover:bg-[#3B49DF] text-[#3B49DF] px-2 py-1">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
