import React, { useState } from "react";
import { LockClosedIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogSvg from "../assets/blog.svg";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./Pages.css";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="flex justify-around items-center h-screen bg-[#F9EDE7]">
      <div className="w-[30%] flex justify-center items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotateY: 360, scale: 1 }}
          transition={{ duration: 2 }}
          className="w-[450px] h-[450px] flex"
        >
          <div className="flex flex-col justify-around">
            <h2 className="font-bold text-3xl text-center">
              Explore, Share, and Connect Through Words.
            </h2>
            <img src={blogSvg} alt="icon" />
          </div>
        </motion.div>
      </div>
      <div className="w-[40%] px-4 py-8 bg-white rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-3 text-center">
          Join the Community
        </h3>
        <p className="text-sm text-gray-400 text-center mb-6">
          Blogging Depot Community is a community of 1,398,743 amazing bloggers
        </p>
        <div className="flex justify-center mb-3">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentialResponseDecoded = jwtDecode(
                credentialResponse.credential
              );
              console.log(credentialResponseDecoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div className="flex justify-center gap-10 text-[#B6C6D5] register-divider text-xl">
          <p>OR</p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="block w-full pr-10 rounded-md outline-none sm:text-sm pl-2 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="block w-full pr-10 rounded-md outline-none sm:text-sm pl-2 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="block w-full pr-10 rounded-md pl-2 py-3 outline-none sm:text-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 ">
                {showPassword ? (
                  <EyeOffIcon
                    className="h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <EyeIcon
                    className="h-5 w-5 text-gray-400 cursor-pointer "
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="confirm_password" className="block text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="block w-full pr-10 rounded-md outline-none sm:text-sm pl-2 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] mb-5"
              required
            />
          </div>
          <div className="text-sm text-gray-400 italic text-center ">
            By signing in, you are agreeing to our{" "}
            <a href="#" className="text-blue-500">
              privacy policy
            </a>
            ,{" "}
            <a href="#" className="text-blue-500">
              terms of use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500">
              code of conduct
            </a>
            .
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-[#2463EB]">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
