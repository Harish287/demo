import React from "react";
import Navbar from "../bridalnavbar/bridal";
import "./makeup.css";

import Consulting from "./consulting.jpg";
import Prebridal from "./Pre-Bridal.jpg";
import Teach from "./teach.jpg";
import Actual from "./acutal.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, A11y } from "swiper/modules";

import Bridalfooter from "./bridalfooter";

import "bootstrap/dist/css/bootstrap.min.css";

const makeup = () => {

  

  return (
    <div>
      <Navbar />
      <div className="image-slider-makeup">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={Consulting} className="img-makeup" alt="1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Consulting} className="img-makeup" alt="2" href="2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Consulting} className="img-makeup" alt="3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Consulting} className="img-makeup" alt="4" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="consultents">
        <div className="consults">
          <img src={Consulting} className="consultings-img" alt="2" href="2" />
        </div>

        <div className="consults">
          <img src={Consulting} className="consultings-img" alt="2" href="2" />
        </div>

        <div className="consults">
          <img src={Prebridal} className="consultings-img" alt="2" href="2" />
        </div>

        <div className="consults">
          <img src={Teach} className="consultings-img" alt="2" href="2" />
        </div>

        <div className="consults">
          <img src={Actual} className="consultings-img" alt="2" href="2" />
        </div>
      </div>
 

 <div>
  <h1 className="topartisth1">Our Top Artists</h1>
 </div>
  
      <Bridalfooter />
    </div>
  );
};

export default makeup;
