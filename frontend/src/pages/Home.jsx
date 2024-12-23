import React from "react";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div className="mt-4">
      <div className="relative bg-[url('/src/assets/background.png')] bg-cover bg-center h-screen ">
        <div className="absolute inset-0 bg-black bg-opacity-50 ">
          <div className="mt-40 space-y-6 ml-6">
            <h1 className=" text-white text-5xl font-bold">
              Ship Globally, Ship Seamlessly
            </h1>
            <p className=" text-white text-2xl">
              Your Trusted Partner for international Shipping and <br />
              Package Forwarding
            </p>
            <div>
              <button className="rounded-lg bg-blue-900 text-white px-6 py-4 mt-4 ">
                Get Started
              </button>
            </div>
            {/**this is lower code  */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              <div className="mt-6 max-w-4xl mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                  {/* First Grid */}
                  <div className="rounded-lg shadow-4xl p-6 text-center bg-white">
                    <img
                      src={assets.delivery}
                      alt="On-Time Delivery"
                      className="rounded-full border-blue-700 w-16 h-16 border mx-auto bg-gray-200"
                    />
                    <h1 className="font-bold text-xl mt-4">On-Time Delivery</h1>
                    <p className="text-gray-700 mt-2">
                      We provide services <br />
                      such as on-time delivery.
                    </p>
                  </div>

                  {/* Second Grid */}
                  <div className="rounded-lg shadow-2xl p-6 text-center bg-white">
                    <img
                      src={assets.trusted}
                      alt="On-Time Delivery"
                      className="rounded-full border-blue-700 w-16 h-16 border mx-auto bg-gray-200"
                    />
                    <h1 className="font-bold text-xl mt-4">
                      Trusted and Secure
                    </h1>
                    <p className="text-gray-700 mt-2">
                      We provide services <br />
                      such as on-time delivery.
                    </p>
                  </div>

                  {/* Third Grid */}
                  <div className="rounded-lg shadow-2xl p-6 text-center bg-white">
                    <img
                      src={assets.support}
                      alt="On-Time Delivery"
                      className="rounded-full border-blue-700 w-16 h-16 border mx-auto bg-gray-200"
                    />
                    <h1 className="font-bold text-xl mt-4">Customer Support</h1>
                    <p className="text-gray-700 mt-2">
                      We provide services <br />
                      such as on-time delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/**the end of the code  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
