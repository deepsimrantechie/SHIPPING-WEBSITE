import React from "react";
import { assets } from "../assets/assets";

const Company = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex mt-10 animate-marquee space-x-36">
        <img src={assets.template1} alt="" className="w-36 h-36" />
        <img src={assets.template2} alt="" className="w-36 h-36" />
        <img src={assets.template3} alt="w-60 h-60" className="w-36 h-36" />
        <img src={assets.template4} alt="w-60 h-60" className="w-36 h-36" />
        <img src={assets.template5} alt="w-60 h-60" className="w-36 h-36" />
        <img src={assets.template6} alt="w-60 h-60" className="w-36 h-36" />
        <img src={assets.template3} alt="w-60 h-60" className="w-36 h-36" />
        <img src={assets.template4} alt="w-60 h-60" className="w-36 h-36" />
        <img src={assets.template3} alt="w-60 h-60" className="w-36 h-36" />
      </div>
    </div>
  );
};

export default Company;
