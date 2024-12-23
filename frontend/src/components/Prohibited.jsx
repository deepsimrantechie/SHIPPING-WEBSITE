import React from "react";
import { assets } from "../assets/assets";

const Prohibited = () => {
  return (
    <div className="min-h-screen mt-16 ">
      <div className="mb-16">
        <h1 className="text-4xl ml-4 font-bold text-center">
          List of Prohibited{" "}
          <a className="animate-pulse text-blue-800"> Items</a>
        </h1>
      </div>
      {/**the itesm */}
      <div className="mb-16 space-y-4">
        <div className=" flex border rounded-lg px-10  ">
          <img
            src={assets.alcahol}
            alt="alacahol"
            className="w-40 h-40 border"
          />
          <h1 className="mt-2 font-semibold text-2xl   ml-2">
            Alcahol or Narcotics is strictly banned{" "}
          </h1>
        </div>
        {/**the second */}
        <div className=" flex border px-10 w-full ">
          <img
            src={assets.Animal}
            alt="alacahol"
            className="w-40 h-40 border "
          />
          <h1 className="mt-2 font-semibold text-2xl ml-2">
            Animal skin is strictly banned{" "}
          </h1>
        </div>
        {/**the third */}
        <div className=" flex border px-10 w-full ">
          <img
            src={assets.fireworks}
            alt="alacahol"
            className="w-40 h-40 border "
          />
          <h1 className="mt-2 font-semibold text-2xl ml-2">
            Firework is strictly banned{" "}
          </h1>
        </div>
        {/**the third */}
        <div className=" flex border px-10 w-full  ">
          <img
            src={assets.explosive}
            alt="alacahol"
            className="w-40 h-40 border "
          />
          <h1 className="mt-2 font-semibold text-2xl ml-2">
            Explosive is strictly banned{" "}
          </h1>
        </div>
        {/**the forth */}
        <div className=" flex border px-10 w-full ">
          <img
            src={assets.fireworks}
            alt="alacahol"
            className="w-40 h-40 border "
          />
          <h1 className="mt-2 font-semibold text-2xl ml-2">
            Plants is strictly banned{" "}
          </h1>
        </div>
        {/**the fifth */}
        <div className=" flex border px-10 w-full ">
          <img
            src={assets.Animal}
            alt="alacahol"
            className="w-40 h-40 border "
          />
          <h1 className="mt-2 font-semibold text-2xl ml-2">
            Electronics device is strictly banned{" "}
          </h1>
        </div>
      </div>
      {/**the end  */}
    </div>
  );
};

export default Prohibited;
