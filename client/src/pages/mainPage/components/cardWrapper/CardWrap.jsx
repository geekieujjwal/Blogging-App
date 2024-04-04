import React from "react";
import SmallBlogCard from "./SmallBlogCard";

const CardWrap = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-20">
      {/*  */}
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      {/*  */}
    </div>
  );
};

export default CardWrap;
