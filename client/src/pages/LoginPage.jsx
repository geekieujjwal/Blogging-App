import React, { useState } from "react";
import { LockClosedIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    console.log(showPassword);
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F9EDE7]">
      <div className="w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-3 text-center">
          Join the Community
        </h3>
        <p className="text-sm text-gray-400 text-center mb-6">
          Blogging Depot Community is a community of 1,398,743 amazing bloggers
        </p>
        {/* <h3 className="text-3xl font-semibold mb-6 text-center">Login</h3> */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="block w-full pr-10 rounded-md outline-none sm:text-sm pl-2 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <LockClosedIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
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
          <div className="flex justify-between">
            <div className="space-x-[6px]">
              <input type="checkbox" name="remember_me" id="remember_me" />
              <label htmlFor="remember_me">Remember me</label>
            </div>
            <Link to="#" className="text-blue-600">
              Forgot Password?
            </Link>
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
            Login
          </button>
        </form>
        <p className="text-sm mt-4 text-center">
          New to blogging Community?{" "}
          <a href="#" className="text-blue-500 hover:text-[#2463EB]">
            Create account
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
