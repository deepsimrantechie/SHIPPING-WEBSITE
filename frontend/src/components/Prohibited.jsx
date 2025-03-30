import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FiAlertTriangle } from "react-icons/fi";

const Prohibited = () => {
  const prohibitedItems = [
    {
      id: 1,
      title: "Alcohol & Narcotics",
      description:
        "All alcoholic beverages and narcotic substances are strictly prohibited",
      image: assets.alcahol,
      severity: "High",
    },
    {
      id: 2,
      title: "Animal Products",
      description:
        "Animal skins, ivory, and other wildlife products are banned",
      image: assets.Animal,
      severity: "High",
    },
    {
      id: 3,
      title: "Fireworks & Explosives",
      description: "All pyrotechnics, explosives, and flammable materials",
      image: assets.fireworks,
      severity: "Extreme",
    },
    {
      id: 4,
      title: "Weapons",
      description: "Firearms, ammunition, and other weapons are prohibited",
      image: assets.explosive,
      severity: "Extreme",
    },
    {
      id: 5,
      title: "Plants & Seeds",
      description:
        "Live plants, seeds, and agricultural products may be restricted",
      image: assets.fireworks, // Note: Should use a plants image
      severity: "Medium",
    },
    {
      id: 6,
      title: "Restricted Electronics",
      description:
        "Certain electronic devices may be prohibited in some regions",
      image: assets.Animal, // Note: Should use an electronics image
      severity: "Medium",
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Extreme":
        return "bg-red-600";
      case "High":
        return "bg-orange-500";
      case "Medium":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12  mt-4 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-8">
          List of <span className="text-blue-600">Prohibited Items</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          For safety and compliance reasons, these items cannot be shipped
          through our service
        </p>
      </motion.div>

      {/* Prohibited Items List */}
      <div className="max-w-4xl mx-auto space-y-6">
        {prohibitedItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className="sm:w-1/3 p-4 flex items-center justify-center bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-contain"
                />
              </div>

              {/* Content */}
              <div className="sm:w-2/3 p-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {item.title}
                  </h2>
                  <span
                    className={`${getSeverityColor(
                      item.severity
                    )} text-white text-xs font-bold px-2 py-1 rounded-full`}
                  >
                    {item.severity} Risk
                  </span>
                </div>

                <p className="mt-3 text-gray-600">{item.description}</p>

                <div className="mt-4 flex items-center text-red-600">
                  <FiAlertTriangle className="mr-2" />
                  <span className="text-sm font-medium">
                    Strictly prohibited - penalties may apply
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Disclaimer */}
      <motion.div
        className="mt-16 p-6 bg-blue-50 rounded-lg max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          Important Notice
        </h3>
        <p className="text-gray-700">
          This list is not exhaustive. Shipping prohibited items may result in
          confiscation, fines, or legal action. When in doubt about an item,
          please contact our support team before shipping.
        </p>
      </motion.div>
    </div>
  );
};

export default Prohibited;
