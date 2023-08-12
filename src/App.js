// import logo from './logo.svg';
import React from "react";
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/About/AboutUs";
import WhatWeDo from "./components/WhatWeDo/Wwd";
import Contact from "./components/Contact/ContactUs";
import Testimonials from "./components/Testimonials/testimonials";

function App(){
  return (<div>
  <Navbar />
  <Hero />
  <AboutUs />
  <WhatWeDo />
  <Testimonials />
  <Contact />
  </div>);
}

export default App;
