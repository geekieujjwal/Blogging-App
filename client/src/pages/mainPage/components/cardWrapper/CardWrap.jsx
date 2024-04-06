import React from "react";
import SmallBlogCard from "./SmallBlogCard";
import BigBlogCard from "./BigBlogCard";

const CardWrap = () => {
  return (
    <div className="mt-20 flex flex-wrap">
      {/* Left Side of Small Cards */}
      <div className="flex flex-wrap justify-evenly gap-x-2 gap-y-6 w-[70%]">
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
      </div>
      {/* Right Side of Small Cards */}
      <div className="flex flex-col justify-between pb-10 w-[30%]">
        <BigBlogCard />
        <BigBlogCard />
      </div>
      <div></div>
    </div>
  );
};

export default CardWrap;
