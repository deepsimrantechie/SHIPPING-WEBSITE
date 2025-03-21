import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      {/* Background Section */}
      <div className="relative bg-[url('/src/assets/footer.png')] bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="text-white text-center space-y-4 mt-10 px-4 sm:px-8">
            <h1 className="text-4xl font-bold mt-4  sm:text-4xl">
              Want To Talk
            </h1>
            <p className="text-lg mt-2 sm:text-xl">
              Do you want to connect with us?
            </p>
            <button className="rounded-lg bg-blue-500 px-4 py-2 mt-2">
              Get a quote
            </button>
          </div>

          {/* Divisions */}
          <div className="text-white flex flex-col sm:flex-row mt-16 items-center justify-center sm:justify-around px-4 sm:px-8">
            {/* First Division */}
            <div className="space-y-4 text-center">
              <p className="text-lg sm:text-xl">
                This is the shipping company which tells{" "}
              </p>
              <img src={assets.logo} alt="Logo" className="w-52 h-10 mx-auto" />
            </div>

            {/* Second Division */}
            <div className="space-y-4 font-semibold text-lg sm:text-xl text-center mt-8 sm:mt-0">
              <h1>Home</h1>
              <h1>Prohibited Items</h1>
              <h1>Our Partner</h1>
              <h1>Service</h1>
            </div>

            {/* Third Division */}
            <div className="space-y-4 font-semibold text-lg sm:text-xl text-center mt-8 sm:mt-0">
              <h1>Our Team</h1>
              <h1>Blog</h1>
              <h1>Contact Us</h1>
              <h1>Privacy Policy</h1>
            </div>

            {/* Last Division (Newsletter) */}
            <div className="text-center mt-8 sm:mt-0">
              <h1 className="font-bold text-2xl sm:text-3xl">
                Subscribe to Our Newsletter
              </h1>
              <p className="font-semibold text-lg sm:text-xl mt-2">
                Our special offer and more for tourism
              </p>
              <div className="flex mt-4 sm:mt-8 space-x-4 justify-center">
                <input
                  type="text"
                  placeholder="Enter your text"
                  className="px-8 py-2 rounded-lg text-black"
                />
                <img
                  src={assets.paper}
                  alt="Paper Icon"
                  className="w-10 h-10 animate-bounce"
                />
              </div>
            </div>
          </div>

          <hr className="border-t-2 border-gray-700 mt-16 mx-6" />
          <div className="text-center text-white text-lg py-4">
            <p>© 2024 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
