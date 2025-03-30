import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";

const Contact = () => {
  const contactMethods = [
    {
      icon: <FiMapPin className="text-blue-600 text-2xl" />,
      title: "Address",
      details: "9191, janakpuri ,west delhi, Delhi-11053",
    },
    {
      icon: <FiPhone className="text-blue-600 text-2xl" />,
      title: "Phone",
      details: "09876-27364",
    },
    {
      icon: <FiMail className="text-blue-600 text-2xl" />,
      title: "Email",
      details: "contact@swiftshipping.com",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mt-10 text-gray-800 mb-4">
          <span className="text-blue-600">Contact</span> Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get in touch with us! We'd love to hear from you. Whether you have a
          question, feedback, or need support, our team is here to assist you.
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          className="space-y-8"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-3 bg-blue-50 rounded-full">{method.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {method.title}
                </h3>
                <p className="text-gray-600 mt-1">{method.details}</p>
              </div>
            </motion.div>
          ))}

          {/* Map */}
          <motion.div
            className="mt-8 overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.2450746825316!2d-93.2257679241366!3d43.82293397109948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62a4b1b38f8a5%3A0x5d5b3a3a3a3a3a3a!2s4671%20Sugar%20Camp%20Rd%2C%20Owatonna%2C%20MN%2055060!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message <FiSend />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
