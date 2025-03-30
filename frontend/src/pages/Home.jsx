import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[90vh] min-h-[600px] bg-[url('/src/assets/background.png')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <motion.div
              className="max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Ship Globally, <br className="hidden md:block" /> Ship
                Seamlessly
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg"
              >
                Your Trusted Partner for international Shipping and Package
                Forwarding
              </motion.p>

              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg"
                >
                  Get Started
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 -mt-20 relative z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Feature Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="p-6 text-center">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <img
                  src={assets.delivery}
                  alt="On-Time Delivery"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                On-Time Delivery
              </h3>
              <p className="text-gray-600">
                Guaranteed timely delivery with real-time tracking for complete
                peace of mind.
              </p>
            </div>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="p-6 text-center">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <img
                  src={assets.trusted}
                  alt="Trusted and Secure"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Trusted & Secure
              </h3>
              <p className="text-gray-600">
                End-to-end encrypted logistics with insured shipments for
                maximum security.
              </p>
            </div>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="p-6 text-center">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <img
                  src={assets.support}
                  alt="Customer Support"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Dedicated support team available round the clock to assist with
                your shipments.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
