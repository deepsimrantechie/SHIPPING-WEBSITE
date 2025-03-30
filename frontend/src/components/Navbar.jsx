import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "react-feather";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/aboutus", name: "About" },
    { path: "/prohibited", name: "Prohibited Items" },
    { path: "/calculator", name: "Calculator" },
    { path: "/blog", name: "Blog" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white/90 backdrop-blur-md"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <Link to="/">
              <span className="text-4xl font-bold">shipfit</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="relative group">
                <motion.span
                  className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                    location.pathname === item.path ? "text-blue-600" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute h-0.5 bg-blue-600 bottom-0 left-0 w-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <motion.button
                className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Log in
              </motion.button>
            </Link>
            <Link to="/signup">
              <motion.button
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign up
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <X size={24} className="text-blue-600" />
              ) : (
                <Menu size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className="block">
                  <motion.div
                    className={`px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.path
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link to="/login" className="block mb-3">
                  <motion.button
                    className="w-full px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
                    whileTap={{ scale: 0.98 }}
                  >
                    Log in
                  </motion.button>
                </Link>
                <Link to="/signup" className="block">
                  <motion.button
                    className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-200 font-medium"
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign up
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
