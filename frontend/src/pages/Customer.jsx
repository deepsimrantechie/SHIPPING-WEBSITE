import React from "react";

const Customer = () => {
  return (
    <div>
      <div>
        <div className="items-center text-center mt-16 ">
          <h1 className="text-4xl font-bold">What Our Customer Say</h1>
          <p className="text-lg mt-2">
            the customer review which helps you to knows the reating{" "}
          </p>
        </div>
        {/**--the review boxes- */}
        <div className="flex flex-col-3 mt-16 space-x-6 mr-2 ml-2">
          {/**col 1 */}
          <div className="bg-gray-200 border rounded-lg w-1/3 h-48 items-center justify-around">
            <h1 className="font-bold mt-2 text-center justify-around">
              customer rating
            </h1>
            <p className="text-center mt-2">
              John Doe ⭐⭐⭐⭐⭐ <br />
              "Absolutely love this product! The quality exceeded my
              expectations, and the delivery was super quick. Highly recommend
              to anyone considering a purchase!"
            </p>
          </div>
          {/**col 2 */}
          <div className="bg-gray-200 border rounded-lg w-1/3 h-48 items-center justify-around">
            <h1 className="mt-2 font-bold text-center">customer rating</h1>
            <p className="mt-2 text-center">
              {" "}
              John Doe ⭐⭐⭐⭐ <br />
              "Great value for the price. The design is sleek and functional,
              though I wish there were more color options. Overall, very
              satisfied!"{" "}
            </p>
          </div>
          {/**col 3 */}
          <div className="bg-gray-200 border rounded-lg w-1/3 h-48 items-center justify-around">
            <h1 className="font-bold mt-2 text-center">customer rating</h1>
            <p className="text-center mt-2">
              {" "}
              Michael Brown ⭐⭐⭐⭐⭐
              <br /> "Fantastic experience from start to finish! The customer
              support team was helpful, and the product was exactly as
              described. Will definitely buy again."{" "}
            </p>
          </div>
        </div>
        {/**the review box end here- */}
      </div>
    </div>
  );
};

export default Customer;
