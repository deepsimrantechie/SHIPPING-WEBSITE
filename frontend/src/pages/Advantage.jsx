import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const Advantage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardHover = (card) => setActiveCard(card);
  const handleCardLeave = () => setActiveCard(null);

  const advantages = [
    {
      id: "card1",
      title: "Global Reach",
      description:
        "We have global connections all over the world for better shipment and faster processing.",
      icon: assets.global,
    },
    {
      id: "card2",
      title: "Advanced Tracking",
      description:
        "Real-time tracking with our advanced systems to monitor your shipments at every stage.",
      icon: assets.tracking,
    },
    {
      id: "card3",
      title: "Affordable Solution",
      description:
        "Cost-effective shipping solutions without compromising quality or reliability.",
      icon: assets.affordable,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          The ShipSwift Advantage
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-600 max-w-2xl">
          Experience premium shipping services with exclusive benefits including
          enhanced security, 24/7 customer support, and cutting-edge logistics
          solutions.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-2/5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={assets.shipping}
              alt="Shipping Illustration"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>

        {/* Cards Section */}
        <div className="w-full lg:w-3/5 space-y-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`relative rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  activeCard === advantage.id
                    ? "bg-white shadow-lg border border-gray-100"
                    : "bg-gray-50 hover:bg-white shadow-md"
                }`}
                onMouseEnter={() => handleCardHover(advantage.id)}
                onMouseLeave={handleCardLeave}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      activeCard === advantage.id
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <img
                      src={advantage.icon}
                      alt={advantage.title}
                      className="w-6 h-6"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-lg md:text-xl font-semibold ${
                          activeCard === advantage.id
                            ? "text-blue-600"
                            : "text-gray-800"
                        }`}
                      >
                        {advantage.title}
                      </h3>
                      <motion.div
                        animate={{
                          rotate: activeCard === advantage.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg
                          className={`w-6 h-6 ${
                            activeCard === advantage.id
                              ? "text-blue-500"
                              : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {activeCard === advantage.id && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 text-gray-600 overflow-hidden"
                        >
                          {advantage.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Glow effect */}
                {activeCard === advantage.id && (
                  <div className="absolute inset-0 rounded-xl border border-blue-200/50 pointer-events-none" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
