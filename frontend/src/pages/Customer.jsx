import React from "react";
import { motion } from "framer-motion";
import { Star } from "react-feather";

const Customer = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Absolutely love this service! The shipping was faster than expected and customer support was incredibly helpful when I had questions.",
      role: "Frequent Shopper",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      comment:
        "Great value for international shipping. Package arrived in perfect condition. Would give 5 stars if tracking updates were more frequent.",
      role: "Small Business Owner",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      rating: 5,
      comment:
        "Fantastic experience from start to finish! Consolidated three packages seamlessly and saved me 30% on shipping costs. Highly recommend!",
      role: "E-commerce Enthusiast",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Hear from our satisfied customers about their shipping experiences
        </p>
      </motion.div>

      {/* Reviews */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            variants={item}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="p-6">
              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-gray-600 italic mb-6">
                "{review.comment}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats/Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3">
          <span className="text-blue-600 font-medium">
            Trusted by 10,000+ customers worldwide
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Customer;
