import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Image = () => {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Decorative Element */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 z-0"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />

      {/* Animated Truck Image */}
      <motion.div
        className="relative z-10 flex justify-end py-16 md:py-24 px-4 sm:px-8"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 15,
          delay: 0.4,
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.img
          src={assets.truck}
          alt="Delivery Truck"
          className="w-full max-w-2xl object-contain"
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 },
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute left-10 bottom-20"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
            <h3 className="font-bold text-blue-600">Fast Delivery</h3>
            <p className="text-sm text-gray-600 mt-1">
              Our fleet ensures your packages arrive on time, every time
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Road Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-400"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 0.6 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default Image;
