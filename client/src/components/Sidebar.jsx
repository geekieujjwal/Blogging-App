import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    // <div className="fixed top-15 left-0 ">
    <div className="w-[30%]">
      {/* <button onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu size={25} />
      </button> */}
      {/* This is main sidebar div */}
      <div className={`${isOpen ? "visible" : "hidden"}`}>
        <div className="bg-white rounded-2xl px-3 py-4">
          <h2 className="text-xl font-bold mb-4">
            DEV Community is a community of 1,420,177 amazing developers
          </h2>
          <p className="text-[#575757]">
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
          {/* <button className="border-[1.7px] font-medium cursor-pointer rounded-3xl border-[#3B49DF] text-white bg-[#3B49DF] px-2 py-1 hover:bg-[#4d5bf4] mt-6">
            Subscribe
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
