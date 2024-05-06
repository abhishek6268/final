import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import slide from "../assets/slide-3.jpg";

// import required modules
import { Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";

const HomeSlider = () => {
  //  getting slider data
  const data = useSelector(
    (state) => state.dynamic.dynamic.home.homeSlider.sliderimages
  );
  console.log(data);
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


        {/* dynamic slides goes here */}
        {/* {
          data.map((item) => {
            return (
              <SwiperSlide>
                <img src={item} alt="" />
              </SwiperSlide>
            );
          })
        } */}
      </Swiper>
    </>
  );
};
export default HomeSlider;
