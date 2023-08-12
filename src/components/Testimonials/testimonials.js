// import React from 'react'
// import ReactDOM from 'react-dom'
// import './testimonials.css'


// export default function Testimonials(){

//     return(
        
// // <link href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet" />

// // <link href='https://fonts.googleapis.com/css?family=Roboto:400,500' rel='stylesheet' type='text/css'> 

// // <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

// <div id="container">

//   <div id="holder">

//     <div id="image">
//       <div class="img jobs"></div>
//       <div class="img zuck"></div>
//       <div class="img musk"></div>
//     </div>

//     <div id="right"></div>

//     {/* <i class='fa fa-quote-left' style={{fontSize:30,color:'blue'}}></i> 
//     <i class='fa fa-quote-right' style='font-size:30px;color:blue'></i>  */}

//     <div id="text">
//       <div id="centerText">
//         <p class="quote">
//           CodePen is a social development environment. At its heart, it allows you to write code in the browser, and see the results of it as you build. A useful and liberating online code editor for developers of any skill, and particularly empowering for people learning to code. We focus primarily on front-end languages like HTML, CSS, JavaScript, and preprocessing syntaxes that turn into those things.
//         </p>
//         <p class="quote">
//           We say social, because CodePen is a community. Most creations on CodePen are public and open source. They are living things that other people and the community can interact with, from a simple hearting, to leaving a comment, to forking and changing for their own needs. 
//         </p>
//         <p class="quote">
//            People use CodePen for all sorts of things: prototyping new ideas, reduced test cases for bugs, sending clients things to look at, evaluating potential hires, to finding inspiration. People also use CodePen as a sort of resume and portfolio, showing off their best design and development work.
//         </p>
//       </div>

//       <nav>
//         <a id="leftBtn" class="prev"><i class="fa fa-arrow-left"></i></a>
//         <a id="rightBtn" class="next"><i class="fa fa-arrow-right"></i></a>
//       </nav>
//     </div>
//   </div>

//   <div id="bg">
//     <div class="slide jobs-bg"></div>
//     <div class="slide zuck-bg"></div>
//     <div class="slide musk-bg"></div>
//   </div>

//   <div id="nav-cirlces">
//     <div class="circle"></div>
//     <div class="circle"></div>
//     <div class="circle"></div>
//   </div>

// </div>
//     )
    

    
// }





// $(window).load(function() {
//     $(".circle")
//       .first()
//       .addClass("active");
//     $("#bg .slide")
//       .first()
//       .addClass("active");
//     $("#image .img")
//       .first()
//       .addClass("active");
//     $(".quote")
//       .first()
//       .addClass("active");
  
//     var animate = setInterval(function() {
//       var $this = $(".circle"),
//         currentActiveBubble = $("#nav-cirlces").find(".active"),
//         position = $("#nav-cirlces")
//           .children()
//           .index(currentActiveBubble),
//         num = $(".circle").length;
  
//       if (position < num - 1) {
//         $(".active")
//           .removeClass("active")
//           .next()
//           .addClass("active");
//       } else {
//         $(".circle")
//           .removeClass("active")
//           .first()
//           .addClass("active");
//         $("#bg .slide")
//           .removeClass("active")
//           .first()
//           .addClass("active");
//         $("#image .img")
//           .removeClass("active")
//           .first()
//           .addClass("active");
//         $(".quote")
//           .removeClass("active")
//           .first()
//           .addClass("active");
//       }
//       position++;
//     }, 4500);
  
//     $(".circle").click(function() {
//       clearInterval(animate);
  
//       var $this = $(this),
//         $siblings = $this.parent().children(),
//         position = $siblings.index($this);
  
//       $(".circle")
//         .removeClass("active")
//         .eq(position)
//         .addClass("active");
//       $("#bg .slide")
//         .removeClass("active")
//         .eq(position)
//         .addClass("active");
//       $("#image .img")
//         .removeClass("active")
//         .eq(position)
//         .addClass("active");
//       $(".quote")
//         .removeClass("active")
//         .eq(position)
//         .addClass("active");
//     });
  
//     $("#rightBtn , #leftBtn").click(function() {
//       clearInterval(animate);
  
//       var $this = $(this),
//         currentActiveBubble = $("#nav-cirlces").find(".active"),
//         position = $("#nav-cirlces")
//           .children()
//           .index(currentActiveBubble),
//         num = $(".circle").length;
  
