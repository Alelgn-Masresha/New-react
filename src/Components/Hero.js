import React from "react";
import logo from "../img/logo.png";
import bg from "../img/white-vector.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col-reverse py-3 max-w-6xl mx-4 xl:mx-auto transition duration-300 lg:flex-row items-center min-h-screen">
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Make your dream vacation plan come true
          </h1>
          <p className="text-lg md:text-xl md:leading-relaxed leading-relaxed text-gray-600 mb-8">
            Finding and booking to any distnation have never been this easier.
            Plan and travel anywhere and anytime you want.
          </p>
          <div className="flex justify-center md:justify-start items-center">
            <a
              href="#"
              className="mr-5 bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Book now
            </a>
            <div className="flex items-center cursor-pointer hover:text-red-500 group">
              <a className="text-blue-500 text-xl cursor-pointer hover:text-red-500">
                learn more
              </a>
              <AiOutlineArrowRight className="mt-1 ml-1 text-blue-500 group-hover:ml-3 group-hover:text-red-500 transition-all" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img className="mx-auto" src={logo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
