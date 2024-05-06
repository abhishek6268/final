import React from "react";

const RelatedProduct = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-lg:text-center">
          Product list
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 10 }).map((item) => {
            return (
              <a
                href="javascript:;"
                className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
              >
                <div className="">
                  <img
                    src="https://pagedone.io/asset/uploads/1700726158.png"
                    alt="face cream image"
                    className="w-full aspect-square"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-primary">
                      Face cream
                    </h6>
                    <h6 className="font-semibold text-xl leading-8 text-primary">
                      $100
                    </h6>
                  </div>
                  <p className="mt-2 font-normal text-sm leading-6 text-gray-500">
                    Orange & Aloe Vera
                  </p>
                </div>
              </a> 
            );
          })}
        </div>
      </div>
    </section>
  
  );
};

export default RelatedProduct;



<div class="swiper multiple-slide-carousel swiper-container relative">
 <div class="swiper-wrapper mb-16">
   <div class="swiper-slide">
     <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
       <span class="text-2xl font-semibold text-indigo-600">Slide 1 </span>
     </div>
   </div>
   <div class="swiper-slide">
     <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
       <span class="text-2xl font-semibold text-indigo-600">Slide 2 </span>
     </div>
   </div>
   <div class="swiper-slide">
     <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
       <span class="text-2xl font-semibold text-indigo-600">Slide 3 </span>
     </div>
   </div>
   <div class="swiper-slide">
     <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
       <span class="text-2xl font-semibold text-indigo-600">Slide 4 </span>
     </div>
   </div>
 </div>
 <div class="absolute flex justify-center items-center m-auto left-0 right-0 w-fit bottom-12">
   <button id="slider-button-left" class="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full  hover:bg-indigo-600 !-translate-x-16" data-carousel-prev>
     <svg class="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
       <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
     </svg>
   </button>
   <button id="slider-button-right" class="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 !translate-x-16" data-carousel-next>
     <svg class="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
       <path d="M5.99984 4.00012L10 8.00029L5.99748 12.0028" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
     </svg>
   </button>
 </div>
</div>
