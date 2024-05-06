import React from "react";
import fleximage from "../assets/bread-1.jpg";

const FlexContainer = () => {
  const flexheading = `good food is the ingredient that goes into the making of a happy life`;
  const flexchildheading = `gift happinness`;
  const flexchildsubheading = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam pariatur officiis, consectetur dolores explicabo repellat quia exercitationem autem assumenda, vel minus. Aliquid itaque sed molestias dolorem vel soluta ipsum.`;
  return (
    <div className="w-full h-auto  flex bg-yellow-150">
      <div className="flex flex-col items-center justify-around">
        {/* flex heading */}
        <h2 className="text-xl web:text-4xl text-center my-6 capitalize text-primary font-semibold ">
          {flexheading}
        </h2>
        {/* flextbox starts here  */}
        <div className="flex mobile:flex-col flex-wrap w-full mt-2 ">
          <div className="mobile:w-full bg-yellow-100 w-1/2 h-[350px] flex justify-around items-center">
            <div className="flex flex-col gap-2 justify-around items-center">
              {/* heading */}
              <div className=" text-xl web:text-4xl text-primary font-semibold  capitalize border text-left">
                {flexchildheading}
              </div>
              <p className="w-1/2 mobile:px-2 text-sm mobile:w-full text-center">
                {flexchildsubheading}
              </p>
              {/* explre btn */}
              <div className="p-2">
                <button className="button">
                  <span className="ml-2">Explore Now</span>

                  {/* <span className=""><img src={rightarrow} alt="" /></span> */}
                </button>
              </div>
            </div>
          </div>
          <div className="mobile:w-full   w-1/2 h-[350px] web:flex  web:items-center  web:justify-around ">
            <img
              src={fleximage}
              alt=""
              className="web:w-[80%]  web:h-[80%] mobile:w-full h-[350px] "
            />
          </div>
          <div className="mobile:w-full  mobile:order-4 w-1/2 h-[350px] web:flex  web:items-center  web:justify-around ">
            <img
              src={fleximage}
              alt=""
              className="web:w-[80%]  web:h-[80%] mobile:w-full h-[350px] "
            />
          </div>
          <div className="mobile:w-full bg-yellow-100 w-1/2 h-[350px] flex justify-around items-center">
            <div className="flex flex-col gap-2 justify-around items-center">
              {/* heading */}
              <div className=" text-xl web:text-4xl text-primary font-semibold  capitalize border text-left">
                {flexchildheading}
              </div>
              <p className="w-1/2 mobile:px-2 text-sm mobile:w-full text-center">
                {flexchildsubheading}
              </p>
              {/* explre btn */}
              <div className="p-2">
                <button className="button">
                  <span className="ml-2">Explore Now</span>

                  {/* <span className=""><img src={rightarrow} alt="" /></span> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexContainer;
