import React from "react";
import ThankYouImage from "../assets/Navbar/logo.png"; // Replace with your actual image path

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        className="max-w-xl p-8 bg-white rounded-lg shadow-lg 
        xsm:mx-4 xsm:w-full xsm:mt-10 
        ssm:mx-8 ssm:w-full ssm:mt-16
        sm:mx-16 sm:w-3/4 sm:mt-20
        md:w-2/3 md:mt-24
        lg:w-1/2 lg:mt-32
        xl:w-1/2 xl:-mt-24
      "
      >
        <img
          src={ThankYouImage}
          alt="Thank You"
          className="w-32 mx-auto mb-6"
        />
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Thank You for Your Submission!
        </h2>
        <p className="text-gray-600 text-lg text-center mt-4">
          We appreciate your message and will get back to you as soon as
          possible.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
