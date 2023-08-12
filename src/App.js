// import logo from './logo.svg';
import React from "react";
import Hero from "../src/components/Hero/hero";
import Navbar from "../src/components/Navbar/Navbar";
import AboutUs from "./components/About/AboutUs";
import WhatWeDo from "../src/components/WhatWeDo/Wwd";
import Contact from "./components/Contact/ContactUs"

function App(){
  return (<div
  //  style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}
   >
  <Navbar />
  <Hero />
  <AboutUs />
  <WhatWeDo />
  <Contact />
  </div>);
}

export default App;