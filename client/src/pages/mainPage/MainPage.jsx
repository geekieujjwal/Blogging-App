import React from "react";
import { Link } from "react-router-dom";
import Header from "../../pages/mainPage/components/Header";
import PageHeading from "./components/PageHeading";
import SponsoredBlogs from "./components/SponsoredBlogs";
import CardWrap from "./components/cardWrapper/CardWrap";
import PopularPosts from "./components/popularPostsWrapper/PopularPosts";

const MainPage = () => {
  return (
    <div>
      <Header />
      <PageHeading />
      <SponsoredBlogs />
      <CardWrap />
      <PopularPosts />
      {/* <Link to="/home" className="text-blue-500 underline font-bold">
        Home Page
      </Link> */}
    </div>
  );
};

export default MainPage;
