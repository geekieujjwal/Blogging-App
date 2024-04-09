import React from "react";
import { Link } from "react-router-dom";
import hedr_logo from "../../../assets/hedr_logo.png";

import "../../../App.css";
import { headingTitlesLeft, headingTitlesRight } from "./Header.constants";

const Header = () => {
  return (
    <div className="flex justify-around items-center bg-[#1B1D20] text-white h-12 border-b-[1px] border-b-gray-500">
      <div className="flex gap-10">
        {headingTitlesLeft.map((item) => {
          return <Link to="#">{item.title}</Link>;
        })}
      </div>
      <div className="hedr_logo">
        <a href="#" className="hedr_logo_link">
          <img src={hedr_logo} alt="header-logo" className="w-full" />
        </a>
      </div>
      <div className="flex gap-10">
        {headingTitlesRight.map((item) => {
          console.log(item);
          return <Link to="#">{item.title}</Link>;
        })}
      </div>
    </div>
  );
};

export default Header;
