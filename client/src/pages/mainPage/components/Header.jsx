import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

const Header = () => {
  const headingTitlesLeft = [
    {
      title: "Lorem",
    },
    {
      title: "Lorem",
    },
    {
      title: "Lorem",
    },
    {
      title: "Lorem",
    },
  ];

  const headingTitlesRight = [
    {
      title: "Lorem",
    },
    {
      title: "Lorem",
    },
    {
      title: "Lorem",
    },
    {
      title: "Lorem",
    },
  ];

  return (
    <div className="flex justify-around items-center bg-[#1B1D20] text-white h-12 border-b-[1px] border-b-gray-500">
      <div className="flex gap-10">
        {headingTitlesLeft.map((item) => {
          return <Link to="#">{item.title}</Link>;
        })}
      </div>
      <div className="hedr_logo">
        <a href="#" className="hedr_logo_link">
          <img
            src="https://www.webdesignerdepot.com/assets/ui/brand/wdd_logo.svg"
            alt="header-logo"
            className="w-full"
          />
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
