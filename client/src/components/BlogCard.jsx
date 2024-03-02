import React from "react";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";

import blog1img from "../assets/blog1img.png";
import avatar from "../assets/avatar.png";

const Blogs = () => {
  return (
    <div className="border-2 border-red-500 w-[70vw] pb-4 bg-white">
      <div>
        <img src={blog1img} alt="img" className="w-full" />
      </div>
      {/* Author Details */}
      <div className="flex gap-3">
        <div>
          <img src={avatar} alt="img" width={40} />
        </div>
        <div>
          <p className="text-[#1F1F1F] font-semibold">Nicolas Frankel</p>
          <span className="text-sm text-[#999999]">Feb 29</span>
        </div>
      </div>
      <h3 className="text-3xl font-bold ml-12">
        Secure your API with these 16 Practices with Apache APISIX - part 2
      </h3>
      {/* Tags */}
      <div className="flex gap-3 ml-12 mb-6 mt-4">
        <span>#security</span>
        <span>#api</span>
        <span>#apigateway</span>
      </div>
      {/* Reactions */}
      <div className="ml-12 flex justify-between pr-3">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span>
              <FaRegHeart />
            </span>
            <span>3 Likes</span>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FaRegComment />
            </span>
            <span>Comments</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#5e5e5e] text-sm">3 min read</span>
          <span>
            <FaRegBookmark />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
