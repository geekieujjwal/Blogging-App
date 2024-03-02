import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import SubscriptionPanel from "../components/SubscriptionPanel";
import TrendingPanel from "../components/TrendingPanel";

const HomePage = () => {
  return (
    <div className="flex bg-[#F5F5F5]">
      <div>
        <Header />
        <Sidebar />
        <Navbar />
        <BlogCard />
      </div>
      <div>
        <SubscriptionPanel />
        <TrendingPanel />
      </div>
    </div>
  );
};

export default HomePage;
