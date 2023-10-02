import React from "react";
import Pest1 from "../assets/Global/Pest1.webp";

function Banner() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative md:mt-[5rem] lg:mt-[-3rem] xl:mt-[-6rem] bg-blue-100 py-12">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 pr-8">
          <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold text-blue-900 mb-4">
            Pest Control In Pune
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
            Your Trusted Partner in Pest Management
          </p>
          <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
            Providing safe and effective pest control services for your home or
            business.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
            We employ the latest technologies and techniques to deliver
            exceptional service.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
            Our experienced team of experts specializes in a wide range of pest
            infestations.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
            Each pest problem is unique, and we tailor our services to meet your
            specific needs.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Whether you're dealing with a current infestation or want to prevent
            one, we are here to help.
          </p>
          <button
            to="/"
            onClick={scrollToTop}
            className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us Today
          </button>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 items-center pr-12 rounded-lg"></div>
          <img
            src={Pest1}
            alt="Pest Control Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
