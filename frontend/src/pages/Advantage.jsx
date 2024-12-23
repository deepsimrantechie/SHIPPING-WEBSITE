import React, { useState } from "react";
import { assets } from "../assets/assets";

const Advantage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnter = (card) => setActiveCard(card);
  const handleMouseLeave = () => setActiveCard(null);

  return (
    <div className="mt-48 mx-4 md:mx-20">
      <h1 className="text-4xl font-bold">The ShipSwift Advantage</h1>

      <p className="text-xl mt-4">
        The ShipSwift is the shipping service which has exclusive advantages
        such as security, customer support, and many more things.
      </p>

      <div className="flex flex-wrap md:flex-nowrap items-center mt-16">
        {/** Left side image */}
        <div className="w-full md:w-2/5">
          <img src={assets.shipping} alt="" className="rounded-xl w-full" />
        </div>

        {/** Right side cards */}
        <div className="w-full md:w-3/5 mt-8 md:mt-0 md:ml-12 space-y-6">
          {/** Card 1 */}
          <div
            className="rounded-xl shadow-sm p-4 hover:bg-gray-100 hover:scale-105 transition duration-200"
            onMouseEnter={() => handleMouseEnter("card1")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xl">Global Reach</h1>
              <img
                src={activeCard === "card1" ? assets.rightdown : assets.rightup}
                alt="Arrow Icon"
                className="w-8 h-8"
              />
            </div>
            {activeCard === "card1" && (
              <p className="mt-2 text-gray-600">
                We have global connections all over the world for better
                shipment and faster processing.
              </p>
            )}
          </div>

          {/** Card 2 */}
          <div
            className="rounded-xl shadow-sm p-4 hover:bg-gray-100 hover:scale-105 transition duration-200"
            onMouseEnter={() => handleMouseEnter("card2")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xl">Advanced Tracking</h1>
              <img
                src={activeCard === "card2" ? assets.rightdown : assets.rightup}
                alt="Arrow Icon"
                className="w-8 h-8"
              />
            </div>
            {activeCard === "card2" && (
              <p className="mt-2 text-gray-600">
                We have advanced tracking systems to monitor your shipments at
                every stage.
              </p>
            )}
          </div>

          {/** Card 3 */}
          <div
            className="rounded-xl shadow-sm p-4 hover:bg-gray-100 hover:scale-105 transition duration-200"
            onMouseEnter={() => handleMouseEnter("card3")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xl">Affordable Solution</h1>
              <img
                src={activeCard === "card3" ? assets.rightdown : assets.rightup}
                alt="Arrow Icon"
                className="w-8 h-8"
              />
            </div>
            {activeCard === "card3" && (
              <p className="mt-2 text-gray-600">
                We offer cost-effective solutions for your shipping needs
                without compromising quality.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
