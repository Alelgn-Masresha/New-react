import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import bg from "../img/white-vector.jpg";

const Destinations = ({ children: images }) => {
  const [position, setPosition] = useState(0);

  const prev = () => {
    setPosition((x) =>
      position === 0 ? (x = images.length - 1) : position - 1
    );
  };
  const next = () => {
    setPosition((x) =>
      position === images.length - 1 ? 0 : (x = position + 1)
    );

    console.log(position);
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `linear-gradient(rgba(235, 235, 235, 0.7), rgba(235, 235, 235, 0.7)), url(${images[position].image})`,
      }}
    >
      <div className="py-3 max-w-6xl mx-4 xl:mx-auto transition duration-300 lg:flex-row items-center min-h-screen ">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Destinations
          </h2>
          <p className="text-lg md:text-xl md:leading-relaxed leading-relaxed text-gray-600 mx-auto mb-8 max-w-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            quas odio nostrum rerum ducimus soluta unde numquam adipisci
            nesciunt earum, eum, similique harum.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row text-center sm:text-left items-center backdrop-blur-lg shadow-2xl py-10 px-8 rounded-xl">
          <div className="overflow-hidden relative sm:w-2/3">
            <div
              className="flex transition-transform"
              style={{ transform: `translateX(-${position * 100}%)` }}
            >
              {images.map((i) => (
                <img src={i.image} alt="" />
              ))}
            </div>
            <div>
              <button
                onClick={prev}
                className="absolute top-1/2 left-3 bg-black/50 rounded-lg hover:bg-black/70"
              >
                <SlArrowLeft className=" text-white m-5" />
              </button>
              <button
                onClick={next}
                className="absolute top-1/2 right-3 bg-black/50 rounded-lg hover:bg-black/70"
              >
                <SlArrowRight className=" text-white m-5" />
              </button>
            </div>
          </div>
          <div className="sm:w-1/3 ml-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {images[position].head}
            </h3>
            <p className="text-lg md:text-xl md:leading-relaxed leading-relaxed text-gray-600 mb-8">
              {images[position].para}
            </p>
            <a
              href="#"
              className="mr-5 bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Book now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
