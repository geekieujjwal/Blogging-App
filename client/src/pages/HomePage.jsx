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
      <div className="flex gap-5 bg-[#F9EDE7] pr-5">
        <div>
          <Sidebar />
          <Navbar />
          <BlogCard />
        </div>
        <div className="mt-12">
          <SubscriptionPanel />
          <TrendingPanel />
        </div>
      </div>
    </>
  );
};

export default HomePage;
