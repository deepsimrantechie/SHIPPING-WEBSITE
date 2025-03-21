import React from "react";
import { assets } from "../assets/assets";

const Aboutus = () => {
  return (
    <div className="min-h-screen  mt-4">
      <div>
        <h1 className="text-4xl text-center mt-20 font-bold text-gray-500">
          DO YOU <a className="animate-pulse text-blue-800">WANT</a> TO TAKE A{" "}
          <a className="animate-pulse text-blue-800"> LOOK </a>?
        </h1>
        <p className="mr-3 ml-6 mt-6 text-lg font-medium text-gray-600">
          Welcome to [Your Shipping Website Name], your trusted partner for
          fast, reliable, and efficient shipping solutions. Our mission is to
          simplify your logistics experience, providing seamless services that
          cater to businesses and individuals alike. With a commitment to
          excellence, we offer a wide range of shipping options, from domestic
          deliveries to international freight. Our cutting-edge technology and
          experienced team ensure your shipments are handled with utmost care
          and precision, every step of the way. At [Your Shipping Website Name],
          customer satisfaction is at the heart of what we do. We take pride in
          delivering more than just packages – we deliver peace of mind. Whether
          you're sending a small parcel or managing complex logistics, we're
          here to meet your needs with transparency, speed, and reliability.
          Join thousands of satisfied customers who trust us to keep their
          deliveries moving. Let us help you connect the world, one shipment at
          a time.
        </p>
      </div>
      {/**the next */}

      <section className="flex items-center justify-center mt-10 space-x-16">
        {[
          { count: "10'000", label: "Deliveries" },
          { count: "10'000", label: "Packages" },
          { count: "1M", label: "Customers" },
          { count: "50", label: "Partner" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-2xl font-bold">{stat.count}</h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>
      {/**the end  */}
      <div className="text-4xl h-52 mt-14">
        <h1 className="text-4xl text-center font-bold  text-gray-500 ">
          Our <a className="text-blue-800 animate-pulse"> Mission</a>
        </h1>
        <p className="mr-3 ml-6 mt-6 text-lg font-medium text-gray-600">
          Our mission is to create innovative, user-centric, and sustainable
          digital solutions that empower individuals and businesses. By
          combining cutting-edge technology with a commitment to excellence, we
          aim to deliver seamless experiences that inspire creativity, foster
          growth, and drive positive change in the world.
        </p>
      </div>

      {/**our team */}
      <section className="bg-white py-20 px-6 lg:px-24">
        <h2 className="text-4xl font-bold mb-16 text-center">
          MeeT Our <a className="animate-pulse text-blue-800">Team</a>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src=""
              alt=""
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO & Founde</p>
          </div>
          <div className="text-center">
            <img
              src=""
              alt=""
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO & Founde</p>
          </div>
          <div className="text-center">
            <img
              src=""
              alt=""
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO & Founde</p>
          </div>
        </div>
      </section>
      {/**the core values */}
      {/**--core section value--- */}
      <section className="py-20 px-6 lg:px-24 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">Our Core Value</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-blue-800">Innovation</h3>
            <p className="text-gray-600">
              We strive to push the boundaries of what’s possible, constantly
              innovating to stay ahead of the curve.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800">Integrity</h3>
            <p className="text-gray-600">
              We conduct our business with honesty and transparency, ensuring
              trust with our customers and partners.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              {" "}
              Customer Focus
            </h3>
            <p className="text-gray-600">
              We put our customers first, constantly striving to understand
              their needs and provide exceptional service.
            </p>
          </div>
        </div>
      </section>
      {/**--the call to action section------ */}
      <section className=" text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">
          Join Our Journey
        </h2>
        <p className="text-lg mb-6 text-blue-800">
          Be a part of our growing community! Together, we can achieve great
          things.
        </p>{" "}
        <a className="bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          Get in Touch
        </a>
      </section>
      {/**the end  */}
    </div>
  );
};

export default Aboutus;
