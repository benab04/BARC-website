import React from "react";
import { motion } from "framer-motion";
import { BiMap } from "react-icons/bi";
function ContactInfo() {
  return (
    <div className="contact-info">
      <p className="title-info">
        Where to find us
        <a
          href="https://goo.gl/maps/a7k37ZPQLCE1Sa6e9"
          target="_blank"
          rel="noreferrer"
        >
          <BiMap className="map" />
        </a>
      </p>

      <div className="info">
        <div className="information">
          <p>
            Branding and Relations Cell
            <br /> Office of Alumni Affairs & Branding
            <br />
            Indian Institute of Technology, Kharagpur Pin-721302
            <br /> West Bengal, India
            <br />
          </p>
        </div>
        <p className="title-info">Email Us</p>
        <div className="information">
          <p>Email : barc@iitkgp.ac.in</p>
        </div>
        <p className="title-info">Call Us</p>
        <p className="text">Aishwary Patel</p>
        <div className="information">
          <p>
            +91-9630271203
            <br />
            aishwarypatel2004@gmail.com
          </p>
        </div>
        <p className="text">Bhumi Tayal</p>
        <div className="information">
          <p>
            +91-7684067297
            <br />
            tayalbhumi8@gmail.com
          </p>
        </div>
      </div>

      <div className="social-media">
        <p>Connect with us :</p>
        <div className="social-icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/barc.iitkgp/"
          >
            <motion.i
              whileHover={{ scale: 1.3 }}
              className="fa fa-instagram"
              style={{ fontSize: "20px", color: "white" }}
            ></motion.i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/barciitkgp"
          >
            <motion.i
              whileHover={{ scale: 1.3 }}
              className="fa fa-facebook-square"
              style={{ fontSize: "20px", color: "white" }}
            ></motion.i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/brandingandrelationscell/"
          >
            <motion.i
              whileHover={{ scale: 1.3 }}
              className="fa fa-linkedin-square"
              style={{ fontSize: "20px", color: "white" }}
            ></motion.i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
