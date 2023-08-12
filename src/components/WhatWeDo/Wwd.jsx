import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import './Wwd.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

function WhatWeDo() {
    
  const [i, seti] = useState(0);
  const [bgimg, setBgimg] = useState(img1);
  return (
    <div id="services" className="container" style={{backgroundImage:`url(${bgimg})`,backgroundPosition:`center` ,backgroundSize:`cover`, backgroundRepeat:`no-repeat`}}>
      <h1 className="heading">What We Do</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        onSlideChange={()=>{
          // console.log("onslidechange fired");
          if(i==0){
            setBgimg(img1);
            seti(1);
          }
         if (i==1) {
          setBgimg(img2);
          seti(2);
        }
        if (i==2) {
          setBgimg(img3);
          seti(0);
        }
      }}
      autoplay={{delay:5000}}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
        // pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <SwiperSlide>
        <div className="card">
              <div className="card-body">
                <h2 className="card-title"> Young Innovators Program</h2>
                <p className="card-text my-5"> Young Innovator's Program is a platform to foster young minds with scientific enthusiasm and a credo to solve the problems facing the globe. In a two day visit to IIT Kharagpur, the students will get a chance to explore the scientific environment within and an opportunity to present their projects in front of distinguished researches and guests.</p>
                {/* <a href="#" className="btn btn-primary">View More</a> */}
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
              <div className="card-body">
                <h2 className="card-title"> Spotlight</h2>
                <p className="card-text my-5">The Branding and Relations Cell has launched a ‘Spotlight’ initiative for IIT Kharagpur students, allowing students to highlight their accomplishments and awards. In the Spotlight series, the achievements of students in the fields of sports, academics, technology, sociocultural activities, and work in the field of public welfare are highlighted.</p>
                {/* <a href="#" className="btn btn-primary">View More</a> */}
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
              <div className="card-body">
                <h2 className="card-title">UG Achievers Directory</h2>
                <p className="card-text my-5"> The Branding and Relations Cell's UG Achievers Directory (UGAD) initiative aims to highlight IIT Kharagpur students who have accomplished notable achievements during a particular academic year. The official IIT Kharagpur website features UGAD.</p>
                 {/* <a href="#" className="btn btn-primary">View More</a> */}
              </div>
          </div>
        </SwiperSlide> 
        <SwiperSlide>
        <div className="card">
              <div className="card-body">
                <h2 className="card-title"> Young Innovators Program</h2>
                <p className="card-text my-5"> Young Innovator's Program is a platform to foster young minds with scientific enthusiasm and a credo to solve the problems facing the globe. In a two day visit to IIT Kharagpur, the students will get a chance to explore the scientific environment within and an opportunity to present their projects in front of distinguished researches and guests.</p>
                {/* <a href="#" className="btn btn-primary">View More</a> */}
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
              <div className="card-body">
                <h2 className="card-title"> Spotlight</h2>
                <p className="card-text my-5">The Branding and Relations Cell has launched a ‘Spotlight’ initiative for IIT Kharagpur students, allowing students to highlight their accomplishments and awards. In the Spotlight series, the achievements of students in the fields of sports, academics, technology, sociocultural activities, and work in the field of public welfare are highlighted.</p>
                {/* <a href="#" className="btn btn-primary">View More</a> */}
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
              <div className="card-body">
                <h2 className="card-title">UG Achievers Directory</h2>
                <p className="card-text my-5"> The Branding and Relations Cell's UG Achievers Directory (UGAD) initiative aims to highlight IIT Kharagpur students who have accomplished notable achievements during a particular academic year. The official IIT Kharagpur website features UGAD.</p>
                 {/* <a href="#" className="btn btn-primary">View More</a> */}
              </div>
          </div>
        </SwiperSlide> 
       

          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
      </Swiper>
    </div>
  );
}

export default WhatWeDo;