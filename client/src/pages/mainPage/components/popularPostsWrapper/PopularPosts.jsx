import React from "react";
import PopularPostCard from "./PopularPostCard";

const PopularPost = () => {
  return (
    <div className="mt-20 bg-black text-white p-20">
      <h2 className="popular_post_heading">Popular Posts</h2>
      <div className="flex justify-evenly popular_post_parent gap-10">
        <PopularPostCard />
        <PopularPostCard />
        <PopularPostCard />
        <PopularPostCard />
      </div>
    </div>
  );
};

export default PopularPost;
