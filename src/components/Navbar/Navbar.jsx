import React, { useState } from "react";
import "./Navbar.css"
import {motion} from "framer-motion";
import Img from "../../assets/images/Signature.jpg";
// import Toggle from "./nav";
// import "../../assets/js/main"
import {BsList} from "react-icons/bs";
function Navbar(){

  const overlayVariants={
    hidden: {
      opacity: 0,
      scale:1,
    
    },
    show: {
      opacity:1,
      scale:1,
      
    },

      transition: {
        duration:3,       
        ease:"easeInOut"
      }
    };
    const [header,changeHeader]=useState("header fixed-top ")
    let nav = document.getElementById("navbar");
    window.onscroll = function () {
      
      if (document.documentElement.scrollTop > 40) {
        changeHeader("header fixed-top sticky")
      } 
      else {
        changeHeader("header fixed-top ")
      }
    };


    

  
    const [Nav,switchNav]=useState("navbar");
    const [Icon,switchIcon]=useState("fa-solid fa-bars mobile-nav-toggle");
    let state=false;

    function mobNav(){
      state=!state;
      if(state)
      {
      switchNav("navbar-mobile");
      switchIcon("fa-solid fa-xmark mobile-nav-toggle");

    }
    else{
    switchNav("navbar");
    switchIcon("fa-solid fa-bars mobile-nav-toggle");
  }
    }
    return (
      <motion.div
      
      variants={overlayVariants}
      initial="hidden"
      animate="show"
      transition={("transition", { delay: 9 })}
      >
      

        <header id="header" class={header}>
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center ">
        <img src={Img} alt="" />
        <span>BRANDING AND RELATIONS CELL</span>
      </a>

      <nav id="navbar" className={Nav}>
        <ul>
          <li><a class="nav-link scrollto active" href="#home">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">What We Do</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a class="nav-link scrollto" href="#testimonials">Testimonials</a></li>
          <li><a class="nav-link scrollto" href="#gallery">Gallery</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="#">Visit YIP</a></li>
        </ul>
        <button style={{height:"40px",width:"40px",backgroundColor:"transparent",border:"none"}} onClick={mobNav} className={Icon}></button>
        {/* <i className="bi bi-list mobile-nav-toggle "><BsList  /></i> */}
      </nav>

    </div>
  </header>
  </motion.div>
    );
}

export default Navbar;