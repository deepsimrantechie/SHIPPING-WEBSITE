import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import aeroplane from "../assets/aeroplane.png";

const Facility = () => {
  const steps = [
    {
      id: 1,
      title: "Sign Up & Get Your Address",
      description:
        "Quick registration with immediate access to your dedicated shipping address",
      icon: assets.signicon,
      side: "left",
    },
    {
      id: 2,
      title: "Shop from Your Favorite Store",
      description:
        "Seamless shopping experience with direct shipping to our facility",
      icon: assets.shop,
      side: "left",
    },
    {
      id: 3,
      title: "Package Consolidation",
      description:
        "Smart bundling of multiple purchases for maximum shipping efficiency",
      icon: assets.pack,
      side: "right",
    },
    {
      id: 4,
      title: "Get It Delivered to Your Doorstep",
      description:
        "Reliable, tracked delivery directly to your preferred location",
      icon: assets.cargo,
      side: "right",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const hoverVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      className="relative py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aeroplane})` }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-xl text-blue-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Elevating Your Shipping Experience
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-12">
            {steps
              .filter((step) => step.side === "left")
              .map((step) => (
                <motion.div
                  key={step.id}
                  className="flex gap-6 items-start"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20"
                    variants={hoverVariants}
                  >
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-10 h-10 object-contain"
                    />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="text-xl sm:text-2xl font-semibold text-white mb-2"
                      variants={hoverVariants}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      className="text-blue-100 text-sm sm:text-base"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12 mt-12 md:mt-24">
            {steps
              .filter((step) => step.side === "right")
              .map((step) => (
                <motion.div
                  key={step.id}
                  className="flex gap-6 items-start"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20"
                    variants={hoverVariants}
                  >
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-10 h-10 object-contain"
                    />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="text-xl sm:text-2xl font-semibold text-white mb-2"
                      variants={hoverVariants}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      className="text-blue-100 text-sm sm:text-base"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-cyan-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      />
    </motion.section>
  );
};

export default Facility;
