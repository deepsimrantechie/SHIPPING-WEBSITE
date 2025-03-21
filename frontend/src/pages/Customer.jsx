import React from "react";

const Customer = () => {
  return (
    <div className="px-4">
      <div>
        {/* Header Section */}
        <div className="text-center mt-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            What Our Customers Say
          </h1>
          <p className="text-base sm:text-lg mt-2">
            Customer reviews that help you know the ratings.
          </p>
        </div>

        {/* Review Boxes Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {/* Review Box 1 */}
          <div className="bg-gray-200 border rounded-lg h-48 p-4 flex flex-col items-center justify-between">
            <h1 className="font-bold text-center">Customer Rating</h1>
            <p className="text-center mt-2">
              John Doe ⭐⭐⭐⭐⭐ <br />
              "Absolutely love this product! The quality exceeded my
              expectations, and the delivery was super quick. Highly recommend
              to anyone considering a purchase!"
            </p>
          </div>

          {/* Review Box 2 */}
          <div className="bg-gray-200 border rounded-lg h-48 p-4 flex flex-col items-center justify-between">
            <h1 className="font-bold text-center">Customer Rating</h1>
            <p className="text-center mt-2">
              John Doe ⭐⭐⭐⭐ <br />
              "Great value for the price. The design is sleek and functional,
              though I wish there were more color options. Overall, very
              satisfied!"
            </p>
          </div>

          {/* Review Box 3 */}
          <div className="bg-gray-200 border rounded-lg h-48 p-4 flex flex-col items-center justify-between">
            <h1 className="font-bold text-center">Customer Rating</h1>
            <p className="text-center mt-2">
              Michael Brown ⭐⭐⭐⭐⭐ <br />
              "Fantastic experience from start to finish! The customer support
              team was helpful, and the product was exactly as described. Will
              definitely buy again."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
