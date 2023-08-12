import videoBg from "../../assets/videos/BGV.mp4";
import {motion} from "framer-motion";
import Img from "../../assets/images/Signature.jpg";
import './hero.css';
// import IndexNavbar from "./components/Navbar/IndexNavbar";
// import Navbar from "./components/Navbar/Navbar"
function App() {
  const titleVariants={
    hidden: {
      opacity: 0,
      scale:1
    },
    show: {
      opacity:1,
      scale:1,
      transition: {
        duration:2,
        delay:8,
        ease:"easeInOut"
      }
    }
    
  }
  const overlayVariants={
    hidden: {
      opacity: 0.2,
      scale:1
    },
    show: {
      opacity:1,
      scale:1,
      transition: {
        duration:2,
        delay:7,
        ease:"easeInOut"
      }
    }
    
  }
  return (
    <div id="home" className="home">
      
    <video src={videoBg} autoPlay="true"  muted/>
     <motion.div className='overlay'
   
     variants={overlayVariants}
     initial="hidden"
     animate="show"
     transition="transition"></motion.div>
     <motion.div 
     className='title'
     variants={titleVariants}
     initial="hidden"
     animate="show"
     transition="transition"><div className='wrap-title'><div><img className='title-image' src={Img}/></div><div><h1>BRANDING AND RELATIONS CELL, IIT KHARAGPUR</h1></div></div>
     </motion.div>
    
    </div>
  );
}

export default App;
