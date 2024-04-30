

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import SignUpDetails from "./SignupDetails";

const AvatarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showSignupPopup, setShowSignupPopup] = useState(false);
    const [state, setState] = useState(false);
    const profileRef = useRef(null);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const navigation = [
        { title: "Profile", path: "javascript:void(0)" },
        { title: "Cart", path: "/cart" },
        { title: "Favourites", path: "/favrouites" },
        { title: "Settings", path: "settings" },
    ];
    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleLoginPopup = () => {
        setShowLoginPopup(prevState => !prevState); // Toggle the showLoginPopup state
    };

    const handleSignupPopup = () => {
        setShowSignupPopup(prevState => !prevState); // Toggle the showSignupPopup state
    };


    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current?.contains(e.target)) setState(false);
        };
        document.addEventListener("click", handleDropDown);
        return () => {
            document.removeEventListener("click", handleDropDown);
        };
    }, []);

    return (
        <div className="relative border-t lg:border-none">
            <div className="">
                <button
                    ref={profileRef}
                    className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
                    onClick={() => setState(!state)}
                >
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJYUFAK1iKE7XzsE-JWtQ4quUgAmp-UskLaWhkrHapQ&s"
                        className="w-full h-full rounded-full"
                    />
                </button>
            </div>
            <ul className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? "" : "lg:hidden"} z-50`}>
                {navigation.map((item, idx) => (
                    <li key={idx}>
                        <a className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3" href={item.path}>
                            {item.title}
                        </a>
                    </li>
                ))}
                <Link onClick={handleLoginPopup} className="block w-full text-justify text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
                    SignIn
                </Link>
                <Link onClick={handleSignupPopup} className="block w-full text-justify text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
                    SignUp
                </Link>
            </ul>
            {showLoginPopup && <LoginPopup onClose={handleLoginPopup} />}
            {showSignupPopup && <SignupPopup onClose={handleSignupPopup} />}
        </div>
    );
};


export default () => {
    const [state, setState] = useState(false);

    return (
        <header className="text-base lg:text-sm">
            <div className={`bg-white items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static ${state ? "h-full fixed inset-x-0 blur" : ""}`}>
                <div className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${state ? "" : "hidden"}`}>
                    <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0"><AvatarMenu />
                    </ul>
                </div>
            </div>
        </header>
    );
};

function LoginPopup({ onClose }) { // Pass onClose function to close the popup
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        onClose(); // Call the onClose function passed from parent component
    };

    return (
        <>
            {isOpen && (
                <div
                    id="login-popup"
                    tabIndex="-1"
                    className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
                >
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="#c6c7c7"
                                    viewBox="0 0 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Close popup</span>
                            </button>
                            <Login handleClose={handleClose} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
function SignupPopup({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);
    const [stage,setStage] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        onClose(); // Call the onClose function passed from parent component
    };

    return (
        <>
            {isOpen && (
                <div
                    id="signup-popup"
                    tabIndex="-1"
                    className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
                >
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="#c6c7c7"
                                    viewBox="0 0 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Close popup</span>
                            </button>
                           { stage ?
                            <SignUp handleClose={handleClose} stage={stage} setStage={setStage}/>:
                            <SignUpDetails/>
                        }
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}





