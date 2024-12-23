import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Advantage from "./pages/Advantage";
import Facility from "./pages/Facility";
import Solution from "./pages/Solution";
import Company from "./components/Company";
import Customer from "./pages/Customer";
import Footer from "./pages/Footer";
import Login from "./components/Login";
import Image from "./components/Image";
import Signup from "./components/Signup";
import Aboutus from "./components/Aboutus";
import Prohibited from "./components/Prohibited";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Router>
        {/**Navbar */}
        <Navbar />
        <div className="">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Advantage />
                  <Facility />
                  <Solution />
                  <Company />
                  <Customer />
                  <Image />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Prohibited" element={<Prohibited />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
