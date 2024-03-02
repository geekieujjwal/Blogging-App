import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-15 left-0 ">
      <button onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu size={25} />
      </button>
      {/* This is main sidebar div */}
      <div
        className={`${
          isOpen ? "visible" : "hidden"
        } border-2 border-red-500 h-screen w-40 bg-black text-white`}
      >
        I am sidebar
      </div>
    </div>
  );
};

export default Sidebar;
