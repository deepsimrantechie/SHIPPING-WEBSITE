import React from "react";
import { assets } from "../assets/assets";
import aeroplane from "../assets/aeroplane.png";
const Facility = () => {
  return (
    <div className="mt-14">
      <div
        className="relative  bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${aeroplane})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="text-white items-center text-center">
            <h1 className="text-5xl mt-10 font-bold">How It Works</h1>
            <p className="text-2xl mt-2">
              Shipping Experince to the next level.
            </p>
          </div>
          {/* -this is the left side text---*/}
          <div className="flex mt-8 justify-around">
            <div className="space-y-48">
              <div className="flex space-x-3 animate-slideInLeft">
                <div className="mt-2">
                  <img
                    src={assets.signicon}
                    alt="image"
                    className="rounded-full w-10 h-10 border border-white bg-white "
                  />
                </div>
                {/**yha pr dusra shuru ho rha hai */}
                <div className="text-white space-y-2">
                  <h1 className="text-2xl font-semibold">
                    Sign Up & Get Up your address
                  </h1>
                  <p>
                    "Sign Up & Add Your Address" lets users <br /> quickly
                    register and provide address details
                  </p>
                </div>
              </div>
              <div className="flex space-x-3 animate-slideInLeft">
                <div className="mt-2">
                  <img
                    src={assets.shop}
                    alt="image"
                    className="rounded-full w-10 h-10 border border-white bg-white "
                  />
                </div>
                <div className="text-white space-y-2">
                  <h1 className="text-2xl font-semibold">
                    Shop from your fav store
                  </h1>
                  <p>
                    "Sign Up & Add Your Address" lets users <br /> quickly
                    register and provide address details
                  </p>
                </div>
              </div>
            </div>

            {/**the right side ----- */}

            <div className="space-y-48">
              <div className="flex space-x-3 animate-slideInRight">
                <div className="mt-2">
                  <img
                    src={assets.pack}
                    alt="image"
                    className="rounded-full w-10 h-10 border border-white bg-white "
                  />
                </div>
                {/**yha pr dusra shuru ho rha hai */}
                <div className="text-white space-y-2">
                  <h1 className="text-2xl font-semibold">
                    Package consolidation
                  </h1>
                  <p>
                    "Sign Up & Add Your Address" lets users <br /> quickly
                    register and provide address details
                  </p>
                </div>
              </div>
              <div className="flex space-x-3 animate-slideInRight">
                <div className="mt-2">
                  <img
                    src={assets.cargo}
                    alt="image"
                    className="rounded-full w-10 h-10 border border-white bg-white "
                  />
                </div>
                <div className="text-white space-y-2">
                  <h1 className="text-2xl font-semibold">
                    Get it delivered to your <br /> doorstep
                  </h1>
                  <p>
                    "Sign Up & Add Your Address" lets users <br /> quickly
                    register and provide address details
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/**button hai bhaii--- */}
          <div className="items-center text-center mt-4">
            <button className="bg-blue-700 px-5 py-2 mb-6 rounded-lg text-white">
              Get a quote
            </button>
          </div>

          {/**end hai bhai */}
        </div>
      </div>
    </div>
  );
};

export default Facility;
