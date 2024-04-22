import React from "react";

import "../MainPage.css";
import { headingTitleFirst, headingTitleSecond } from "./PageHeading.constants";
import parallax_bg3 from "../../../assets/parallax_bg3.svg";

const PageHeading = () => {
  console.log(parallax_bg3);

  return (
    <div className="relative">
      {/*  */}
      {/* <div className="h-[40vh] w-screen overflow-hidden">
        <img
          src=""
          alt="bg-img"
          className=""
        />
      </div> */}
      <div
        className={`text-white py-20 tracking-wider`}
        style={{
          backgroundImage: `url(${parallax_bg3})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="flex gap-5 justify-center text-9xl font-black">
          <div>
            {headingTitleFirst.map((letter) => {
              return <span className="hedr_lttr">{letter.value}</span>;
            })}
          </div>
          <div>
            {headingTitleSecond.map((letter) => {
              return <span className="hedr_lttr">{letter.value}</span>;
            })}
          </div>
        </h1>
        <p className="hedr_sub">Explore, Share, and Connect Through Words.</p>
      </div>
      {/* <hr className="ending_line w-[97vw]" /> */}
    </div>
  );
};

export default PageHeading;
