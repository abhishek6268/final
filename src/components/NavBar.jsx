import React from 'react'
import { Link } from 'react-router-dom';
import navlogo from "../assets/nik-bakers-logo.png"
import AvtarMenu from './AvtarMenu';
import download from "../assets/menu-down-arrow.png"
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const NavBar = ({selectedCategory,setSelectedCategory}) => {
    const navheading = `Nik Baker's`;
    const navsubheading = `run by a professional baker from australia`;
    const navlinks = [
        {
            name: "Home",
            path: "/",
            cName: "nav-links"
        },
        {
            name: "ourstory",
            path: "/products",
            cName: "nav-links"
        },
        {
            name: "Cart",
            path: "/cart",
            cName: "nav-links"
        },
        {
            name: "contact",
            path: "/contact",
            cName: "nav-links"
        },
        {
            name: "feedback",
            path: "/feedback",
            cName: "nav-links"
        },
        {
            name: "carrer",
            path: "/carrer",
            cName: "nav-links"
        }
    ];
    const primarylinks = [
        {
            name: "breadcakes",
            path: "/",
            cName: "nav-links"
        },
        {
            name: "choclates",
            path: "/",
            cName: "nav-links"
        },
        {
            name: "cookies",
            path: "/",
            cName: "nav-links"
        },
        {
            name: "bakery",
            path: "/",
            cName: "nav-links"
        },
        {
            name: "essentials",
            path: "/",
            cName: "nav-links"
        },
        {
            name: "giftbaskets",
            path: "/",
            cName: "nav-links"
        },
    ];
    const secondarylinks = [
        {
            name: "e menu",
            path: "/",
            cName: "nav-links"
        },
        {
            name: "e gift guide",
            path: "/",
            cName: "nav-links"
        },
        {
            name: "cake album",
            path: "/",
            cName: "nav-links"
        },
    ];
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
 
    return (
        <>
            <div className="w-full h-36 mobile:h-20  py-2 web:px-12  font-paragraph ">
                <div className=" h-full mobile:px-12 flex flex-row items-center justify-between">
                    {/*  heading  */}
                    <div className="flex mobile:gap-1 mobile:flex-row flex-col items-center ">
                        <div className="">
                            <div className="text-xl text-center web:text-4xl text-primary font-semibold uppercase">{navheading}</div>
                            <div className=" text-sm text-center mobile:hidden web:text-md capitalize font-mono">{navsubheading}</div>
                        </div>
                        <div className=" w-14 block web:hidden">
                            <img src={navlogo} alt="" className="" />
                        </div>
                    </div>
                    <div className="w-1/12 hidden web:block"></div>
                    {/* logo */}
                    <div className="w-1/12 hidden web:block">
                        <img src={navlogo} alt="" className="" />
                    </div>

                    {/*  mobile menu links starts here  */}
                    <div className={`text-center absolute inset-x-0 z-20 w-full px-6 py-4 h-auto top-20 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`} >
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <div className=" web:block flex flex-col gap-12">
                                <ul className={`flex gap-2 ${isOpen ? 'block flex-col w-full ' : 'hidden'}`}>
                                    {navlinks.map(({ name, path }) => (
                                        <Link to={path} key={name}>
                                            <li onClick={() => {
                                                setIsOpen(!isOpen)
                                            }} className="px-2 py-0.5 capitalize text-primary hover:bg-secondary rounded-lg hover:border-primary">
                                                {name}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                                <div className="w-full h-0.5 bg-primary"></div>
                                {/* secondary links   */}
                                <ul className={`flex gap-2 ${isOpen ? 'block flex-col w-full  ' : 'hidden'}`}>
                                    {secondarylinks.map(({ name, path }) => (
                                        <Link to={path} key={name}>
                                            <li className=" flex item-center justify-around mobile:w-1/2 gap-2 py-1 px-2 bg-primary text-secondary border  capitalize rounded-full mx-auto my-1">
                                                <div className="">
                                                    {name}
                                                </div>
                                                <img src={download} alt="" className='w-6' />
                                            </li>

                                        </Link>
                                    ))}
                                </ul>
                                <div className="w-full h-0.5 bg-primary"></div>
                                <ul className={`flex gap-2 ${isOpen ? 'block flex-col w-full  ' : 'hidden'}`}>
                                    <Link to={"/signin"} onClick={() => {
                                        setIsOpen(!isOpen)
                                    }} className=" block w-full text-center text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
                                        SignIn
                                    </Link>
                                    <Link to={"/signup"} onClick={() => {
                                        setIsOpen(!isOpen)
                                    }} className="block w-full text-center text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
                                        SignUp
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* upper navlinks */}
                    <div className="hidden web:block">
                        <ul className="flex gap-2">
                            {navlinks.map(({ name, path }) => {
                                return (
                                    <Link to={path} key={name}>
                                        <li onClick={()=>{
                                            console.log(name)
                                           name == "Home" ?  setSelectedCategory(name) : console.log("lol")
                                        }} className=" px-2 py-0.5   capitalize text-primary bg-gray-100 hover:bg-secondary rounded-lg  hover:border-primary">
                                            {name}
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                    <AvtarMenu />
                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* lower links  */}
            <div className="w-full h-16  px-12 border-2 bg-secondary  font-paragraph hidden web:block">
                <div className="flex items-center justify-around mt-4">
                    {/* primary links */}
                    <div className="">
                        <ul className="flex gap-4">
                            {primarylinks.map(({ name, path }) => {
                                return (
                                    <Link to={path} key={name}>
                                        <li className=" px-1  capitalize text-primary bg-secondary rounded " onClick={
                                            ()=>setSelectedCategory(name)
                                        }>
                                            {name}
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                    {/* secondary links */}
                    <div className="">
                        <ul className="flex gap-4">
                            {secondarylinks.map(({ name, path }) => {
                                return (
                                    <Link to={path} key={name}>
                                        <li className=" flex gap-2 py-1 px-2 bg-primary text-secondary border  capitalize rounded-full ">
                                            {name}
                                            <img src={download} alt="" className='w-6' />
                                        </li>

                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>


            {/* lower links for mobile screen  */}
            <div className="w-full h-14  px-12 border-2 bg-secondary  font-paragraph mobile:block hidden">
                <div className="flex items-center justify-around mt-4">
                    {/* primary links */}
                    <div className="">
                        <ul className="flex gap-2">
                            {primarylinks.map(({ name, path }) => {
                                return (
                                    <Link to={path} key={name}>
                                        <li className=" text-xs capitalize text-primary bg-secondary rounded ">
                                            {name}
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;




