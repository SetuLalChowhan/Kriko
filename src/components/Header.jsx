import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" fixed top-0 z-10 w-full  ">
      <div className=" container flex justify-between items-center ">
        <div className="text-3xl">Setulal Chowhan</div>
        <div className="flex gap-6">
            <Link to="#">Home</Link>
            <Link to="#">About</Link>
            <Link to="#">Sign Up</Link>
            <Link to="#">Sign In</Link>
        </div>

        <div className="px-4 py-2 rounded-[40px] text-white bg-foundation-blue-500">
            <button className=" text-lg ">Singup</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
