import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="bg-blue-200  min-h-screen mt-4 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-96 ">
          <h1 className="text-center font-semibold text-2xl mb-6">
            Sign Up to Your account
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Password"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="w-full px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mt-8">
              SignUp
            </button>
          </form>
          <p className="text-center mt-2">
            Do you have an account?{" "}
            <a className="text-blue-500 hover:underline"> Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;