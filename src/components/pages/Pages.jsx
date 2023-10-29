import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../common/Footer";
import  Header  from "../common/Header";
import { Home } from "../home/Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
const Pages = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default Pages