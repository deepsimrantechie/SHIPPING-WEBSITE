import React from "react";
import { assets } from "../assets/assets";

const Image = () => {
  return (
    <div>
      <div className="flex justify-end mt-60">
        <img src={assets.truck} alt="Truck" className="w-auto h-auto" />
      </div>
    </div>
  );
};

export default Image;
