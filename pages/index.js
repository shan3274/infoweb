import About from "@/components/About";
import Contact from "@/components/Contact";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import React from "react";

const index = () => {
  return (
    <>
      <Navbar />
      <About />
      <Service />
      <Facilities />
      <Contact />
      <Footer />
    </>
  );
};

export default index;
