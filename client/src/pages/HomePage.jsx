import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogData";
import SubscriptionPanel from "../components/SubscriptionPanel";
import TrendingPanel from "../components/TrendingPanel";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex gap-5 bg-[#F9EDE7] px-5 pt-5">
        <div className="flex w-[70%] gap-5">
          <Sidebar />
          <div className="w-[70%]">
            <Navbar />
            <BlogCard />
          </div>
        </div>
        <div className="w-[30%]">
          <SubscriptionPanel />
          <TrendingPanel />
        </div>
      </div>
    </>
  );
};

export default HomePage;
