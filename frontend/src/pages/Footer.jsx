import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FiSend, FiArrowRight } from "react-icons/fi";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      items: ["Home", "Prohibited Items", "Our Partners", "Services"],
    },
    {
      title: "Company",
      items: ["Our Team", "Blog", "Contact Us", "Privacy Policy"],
    },
  ];

  return (
    <motion.footer
      className="relative bg-[url('/src/assets/footer.png')] bg-cover bg-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90" />

      <div className="relative z-10">
        {/* CTA Section */}
        <motion.div
          className="py-20 px-4 sm:px-8 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Want To Talk?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Connect with our shipping experts for personalized solutions
          </motion.p>
          <motion.button
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="flex items-center gap-2">
              Get a quote
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>

        {/* Footer Content */}
        <div className="container mx-auto px-4 sm:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl font-bold text-white">shipfit</span>
              <p className="text-gray-400">
                Your trusted partner for seamless international shipping and
                package forwarding solutions.
              </p>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-lg font-semibold mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        <FiArrowRight className="text-xs" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-lg font-semibold mb-6">
                Newsletter
              </h3>
              <p className="text-gray-400 mb-4">
                Subscribe for shipping tips and exclusive offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 rounded-r-lg transition-colors">
                  <FiSend className="text-white text-xl" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mx-4 sm:mx-8"
        />

        {/* Copyright */}
        <motion.div
          className="py-6 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} ShipSwift. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
