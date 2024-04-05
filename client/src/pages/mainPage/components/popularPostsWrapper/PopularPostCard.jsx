import React from "react";

const PopularPostCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="popular_post">
        <a href="#" className="popular_post_link">
          <img
            src="https://www.webdesignerdepot.com/imager/assets/posts/featured/08-unigeo_989b4ae6b38e7f3da1568e894353f5d8.webp"
            alt="popular-post_img"
            className="w-full"
          />
        </a>
      </div>
      <div className="mt-10 text-center ">
        <h3 className="text-[1.5rem] text-white font-bold drop-shadow-[0.05em_0.05em_0_rgba(0,0,0)] hover:underline cursor-pointer">
          15 Best New Fonts, March 2024
        </h3>
        <p className="text-[1rem] font-bold text-white">
          By{" "}
          <span className="text-[#C03035] hover:underline cursor-pointer">
            BEN MOSS
          </span>
        </p>
      </div>
    </div>
  );
};

export default PopularPostCard;
