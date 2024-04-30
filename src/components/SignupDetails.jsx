import React, { useState } from "react";
import navlogo from "../assets/nik-bakers-logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, setUser } from "../redux/reducers/userSlice";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const SignUpDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //  state for handleing the user input 
    const [userDeatils, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
    });
    //  function for handeing the form submition 
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUser(userDeatils));
        dispatch(login(userDeatils));
        setUserDetails({
            name: "",
            email: "",
            password: "",
        });
        navigate("/")
    };

    return (
        <main className="w-full h-auto flex flex-col items-center justify-center bg-gray-50 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <img
                        src={navlogo}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                            Create an account
                        </h3>

                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                        <div>
                            <label className="font-medium">Confirm Password</label>
                            <input
                                value={userDeatils.password}
                                onChange={(e) => setUserDetails({ ...userDeatils, password: e.target.value })}
                                name="password"
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">Password</label>
                            <input
                                value={userDeatils.password}
                                onChange={(e) => setUserDetails({ ...userDeatils, password: e.target.value })}
                                name="password"
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button onClick={(e) => handleSubmit(e)} className="w-full px-4 py-2 text-white font-medium bg-tertiary hover:bg-tertiary active:bg-tertiary rounded-lg duration-150">
                            Sign Up
                        </button>
                    </form>
              
                </div>
            </div>
        </main>
    );
};

export default SignUpDetails;
