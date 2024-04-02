import React from "react";
import "../../../App.css";

const PageHeading = () => {
  const headingTitleFirst = [
    { value: "B" },
    { value: "l" },
    { value: "o" },
    { value: "g" },
  ];
  const headingTitleSecond = [
    { value: "D" },
    { value: "e" },
    { value: "p" },
    { value: "o" },
    { value: "t" },
  ];

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
      <div className="text-white bg-[url('https://www.webdesignerdepot.com/assets/ui/brand/parallax_bg3.svg')] py-32 tracking-wider">
        <h1 className="flex gap-5 justify-center text-7xl font-black">
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
      <hr className="ending_line" />
    </div>
  );
};

export default PageHeading;
