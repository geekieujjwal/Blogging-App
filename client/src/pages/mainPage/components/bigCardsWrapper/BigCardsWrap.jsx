import React from "react";
import BlogCard from "./BlogCard";

const BigCardsWrap = () => {
  return (
    <div className="mt-20 flex flex-wrap">
      <div className="flex flex-wrap justify-evenly gap-x-2 gap-y-10 pb-20">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BigCardsWrap;
