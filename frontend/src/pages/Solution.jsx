import React, { useState } from "react";
import { assets } from "../assets/assets";

const Solution = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnter = (card) => setActiveCard(card);
  const handleMouseLeave = () => setActiveCard(null);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="text-center mt-10">
        <h1 className="font-bold text-4xl">
          Tailored Shipping for Every Solution
        </h1>
        <p className="text-lg mt-4 text-gray-600">
          Tailored Shipping Solution for Every Need highlights a personalized
          approach to logistics, offering customized shipping services that
          cater to diverse requirements.
        </p>
      </div>

      {/* Photo Section */}
      <div className="grid grid-cols-12 gap-6 mt-12">
        {/* Card 1 */}
        <div
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          className="col-span-4 h-80 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img
            src={assets.box1}
            alt="Package Forwarding"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-center ${
              activeCard === 1 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            <h1 className="text-white text-xl font-bold mb-2">
              Package Forwarding
            </h1>
            <p className="text-white text-sm">
              Package Forwarding is a service that helps individuals or
              businesses receive goods from international sellers who may not
              ship.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          className="col-span-4 h-80 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img
            src={assets.box2}
            alt="Package Consolidation"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-center ${
              activeCard === 2 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            <h1 className="text-white text-xl font-bold mb-2">
              Package Consolidation
            </h1>
            <p className="text-white text-sm">
              Combine multiple packages into one for lower shipping costs and
              streamlined delivery.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          className="col-span-4 h-80 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img
            src={assets.horijontal}
            alt="Shipping Cost Calculator"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-center ${
              activeCard === 4 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            <h1 className="text-white text-xl font-bold mb-2">
              Shipping Cost Calculator
            </h1>
            <p className="text-white text-sm">
              Reliable handling of oversized or special items for safe delivery.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          className="col-span-12 h-96 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img
            src={assets.vertical}
            alt="Baggage and Handling"
            className="w-full mx-auto h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-center ${
              activeCard === 3 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            <h1 className="text-white text-xl font-bold mb-2">
              Baggage and Handling
            </h1>
            <p className="text-white text-sm">
              Baggage and Handling typically refers to the process of managing,
              transporting, and ensuring the safe delivery of luggage, oversized
              items, or special cargo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
