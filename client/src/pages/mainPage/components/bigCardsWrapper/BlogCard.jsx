import React from "react";

const BlogCard = () => {
  return (
    <div className="w-[280px] individual_card">
      <div className="w-[100%] h-[157px] rounded-xl overflow-hidden">
        <img
          src="https://www.webdesignerdepot.com/imager/assets/posts/featured/linewire_c764524587aa464c671576b8540b19f1.webp"
          alt="img"
          className="h-full w-full transition-transform duration-[0.7s] transform-gpu hover:scale-[2]"
        />
      </div>
      <div>
        <h5 className="font-extrabold text-[1.5rem] leading-tight hover:underline cursor-pointer mt-2">
          LimeWire Developer APIs Herald a New Era of AI Integration
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

export default BlogCard;
