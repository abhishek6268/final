import React from "react";
import logo from "../assets/nik-bakers-logo.png";

const MultipleBoxContainer = () => {
  const flexchildheading = `gift happinness`;
  const flexchildsubheading = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam pariatur officiis, consectetur dolores explicabo repellat quia exercitationem autem assumenda, vel minus. Aliquid itaque sed molestias dolorem vel soluta ipsum.`;
  return (
    <div className="w-full h-auto mobile:gap-4 flex mobile:flex-col justify-around items-center p-4 web:divide-x-4 mobile:divide-y-2 bg-tertiary mt-6">
      <div className="w-1/3 mobile:w-full mobile:text-xl text-3xl text-secondary font-semibold text-center mobile:m-4">
        {/* heading */}
        <div className="text-center px-4">Made With</div>
        <div className="text-center px-4">Nik Orignal's</div>
        <div className="text-center px-4">Recipies</div>
      </div>
      <div className="w-1/2 mobile:w-full ">
        <div className="flex flex-col gap-2 justify-around items-center text-secondary mobile:m-4">
          {/* heading */}
          <div className="mobile:text-xl text-center text-4xl font-semibold  capitalize">
            {flexchildheading}
          </div>
          <p className=" text-center mobile:w-full  mobile:w-fill">
            {flexchildsubheading}
          </p>
        </div>
      </div>
      <div className="w-1/3 mobile:w-full mobile:text-xl text-3xl text-secondary font-semibold text-center mobile:m-6">
        {/* heading */}
        <div className="">
          <div className="text-center px-4 mobile:mt-6">Made With</div>
          <div className="text-center px-4">Nik Orignal's</div>
          <div className="text-center px-4">Recipies</div>
        </div>
      </div>
    </div>
  );
};

export default MultipleBoxContainer;
