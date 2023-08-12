import React from "react";
import { useRef } from "react";
import YIPstats from "./YIPStats";
import "./styles/AboutDesktop.css";
import "./styles/AboutMobile.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
const headVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 1.5,
    ease: "easeInOut",
  },
};
// const boxVariants = {
//   hidden: { opacity: 0, y: 25 },
//   show: {
//     opacity: 1,
//     y: 0
//   },
//   transition: {
//     duration: 1.5,
//     ease: "easeInOut"
//   }
// };
const yiponScreen = {
  offscreen: {
    scale: 0.5,
  },
  onscreen: {
    y: 3,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 2
    },
  },
};

function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="about" className="about-us-outer">
      <motion.div>
        <div className=" about-grid">
          <div
            // ref={ref}
            // variants={yiponScreen}
            // initial="offscreen"
            // whileInView="onscreen"
            className="yip-stats-container"
          >
            <YIPstats />
          </div>
          <motion.div className="about-us-container"
          ref={ref}
           style={{
          transform: isInView ? "none" : "translateY(+50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }}>
            <div className="about-us">
              <motion.h1>
                ABOUT
              </motion.h1>
            </div>

            <div className=" about-us-text">
              <motion.p>
                Branding and Relations cell is a student body under the aegis of
                the Office of Alumni Affairs and Branding. It aims towards
                positioning IIT Kharagpur as a global leader in the field of
                science and technology.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
export default AboutUs;
