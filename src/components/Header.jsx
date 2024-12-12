import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

 const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="fixed top-0 z-10 w-full">
      {/* Desktop Version */}
      <div className="max-w-[1320px] mx-auto px-4 flex justify-between items-center">
        <div className="m-0 p-0">
          <img src={logo} alt="logo" className="h-auto block lg:w-full w-16" />
        </div>

        {/* Nav Links */}
        <div className="lg:flex xl:gap-6 gap-3 items-center font-poppins hidden xl:text-[18px] text-[16px]">
          <Link className="hover:text-foundation-blue-500 transition-colors duration-300">
            Home
          </Link>
          <Link className="hover:text-foundation-blue-500 transition-colors duration-300">
            Service
          </Link>
          <Link className="hover:text-foundation-blue-500 transition-colors duration-300">
            Meet the Team
          </Link>
          <Link className="hover:text-foundation-blue-500 transition-colors duration-300">
            Schedule Pet Care
          </Link>
        </div>

        {/* Buttons */}
        <button className="lg:flex py-[12px] px-[24px] text-white bg-foundation-blue-500 rounded-[40px] shadow-lg hover:bg-foundation-blue-600 transition-all duration-300 hidden">
          Login/Signup
        </button>

        <div className="lg:hidden flex" onClick={handleClick}>
          {nav ? <IoMdClose size={40}  /> : <GiHamburgerMenu size={40} />}
        </div>
      </div>

      {/* Mobile Version */}
      {nav && (
        <div
          className="fixed inset-0 z-10  bg-opacity-50"
          onClick={closeNav}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0   sm:w-[300px] w-[200px] px-4 flex flex-col gap-10 bg-white min-h-screen transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500`}
      >
        <div className="m-0 p-0">
          <img src={logo} alt="logo" className=" h-auto block lg:w-full w-16" />
        </div>

        {/* Nav Links */}
        <div className="flex flex-col xl:gap-6 gap-3 items-start font-poppins xl:text-[18px] text-[16px]">
          <Link
            className="hover:text-foundation-blue-500 transition-colors duration-300"
            onClick={closeNav}
          >
            Home
          </Link>
          <Link
            className="hover:text-foundation-blue-500 transition-colors duration-300"
            onClick={closeNav}
          >
            Service
          </Link>
          <Link
            className="hover:text-foundation-blue-500 transition-colors duration-300"
            onClick={closeNav}
          >
            Meet the Team
          </Link>
          <Link
            className="hover:text-foundation-blue-500 transition-colors duration-300"
            onClick={closeNav}
          >
            Schedule Pet Care
          </Link>
        </div>

        {/* Buttons */}
        <button
          className="py-[12px] px-[24px] text-white bg-foundation-blue-500 rounded-[40px] shadow-lg hover:bg-foundation-blue-600 transition-all duration-300"
          onClick={closeNav}
        >
          Login/Signup
        </button>
      </div>
    </div>
  );
};

export default Header