//       if ($this.hasClass("next")) {
//         if (position < num - 1) {
//           $(".active")
//             .removeClass("active")
//             .next()
//             .addClass("active");
//         } else {
//           $(".circle")
//             .removeClass("active")
//             .first()
//             .addClass("active");
//           $("#bg .slide")
//             .removeClass("active")
//             .first()
//             .addClass("active");
//           $("#image .img")
//             .removeClass("active")
//             .first()
//             .addClass("active");
//           $(".quote")
//             .removeClass("active")
//             .first()
//             .addClass("active");
//         }
//       } else {
//         if (position === 0) {
//           $(".circle")
//             .removeClass("active")
//             .last()
//             .addClass("active");
//           $("#bg .slide")
//             .removeClass("active")
//             .last()
//             .addClass("active");
//           $("#image .img")
//             .removeClass("active")
//             .last()
//             .addClass("active");
//           $(".quote")
//             .removeClass("active")
//             .last()
//             .addClass("active");
//         } else {
//           $(".active")
//             .removeClass("active")
//             .prev()
//             .addClass("active");
//         }
//       }
//     });
//   });
  



// import React from 'react'
// import ReactDOM from 'react-dom'
// import './testimonials.css'

















import React, { useState, useEffect } from 'react';
import './testimonials.css'; 
const image1 = require('./images/bg5.png').default;


const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCircleClick = (index) => {
    clearInterval(animate);
    setActiveIndex(index);
  };


  const handleArrowClick = (next) => {
    clearInterval(animate);
    setActiveIndex((prevIndex) => {
      if (next) {
        return (prevIndex + 1) % 2; // Replace 3 with the number of circles you have
      } else {
        return prevIndex > 0 ? prevIndex - 1 : 1; // Replace 2 with the number of circles you have - 1
      }
    });
  };

  
  let animate; // Declare the animate variable outside the useEffect

  useEffect(() => {
    animate = setInterval(() => { // Assign animate inside the useEffect
      setActiveIndex((prevIndex) => (prevIndex + 1) % 2); // Replace 3 with the number of circles you have
    }, 10000);

    return () => {
      clearInterval(animate);
    };
  }, []);
  const circles = Array.from({ length: 2 }); // Replace 3 with the number of circles you have

  return (

    <div id="testimonials" style={{backgroundColor:"#08707f"}}>
    <div  className='testimonial-heading'><h1>Testimonials</h1></div>
      <div id="holder">
        <div id="image"    style={{
        background: `url(${image1}) center/cover no-repeat`, // Use the image as background
      }} >
          {circles.map((circle, index) => (
            <div
              key={index}
              className={`img img-${index + 1} ${index === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div id="right"></div>
        <div id="text">
          <div id="centerText">
            <div>
              
            <p  className={`quote ${activeIndex === 0 ? 'active' : ''}`+" say"}>
              <span className='span'  style={{}} >Virendra Kumar Tiwari</span>
              <br></br>
              <span>Director, IIT Kharagpur</span>
              <br></br>
            I felt really happy and delighted to see the first ever Young Innovators' Program coming into reality in our campus. Last year around November, when the Branding and Relations Cell pitched this idea to me, it seemed very novel that we will invite school children from all over the country and that we will inculcate in them the credo, the habit of innovation, to bring them to our campus and show them what we do and maybe encourage in them a desire to pursue a career in scientific research and engineering. We launched this in April, we wrote to about 100-400 schools from around the country and we had about 200+ applications and after 2 rounds of eliminations 24 schools were selected for the finals which were held in the IIT Kharagpur campus. The word innovate basically means to alter something or to change something or to create.
            
            </p>
            
            </div>
            <div>
            <p  className={`quote ${activeIndex === 1 ? 'active' : ''}`+" say"}>
            <br></br>
            <span className='span' >Baidurya Bhattacharya</span>
            <br></br>
              <span>Associate Dean, Alumni Affairs and Branding, IIT Kharagpur</span>
              <br></br>
              I felt really happy and delighted to see the first ever Young Innovators' Program coming into reality in our campus. Last year around November, when the Branding and Relations Cell pitched this idea to me, it seemed very novel that we will invite school children from all over the country and that we will inculcate in them the credo, the habit of innovation, to bring them to our campus and show them what we do and maybe encourage in them a desire to pursue a career in scientific research and engineering. We launched this in April, we wrote to about 100-400 schools from around the country and we had about 200+ applications and after 2 rounds of eliminations 24 schools were selected for the finals which were held in the IIT Kharagpur campus. The word innovate basically means to alter something or to change something or to create.
               </p>
            </div>
            {/* <p className={`quote ${activeIndex === 2 ? 'active' : ''}`}>
              People use CodePen for all sorts of things: prototyping new ideas, reduced test cases
              for bugs, sending clients things to look at, evaluating potential hires, to finding
              inspiration. People also use CodePen as a sort of resume and portfolio, showing off
              their best design and development work.
            </p> */}
          </div>
          <nav className='local-nav'>
            <a  className="prev guide" onClick={() => handleArrowClick(false)}>
              <i className="fa fa-arrow-left"></i>
            </a>
            <a   className="next guide" onClick={() => handleArrowClick(true)}>
              <i className="fa fa-arrow-right"></i>
            </a>
          </nav>
        </div>
      </div>
      <div id="bg">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`slide slide-${index + 1} ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <div id="nav-cirlces">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`circle ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleCircleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
