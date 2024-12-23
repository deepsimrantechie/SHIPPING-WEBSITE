import React from "react";
import { assets } from "../assets/assets";

const Feature = () => {
  return (
    <div className="mt-6 max-w-4xl mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Grid */}
        <div className=" rounded-lg shadow-2xl p-6 text-center">
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
        <div className=" rounded-lg shadow-2xl p-6 text-center">
          <img
            src={assets.trusted}
            alt="On-Time Delivery"
            className="rounded-full border-blue-700 w-16 h-16 border mx-auto bg-gray-200"
          />
          <h1 className="font-bold text-xl mt-4">Trusted and Secure</h1>
          <p className="text-gray-700 mt-2">
            We provide services <br />
            such as on-time delivery.
          </p>
        </div>

        {/* Third Grid */}
        <div className=" rounded-lg shadow-2xl p-6 text-center">
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
  );
};

export default Feature;
