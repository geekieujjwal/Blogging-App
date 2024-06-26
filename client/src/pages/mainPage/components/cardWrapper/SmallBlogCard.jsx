import React from "react";

const SmallBlogCard = () => {
  return (
    <div className="flex w-[400px] gap-4 individual_card">
      <div className="w-[40%] h-[98px] rounded-xl overflow-hidden">
        <img
          src="https://www.webdesignerdepot.com/imager/assets/posts/featured/planning_c764524587aa464c671576b8540b19f1.webp"
          alt="img"
          className="h-full w-full transition-transform duration-[0.7s] transform-gpu hover:scale-[2]"
        />
      </div>
      <div>
        <h5 className="font-extrabold text-lg hover:underline cursor-pointer">
          How to Plan Your First Successful Website
        </h5>
        <p className="text-[#787675]">
          Planning a new website can be exciting and — if you’re
        </p>
        <p className="text-sm">
          By{" "}
          <span className="font-bold hover:underline cursor-pointer">
            SIMON STERNE
          </span>
        </p>
      </div>
    </div>
  );
};

export default SmallBlogCard;
