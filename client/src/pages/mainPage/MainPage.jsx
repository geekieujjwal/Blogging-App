import React from "react";
import { Link } from "react-router-dom";
import Header from "../../pages/mainPage/components/Header";
import PageHeading from "./components/PageHeading";
import SponsoredBlogs from "./components/SponsoredBlogs";
import CardWrap from "./components/cardWrapper/CardWrap";

const MainPage = () => {
  return (
    <div>
      <Header />
      <PageHeading />
      <SponsoredBlogs />
      <CardWrap />
      {/* <Link to="/home" className="text-blue-500 underline font-bold">
        Home Page
      </Link> */}
    </div>
  );
};

export default MainPage;
