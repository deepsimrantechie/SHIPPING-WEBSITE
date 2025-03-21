import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // To navigate after sign-up

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate("/"); // Hook to navigate after successful sign-up

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages
    setError(null); // Clear previous errors

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/register", // Endpoint for registration
        formData
      );

      const { token } = response.data; // Assume the response contains the token
      if (token) {
        localStorage.setItem("token", token); // Store the token in localStorage
        setMessage("Registration successful!");

        // Redirect to the dashboard or any protected page
        navigate("/dashboard");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      ); // Error feedback
    }
  };

  return (
    <div className="bg-blue-200 min-h-screen mt-4 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-center font-semibold text-2xl mb-6">
          Sign Up to Your Account
        </h1>
        {message && <p className="text-green-600 text-center">{message}</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mt-8"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-2">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
