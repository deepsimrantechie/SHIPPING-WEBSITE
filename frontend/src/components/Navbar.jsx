import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between mt-4">
      <div className="ml-10">
        <Link to="/">
          <img className="w-1/2 h-1/2" src={assets.logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex flex-wrap space-x-6 font-semibold">
        <Link to="/">
          <h1 className="hover:text-blue-900 transition duration-300 ease-in-out cursor-pointer">
            Home
          </h1>
        </Link>
        <Link to="Aboutus">
          <h1 className="hover:text-blue-900 transition duration-300 ease-in-out cursor-pointer">
            About
          </h1>
        </Link>
        <Link to="/Prohibited">
          <h1 className="hover:text-blue-900 transition duration-300 ease-in-out cursor-pointer">
            Prohibited items
          </h1>
        </Link>
        <h1 className="hover:text-blue-900 transition duration-300 ease-in-out cursor-pointer">
          Calculator
        </h1>
        <h1 className="hover:text-blue-900 transition duration-300 ease-in-out cursor-pointer">
          Blog
        </h1>
        <Link to="/contact">
          <h1 className="hover:text-blue-900 transition duration-300 ease-in-out cursor-pointer">
            Contact
          </h1>
        </Link>
      </div>
      <div className="mr-10 space-x-5">
        <Link to="/login">
          <button className="border rounded-lg border-blue-900 px-4 py-2 hover:bg-blue-100 text-blue-900">
            Log in
          </button>
        </Link>
        <Link to="/Signup">
          <button className="border rounded-lg bg-blue-900 px-4 py-2 text-white hover:bg-blue-800">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
