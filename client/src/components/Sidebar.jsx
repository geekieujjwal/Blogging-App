import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../pages/Pages.css";
import { ImCross } from "react-icons/im";

import home from "../assets/icons/home.svg";
import tags from "../assets/icons/seo-tags.svg";
import about from "../assets/appLogo.png";
import codeOfConduct from "../assets/icons/code-document.svg";
import contact from "../assets/icons/contact.svg";
import guides from "../assets/icons/guide-book.svg";
import privacyPolicy from "../assets/icons/user-privacy.svg";
import tablet from "../assets/icons/tablet.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    // <div className="fixed top-15 left-0 ">
    <div className="w-[30%] max-[1000px]:w-0 side-hamburger">
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer hamburger-menu-btn fixed top-4 left-2"
      >
        <GiHamburgerMenu size={25} />
      </button>
      {/* This is main sidebar div */}
      <div
        className={`${isOpen ? "visible" : "hidden"}
        )} flex flex-col gap-2 sidebar-div overflow-y-auto max-[1000px]:max-h-screen`}
      >
        <div className="hidden max-[1000px]:flex font-bold text-lg justify-between items-center mb-2">
          <h4>Blogging Community</h4>
          <ImCross
            size={25}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:text-[#433fa2] p-[5px] hover:bg-[#cccdda] rounded-lg"
          />
        </div>
        <div className="bg-white max-[1000px]:bg-[#F9ECE7] rounded-2xl px-3 py-4 mb-4">
          <h2 className="text-xl font-bold mb-4">
            BLOGGING DEPOT Community is a community of 1,420,177 amazing
            developers
          </h2>
          <p className="text-[#575757]">
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
        </div>
        <Link to="/home">
          <button className="rounded-md w-full cursor-pointer hover:text-[#3B49DF] hover:underline px-2 py-1 hover:bg-[#cccdda] flex justify-start gap-5 items-center">
            <img src={home} alt="icon" width={22} />
            Home
          </button>
        </Link>
        <Link to="/home">
          <button className="rounded-md w-full cursor-pointer hover:text-[#3B49DF] hover:underline px-2 py-1 hover:bg-[#cccdda] flex justify-start gap-5 items-center">
            <img src={tags} alt="icon" width={22} />
            Tags
          </button>
        </Link>
        <Link to="/home">
          <button className="rounded-md w-full cursor-pointer hover:text-[#3B49DF] hover:underline px-2 py-1 hover:bg-[#cccdda] flex justify-start gap-5 items-center">
            <img src={about} alt="icon" width={22} />
            About
          </button>
        </Link>
        <Link to="/home">
          <button className="rounded-md w-full cursor-pointer hover:text-[#3B49DF] hover:underline px-2 py-1 hover:bg-[#cccdda] flex justify-start gap-5 items-center">
            <img src={contact} alt="icon" width={22} />
            Contact
          </button>
        </Link>
        <Link to="/home">
          <button className="rounded-md w-full cursor-pointer hover:text-[#3B49DF] hover:underline px-2 py-1 hover:bg-[#cccdda] flex justify-start gap-5 items-center">
            <img src={guides} alt="icon" width={22} />
            Guides
          </button>
        </Link>
        <Link to="/home">
          <button className="rounded-md w-full cursor-pointer hover:text-[#3B49DF] hover:underline px-2 py-1 hover:bg-[#cccdda] flex justify-start gap-5 items-center">
            <img src={codeOfConduct} alt="icon" width={22} />
            Code of Conduct
          </button>
        </Link>
        <Link to="/home">
          <button className="rounded-md w-full cursor-pointer hover:text-[#3B49DF] hover:underline px-2 py-1 hover:bg-[#cccdda] flex justify-start gap-5 items-center">
            <img src={privacyPolicy} alt="icon" width={22} />
            Privacy Policy
          </button>
        </Link>
        <Link to="/home">
          <button className="rounded-md w-full cursor-pointer hover:text-[#3B49DF] hover:underline px-2 py-1 hover:bg-[#cccdda] flex justify-start gap-5 items-center">
            <img src={tablet} alt="icon" width={22} />
            Terms of Use
          </button>
        </Link>
        <p className="text-[#A8A8A8] text-sm">
          <span className="text-[#646edc] font-medium">BLOGGING DEPOT</span>{" "}
          Community A constructive and inclusive social network for software
          developers. With you every step of your journey.
        </p>
        <p className="text-[#A8A8A8] text-sm">
          Built on Forem — the open source software that powers DEV and other
          inclusive communities.
        </p>
        <p className="text-[#A8A8A8] text-sm">
          Made with love and Ruby on Rails. DEV Community © 2016 - 2024.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
