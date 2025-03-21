import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate("/"); // For navigation after login

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
    setMessage(null);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        formData
      );

      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token); // Store token in localStorage
        setMessage("Login successful");
        navigate("/dashboard"); // Redirect to dashboard
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="bg-blue-200 min-h-screen mt-4 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-center font-semibold text-2xl mb-6">
          Login to Your Account
        </h1>
        {message && <p className="text-green-600 text-center">{message}</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
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
          <div>
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
            Login
          </button>
        </form>
        <p className="text-center mt-2">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
