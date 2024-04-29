import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../css/explorebtn.css"
import slide from "../assets/crispy-cake-rusk-home.png";

// import required modules
import { Autoplay } from "swiper/modules";

const CookieSlider = () => {

    return (
        <>
            <Swiper
                spaceBetween={30} // Space between slides
                centeredSlides={true} // Center the active slide
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
                slidesPerView={1} // Number of slides per view
                breakpoints={{ // Adjust number of slides per view for different screen sizes
                    640: {
                        slidesPerView: 1, // Number of slides per view on small screens
                    },
                    768: {
                        slidesPerView: 2, // Number of slides per view on medium screens
                    },
                    1024: {
                        slidesPerView: 3, // Number of slides per view on large screens
                    },
                }}
            >
                <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>  <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>

            </Swiper>
            <div className="flex justify-around items-center flex-col mt-6">
                <div className="text-center text-2xl text-primary font-bold uppercase ">
                    made with nik orignals recipes
                </div>
                {/* explre btn */}
                <div className="p-2">
                    <button class="button">
                        <span className="ml-2">Explore Now</span>

                        {/* <span className=""><img src={rightarrow} alt="" /></span> */}
                    </button>
                </div>
            </div>

        </>
    );
};
export default CookieSlider;