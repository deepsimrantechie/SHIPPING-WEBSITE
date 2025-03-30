import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { assets } from "../assets/assets";

const Aboutus = () => {
  const stats = [
    { count: "10,000+", label: "Successful Deliveries" },
    { count: "50+", label: "Global Partners" },
    { count: "1M+", label: "Happy Customers" },
    { count: "24/7", label: "Customer Support" },
  ];

  const teamMembers = [
    { name: "Alex Johnson", role: "CEO & Founder", img: assets.team1 },
    { name: "Sarah Williams", role: "Operations Director", img: assets.team2 },
    { name: "Michael Chen", role: "Technology Lead", img: assets.team3 },
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "We push boundaries with cutting-edge logistics solutions",
    },
    {
      title: "Integrity",
      description: "Honest and transparent in all our business dealings",
    },
    {
      title: "Customer Focus",
      description: "Exceptional service tailored to your shipping needs",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="py-20 px-6 lg:px-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Do You <span className="text-blue-600">Want</span> To Take A{" "}
          <span className="text-blue-600">Look</span>?
        </motion.h1>

        <motion.p
          className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to ShipSwift, your trusted partner for fast, reliable, and
          efficient shipping solutions. Our mission is to simplify logistics
          with seamless services for businesses and individuals. With
          cutting-edge technology and an experienced team, we handle every
          shipment with care and precision.
        </motion.p>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {stat.count}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-20 px-6 lg:px-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
        >
          Our <span className="text-blue-600">Mission</span>
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            To revolutionize global shipping through innovative,
            customer-centric solutions that deliver reliability, speed, and
            transparency. We're committed to connecting the world with seamless
            logistics that empower businesses and individuals alike.
          </p>
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-24 bg-gray-50">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Meet Our <span className="text-blue-600">Team</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                {/* Social icons would go here */}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 lg:px-24 bg-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Our Core <span className="text-blue-600">Values</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-8 rounded-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
        >
          Join Our Shipping Revolution
        </motion.h2>

        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Experience the future of logistics with our reliable shipping
          solutions
        </motion.p>

        <motion.button
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center mx-auto gap-2 hover:bg-blue-50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started <FiArrowRight />
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Aboutus;
