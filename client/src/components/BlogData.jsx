import React, { useEffect } from "react";
import { useSelector } from "react-redux";

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

  const blogsJsx = blogData?.map((blogData) => {
    return <BlogCard blogData={blogData} />;
  });

  return <div>{isLoading ? <div>Loading...</div> : blogsJsx}</div>;
};

export default Blogs;
