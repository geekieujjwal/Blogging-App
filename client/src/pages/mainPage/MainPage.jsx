import React from "react";
import { Link } from "react-router-dom";
import Header from "../../pages/mainPage/components/Header";
import PageHeading from "./components/PageHeading";

const MainPage = () => {
  return (
    <div>
      <Header />
      <PageHeading />
      {/* <Link to="/home" className="text-blue-500 underline font-bold">
        Home Page
      </Link> */}
    </div>
  );
};

export default MainPage;
