import React, { useRef, useState } from "react";
import Header from "./Header";
import poster from "../resources/netflixposter.jpg";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    // Validate the form data on this button click
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={poster} alt="poster" />
      </div>
      <form
        className="absolute p-16 bg-black w-[20%] m-auto left-[40%] top-[10%] bg-opacity-75 rounded-lg"
        onClick={(e) => e.preventDefault()}
      >
        <div className="font-extrabold text-3xl text-white p-2 font-sans">
          Sign In
        </div>
        <input
          type="email"
          placeholder="Email Address"
          ref={email}
          className="py-3 px-4 m-2 my-6 block w-full bg-gray-800 bg-transparent bg-opacity-80 rounded-md text-white"
        />
        {!isSignIn && (
          <input
            type="text"
            placeholder="Enter Name"
            className="py-3 px-4 m-2 my-6 block w-full bg-gray-800 bg-transparent bg-opacity-80 rounded-md text-white"
          />
        )}
        <input
          type="password"
          placeholder="Enter Password"
          ref={password}
          className="py-3 px-4 m-2 block w-full bg-gray-800 bg-transparent bg-opacity-80 rounded-md text-white"
        />
        <p className="text-red-600 xl mx-4 mt-4">{errorMessage}</p>
        <button
          className="px-4 py-2 m-2 mt-7 rounded-sm text-white bg-red-600 w-full cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="text-white mx-2 my-6">
          {isSignIn ? (
            <div>
              New to Netflix?
              <span
                onClick={toggleSignInForm}
                className="font-bold cursor-pointer lg"
              >
                {" "}
                Sign Up Now
              </span>
            </div>
          ) : (
            <div>
              Already Registered!
              <span
                onClick={toggleSignInForm}
                className="font-bold cursor-pointer lg"
              >
                {" "}
                Sign In Now
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
