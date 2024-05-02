import React from 'react'
import HomeSlider from '../services/HomeSlider'
import "../css/explorebtn.css"
import ProductSlider from '../services/ProductSlider';
import CookieSlider from '../services/CookieSlider';
import bannerimage from "../assets/store.jpg";
import fleximage from "../assets/bread-1.jpg";
import HomeSliderSection from '../components/HomeSliderSection';
import HomeTextSection from '../components/HomeTextSection';
import MultipleSliderSliderSecction from '../components/MultipleSliderSliderSecction';
import FlexContainer from '../components/FlexContainer';
import MultipleBoxContainer from '../components/MultipleBoxContainer';
import chefimage from "../assets/bgtransparent-removebg-preview.png"
import Footer from '../components/Footer';
import ProductContainer from './ProductContainer';

const Main = ({ selectedCategory, setSelectedCategory }) => {
    const flexheading = `good food is the ingredient that goes into the making of a happy life`;
    return (
        <>
            {/*  main home screen  */}
            <>
                {
                    selectedCategory == "Home" && <div className='w-full h-screen'>
                        {/* home slider section */}
                        <HomeSliderSection />
                        {/* home text section */}
                        <HomeTextSection />
                        {/* multiple slider container  */}
                        <MultipleSliderSliderSecction />
                        {/* flex container */}
                        <FlexContainer />
                        {/* multiple box container  */}
                        <MultipleBoxContainer />
                        {/* cookie slider */}
                        <div className="p-14 bg-yellow-50">
                            {/* bg-[url('./assets/store.jpg')] */}
                            <CookieSlider />
                        </div>

                        {/* chef container */}
                        <div className="w-full h-[500px]">
                            {/* flex heading */}
                            <h2 className='mobile:text-xl text-4xl text-center my-6 capitalize text-primary font-semibold '>{flexheading}</h2>
                            <div className="w-full h-[400px] flex items-center justify-around bg-yellow-100 mobile:px-4">
                                <div className="flex mobile:flex-col mobile:h-auto items-center justify-around web:w-[80%] h-[300px] rounded-lg bg-primary text-secondary">
                                    <img src={chefimage} alt="" className='mobile:hidden ' />
                                    <div className="web:px-12 web:py-2 flex flex-col mobile:items-center gap-1 mobile:py-4 ">
                                        <h2 className='mobile:text-[18px] text-2xl text-secondary '>A tastefull tale of flavour and quality</h2>
                                        <p className='mobile:text-[12px] mobile:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus beatae animi consequuntur distinctio corrupti tempore neque quam. Autem aut architecto recusandae eveniet repudiandae reiciendis ab, possimus et dolorem magni.</p>
                                        {/* explre btn */}
                                        <div className="web:p-2 py-2 web:ml-[-20px]">
                                            <button className="button">
                                                <span className="ml-2 text-sm">Explore Now</span>
                                                {/* <span className=""><img src={rightarrow} alt="" /></span> */}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* location container */}
                        <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-red-900 before:opacity-85 before:z-10 ">
                            <img src={bannerimage} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="min-h-[500px] relative z-50 h-full max-w-6xl mx-auto flex mobile:flex-col justify-center gap-12 items-center text-center text-white p-6 ">
                                <div className="text-white text-5xl font-locationtext">
                                    <div className="">Locate </div>
                                    <div className="">Nik Baker's</div>
                                    <div className="">Near YOu</div>
                                </div>
                                {/* locations */}
                                <ul>
                                    {["Indore", "Bhopal",
                                        "Ujjain", "Punjab",
                                        "Delhi",
                                        "Nagpur",
                                        "Mumbai", "Kolkata",].map((item) => {


                                            return (
                                                <li>{item}</li>
                                            )
                                        })}
                                </ul>
                            </div>
                        </div>
                        <Footer />
                    </div>
                }
            </>
            {/* product screen */}
            <>
                {
                    selectedCategory != "Home" &&
                    <ProductContainer selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                }
            </>
        </>
    )
}

export default Main

