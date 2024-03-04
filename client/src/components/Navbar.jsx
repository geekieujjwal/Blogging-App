import React from "react";

const Navbar = () => {
  return (
    <div className="ml-10 my-2">
      <button className="rounded-md cursor-pointer hover:text-[#3B49DF] px-4 py-1 hover:bg-[white]">
        Relevant
      </button>
      <button className="rounded-md cursor-pointer hover:text-[#3B49DF] px-4 py-1 hover:bg-[white]">
        Latest
      </button>
      <button className="rounded-md cursor-pointer hover:text-[#3B49DF] px-4 py-1 hover:bg-[white]">
        Top
      </button>
    </div>
  );
};

export default Navbar;
