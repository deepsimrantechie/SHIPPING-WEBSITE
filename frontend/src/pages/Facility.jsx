import React from "react";
import { assets } from "../assets/assets";
import aeroplane from "../assets/aeroplane.png";

const Facility = () => {
  return (
    <div className="mt-14">
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${aeroplane})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="text-white text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mt-10 font-bold">
              How It Works
            </h1>
            <p className="text-lg sm:text-xl mt-2">
              Shipping Experience to the next level.
            </p>
          </div>

          {/* Left and Right Text Section */}
          <div className="flex flex-col md:flex-row mt-8 justify-around gap-8 px-4">
            {/* Left Side */}
            <div className="space-y-16 md:space-y-48">
              {/* Item 1 */}
              <div className="flex space-x-3 animate-slideInLeft">
                <div className="mt-2">
                  <img
                    src={assets.signicon}
                    alt="Sign Up Icon"
                    className="rounded-full w-10 h-10 border border-white bg-white"
                  />
                </div>
                <div className="text-white space-y-2">
                  <h1 className="text-xl sm:text-2xl font-semibold">
                    Sign Up & Get Your Address
                  </h1>
                  <p className="text-sm sm:text-base">
                    "Sign Up & Add Your Address" lets users quickly register and
                    provide address details.
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex space-x-3 animate-slideInLeft">
                <div className="mt-2">
                  <img
                    src={assets.shop}
                    alt="Shop Icon"
                    className="rounded-full w-10 h-10 border border-white bg-white"
                  />
                </div>
                <div className="text-white space-y-2">
                  <h1 className="text-xl sm:text-2xl font-semibold">
                    Shop from Your Favorite Store
                  </h1>
                  <p className="text-sm sm:text-base">
                    "Shop from your favorite store" for a seamless shopping
                    experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-16 md:space-y-48">
              {/* Item 3 */}
              <div className="flex space-x-3 animate-slideInRight">
                <div className="mt-2">
                  <img
                    src={assets.pack}
                    alt="Package Icon"
                    className="rounded-full w-10 h-10 border border-white bg-white"
                  />
                </div>
                <div className="text-white space-y-2">
                  <h1 className="text-xl sm:text-2xl font-semibold">
                    Package Consolidation
                  </h1>
                  <p className="text-sm sm:text-base">
                    Consolidate your packages for efficient shipping and cost
                    savings.
                  </p>
                </div>
              </div>
              {/* Item 4 */}
              <div className="flex space-x-3 animate-slideInRight">
                <div className="mt-2">
                  <img
                    src={assets.cargo}
                    alt="Cargo Icon"
                    className="rounded-full w-10 h-10 border border-white bg-white"
                  />
                </div>
                <div className="text-white space-y-2">
                  <h1 className="text-xl sm:text-2xl font-semibold">
                    Get It Delivered to Your Doorstep
                  </h1>
                  <p className="text-sm sm:text-base">
                    Reliable delivery directly to your home or office.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-6 px-4">
            <button className="bg-blue-700 px-4 py-2 md:px-5 md:py-3 rounded-lg text-white text-sm sm:text-base">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
