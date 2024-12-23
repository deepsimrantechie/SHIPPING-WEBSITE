import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className=" relative  bg-cover bg-center min-h-screen mt-4">
      <div className="absolute inset-0 ">
        <h1 className="text-gray-300 text-4xl mt-10 font-bold text-center">
          <a className="animate-pulse text-blue-800"> Contact </a> Us
        </h1>
        <p className="text-gray-500 mt-2 text-lg  text-center ml-4 mr-4 flex items-center justify-evenly">
          Get in touch with us! We’d love to hear from you. Whether you have a
          question, feedback, or need support, feel free to reach out. Use the
          contact form below or connect with us via email or phone. We’re here
          to assist you with your inquiries and ensure your experience is
          seamless. Let’s start a conversation!
        </p>
        {/**the secotion */}
        <div className="flex items-center justify-around">
          {/**the left */}
          <div className="space-y-6 ml-4 mt-16">
            <div className="text-black space-y-8">
              <div className="flex items-start space-x-4">
                <img
                  src={assets.location}
                  alt="Location Icon"
                  className="rounded-full w-10 h-10 border border-blue-700 bg-white p-2"
                />
                <div>
                  <h2 className="text-2xl font-semibold">Address</h2>
                  <p className="text-sm mt-1">
                    4671 Sugar Camp Road,
                    <br />
                    Owatanna, Minnesota,
                    <br />
                    550060
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <img
                  src={assets.phone}
                  alt="Phone Icon"
                  className="rounded-full w-12 h-12 border border-blue-700 bg-white p-2"
                />
                <div>
                  <h2 className="text-2xl font-semibold">Phone</h2>
                  <p className="text-sm mt-1">507-475-60934-3849</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <img
                  src={assets.email}
                  alt="Email Icon"
                  className="rounded-full border border-blue-700 w-10 h-10 bg-white p-2"
                />
                <div>
                  <h2 className="text-2xl font-semibold">Email</h2>
                  <p className="text-sm mt-1">swiftshipping@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          {/**the rigt */}
          <div className="border border-blue-700 p-8 w-96 shadow-lg mt-14 rounded-lg ">
            <h1 className="text-2xl font-bold  mb-4">Send Message</h1>
            <form>
              <div>
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Enter Your Name "
                  className="block border border-gray-500 rounded-lg w-full py-2 mb-1 "
                />
              </div>
              <div>
                <h1>Email</h1>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="block border border-gray-500 rounded-lg py-2 mb-2 w-full"
                />
              </div>
              <div className="mb-4">
                <p>Message</p>
                <input
                  type="text"
                  placeholder="Enter Your Message"
                  className="block  border  border-gray-500 rounded-lg py-2 mb-2 w-full"
                />
              </div>
              <button className="w-full rounded-lg py-2 bg-blue-900 hover:bg-blue-700 text-white">
                send{" "}
              </button>
            </form>
          </div>
          {/**the end  */}
        </div>
        {/**the end  */}
      </div>
    </div>
  );
};

export default Contact;
