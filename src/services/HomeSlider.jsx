import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import slide from "../assets/slide-3.jpg";

// import required modules
import { Autoplay } from "swiper/modules";

const HomeSlider = () => {
  //
  return (
    <>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
     
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};
export default HomeSlider;