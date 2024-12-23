import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      {/* Truck Section */}

      {/* Background Section */}
      <div className="relative bg-[url('/src/assets/footer.png')] bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="text-white text-center space-y-4 mt-10">
            <h1 className="text-4xl font-bold mt-4">Want To Talk</h1>
            <p className="text-lg mt-2">
              Do You know wants to connect with us .
            </p>
            <button className="rounded-lg bg-blue-500 px-4 py-2 mt-2">
              Get a quote
            </button>
          </div>
          {/**--the  divisions */}
          <div className="text-white flex mt-36 items-center justify-around">
            {/**the first division */}
            <div className=" space-y-4">
              <p className="text-lg">
                This is the shipping company which tells{" "}
              </p>
              <img src={assets.logo} alt="" className="w-52 h-10" />
            </div>
            {/**the second */}
            <div className="space-y-4 font-semibold text-lg">
              <h1>Home</h1>
              <h1>Prohibeted items</h1>
              <h1>Our Partner </h1>
              <h1>Service</h1>
            </div>
            {/** the third */}
            <div className="space-y-4 font-semibold text-lg">
              <h1>Our team</h1>
              <h1>Blog</h1>
              <h1>Contact us</h1>
              <h1>Privacy Policy</h1>
            </div>
            {/** the last onee-- */}
            <div>
              <h1 className="font-bold text-2xl">Suscribe to Our Newsletter</h1>
              <p className="font-semibold text-lg">
                Our special offer and more for tourism
              </p>
              <div className="flex mt-14 space-x-4">
                <input
                  type="text"
                  placeholder="enter your text"
                  className="px-8 py-2  rounded-lg  text-black"
                />
                <img
                  src={assets.paper}
                  alt=""
                  className=" w-10 h-10 animate-bounce"
                />
              </div>
            </div>
          </div>
          <hr className="border-t-2 border-gray-700 mt-16 mx-6" />
          <div className="text-center text-white text-lg py-4">
            <p>© 2024 All Rights Reserved</p>
          </div>
          {/**the end f */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
