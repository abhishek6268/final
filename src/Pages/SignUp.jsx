import React, { useState } from "react";
import navlogo from "../assets/nik-bakers-logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, setUser } from "../redux/reducers/userSlice";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import SignUpDetails from "../components/SignupDetails";

const SignUp = ({ stage, setStage, handleClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //  state for handleing the user input
  const [userDeatils, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  //  handle google login
  const SignUpGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res.data);
        dispatch(setUser({ name: res.data.name, email: res.data.email }));
        // Check if the viewport width is less than a certain value (e.g., mobile screen width)
        if (window.innerWidth < 1080) {
          navigate("/signupdetails");
        } else {
          setStage(!stage);
        }
        // handleClose();
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onFailure: (error) => {
      console.error("Google login failed:", error);
    },
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
    navigate("/");
    setStage(!stage);
    handleClose();
  };
  return (
    <main className="w-full h-auto flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <img src={navlogo} width={150} className="mx-auto" />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Create an account
            </h3>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">Name</label>
              <input
                value={userDeatils.name}
                onChange={(e) =>
                  setUserDetails({ ...userDeatils, name: e.target.value })
                }
                name="name"
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                value={userDeatils.email}
                onChange={(e) =>
                  setUserDetails({ ...userDeatils, email: e.target.value })
                }
                name="email"
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                value={userDeatils.password}
                onChange={(e) =>
                  setUserDetails({ ...userDeatils, password: e.target.value })
                }
                name="password"
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button
              onClick={(e) => handleSubmit(e)}
              className="w-full px-4 py-2 text-white font-medium bg-tertiary hover:bg-tertiary active:bg-tertiary rounded-lg duration-150"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-5">
            <button
              onClick={SignUpGoogle}
              className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_17_40)">
                  <path
                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;

function SignupPopup({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

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
              <SignUpDetails />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
