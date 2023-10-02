import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import axios from "axios";
import { useCookies } from "react-cookie";



// Import Axios with a lowercase 'a'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ServiceBook = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [address, setAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const services = [
    "Bed Bug",
    "Cockroach",
    "Termite",
    "Mosquito",
    "Ant",
    "Wood Borer",
    "General",
    "Flea & Fly",
  ];

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (name && number && selectedService && address) {
      const formData = {
        name,
        number,
        selectedService,
        address,
      };

      try {
        // Send a POST request to your Django backend
        console.log("Form data submitted:", formData);
        const response = await axios.post(
          "http://127.0.0.1:8000/getbackend/",
          formData
        );

        if (response.data.message === "Data inserted successfully") {
          console.log("Form data submitted:", formData);
          setSuccessMessage("Thank you! Your booking has been submitted.");
          window.location.href = "/thankYou";
        } else {
          setSuccessMessage("Error submitting the booking.");
        }

        // Clear the form fields
        setName("");
        setNumber("");
        setSelectedService("");
        setAddress("");
      } catch (error) {
        console.error("Error submitting booking:", error);
        setSuccessMessage("Error submitting the booking.");
      }
    }
  };

  return (
    <div className="flex xsm:mt-[-10rem] xsm:ml-2 xsm:mr-2 xl:mt-[-30rem] md:mt-[-15rem] flex-col lg:mt-[-19rem] sm:mt-[-7rem]  ssm:ml-4 ssm:mr-4 ssm:mt-[-10rem] sm:flex-row items-center justify-center">
      <div className="p-4 gap-10 sm:p-9 rounded-md sm:rounded-md bg-gradient-to-br border border-black w-full sm:w-96 mb-4 sm:mb-0">
        <h1 className="text-2xl font-semibold p-2">Book a Service</h1>
        <form onSubmit={handleBookingSubmit}>
          <label className="block mb-2 font-semibold">Name:</label>
          <input
            required
            type="text"
            className="w-full p-2 border border-black rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />

          <label className="block mt-1 mb-2 font-semibold">Phone Number:</label>
          <input
            required
            type="tel"
            className="w-full p-2 border border-black rounded-md"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter Your Number"
          />

          <label className="block mt-1 mb-2 font-semibold">
            Select a Service:
          </label>
          <select
            required
            className="w-full p-2 border border-black rounded-md"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">Select a Service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          <label className="block mt-1 mb-2 font-semibold">Address</label>
          <input
            required
            type="text"
            className="w-full p-2 border border-black rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Your Address"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Book Service
          </button>

          {successMessage && (
            <div className="text-green-500 font-semibold mt-2">
              {successMessage}
            </div>
          )}
        </form>
      </div>

      <div className="flex flex-col items-center sm:flex-row justify-center w-full sm:w-auto">
        <div className="p-4 sm:p-9 sm:pt-[0] pt-[-5rem] rounded-lg md:pt-32 lg:pt-[-120rem] border border-black ssm:ml-4 ssm:mr-4 bg-white">
          <h1 className="text-center text-2xl font-semibold mb-4 ">
            Contact Us
          </h1>
          <div className="text-center">
            {/* Contact Us content */}
            <p className="mb-4 p-4 py-6 font-bold rounded-lg">
              We're open for any suggestions or just to have a chat
            </p>

            <div className="mb-4 ml-[-12px]">
              <div className="flex flex-wrap items-center space-x-2 whitespace-break-spaces gap-2">
                <span>
                  <HomeIcon />
                </span>
                <span className="font-bold">Address:</span>
                <span className="pl-8 xl:pl-[1px]">
                  Naryan Peth Bhatacha bol pune 411030
                </span>
              </div>
            </div>

            <div className="mb-4 ml-[-12px]">
              <p className="flex items-center space-x-2 whitespace-break-spaces gap-2">
                <span>
                  <EmailIcon />
                </span>
                <span className="font-bold">Email:</span>
                pestokiller.co@gmail.com
              </p>
            </div>
            <div className="mb-4 ml-[-12px]">
              <p className="flex items-center space-x-2 whitespace-break-spaces gap-2">
                <span>
                  <CallIcon />
                </span>
                <span className="font-bold">Mobile Number:</span> +918010281236
              </p>
            </div>
            <div className="space-y-4 ml-[-12px]">
              <button
                onClick={() => {
                  window.location.href = "tel:+918010281236";
                }}
                className="bg-blue-500 text-white px-4 py-2 mr-8 rounded-md"
              >
                Call Us
              </button>

              <button
                onClick={() => {
                  window.location.href = "https://api.whatsapp.com/send?phone=8010281236";
                }}
                className="bg-green-500 ml-[-12px] text-white px-4 py-2 mr-8 rounded-md">

                Whatsapp              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBook;