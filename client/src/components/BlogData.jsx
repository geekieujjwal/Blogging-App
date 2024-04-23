import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useThunk } from "../customHooks/useThunk";
import { fetchAllBlogs } from "../store/thunks/fetchAllBlogs";

import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogData = useSelector((state) => state.blog);

  const [runFetchAllBlogsThunk, data, isLoading] = useThunk(fetchAllBlogs);

  useEffect(() => {
    runFetchAllBlogsThunk();
  }, []);

  console.log(blogData, data);

  const blogsJsx = blogData.length ? (
    blogData?.map((blogData, index) => {
      return <BlogCard key={index} blogData={blogData} />;
    })
  ) : (
    <div>
      <Skeleton count={3} height={400} gap={5} />
    </div>
  );

  return (
    <div>
      {isLoading ? (
        <div>
          <Skeleton count={10} height={100} />
        </div>
      ) : (
        blogsJsx
      )}
    </div>
  );
};

export default Blogs;
