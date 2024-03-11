import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Link to="/home" className="text-blue-500 underline font-bold">
        Home Page
      </Link>
    </div>
  );
};

export default MainPage;
