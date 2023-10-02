import React, { useState } from "react";
import PhoneCall from "../assets/Global/telephone.png";
import axios from "axios";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    postcode: "",
    pests: "Select any one...",
    establishmentType: "Residential",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/contact/",
        formData
      );

      if (response.data.message === "Data inserted successfully") {
        window.location.href = '/thankYou'
      } else {
        setSuccessMessage("Error submitting the message.");
      }
    } catch (error) {
      console.error("Error submitting message:", error);
      setSuccessMessage("Error submitting the message.");
    }
  };

  return (
    <div className="min-h-screen container flex flex-col justify-center">
      <div className="max-w-none ml-4 md:ml-16 md:items-center items-center xsm:ml-12 xsm:mr-[-1rem] ssm:ml-10 ssm:mr-[-6rem] sm:mr-[-4rem] xl:ml-[15rem]">
        <h1 className="text-4xl font-semibold text-center items-center mt-8 text-red-600">
          Contact Us
        </h1>
        <div className="p-4 md:p-12">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0">
              <img
                src={PhoneCall}
                alt="Phone Icon"
                className="h-[13rem] w-[13rem] md:h-[13rem] md:w-[13rem] text-blue-600"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-12">
              <h2 className="text-2xl font-semibold text-gray-800">Call Us</h2>
              <p className="text-gray-600 text-lg">For bookings & inquiries</p>
              <p className="text-[#0071b1] text-center p-[10px] border-2 border-[#0071b1] font-bold text-xl mt-2">
                <a href="tel:+918010281236">8010281236</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg p-6 mt-4 rounded-md items-center xsm:ml-1 xsm:mr-[-6rem] ssm:ml-10 ssm:mr-[-6rem] sm:ml-[7rem] sm:mr-[-25rem] md:ml-[10rem] md:mr-[-22rem] xl:mr-[-100rem] xl:ml-[30rem] lg:ml-[15rem]">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <label className="block text-black font-medium">
                Kindly take a moment to fill in the form so that we can provide
                you with the best possible solution.
              </label>
            </div>
            <div className="flex items-center mb-2">
              <label className="block"></label>
              <p className="text-red-700 text-base">
                Note: All fields are mandatory. We respect the confidentiality
                of your personal details and adhere to strict data protection
                practices.
              </p>
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-bold">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-4 font-semibold text-black border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 font-semibold border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Phone *</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full px-4 py-4 font-semibold border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Address Details *</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="w-full px-4 py-4 font-semibold border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Pests *</label>
            <select
              name="pests"
              value={formData.pests}
              onChange={handleChange}
              className="w-full px-4 py-4 font-semibold border rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option disabled>Select any one...</option>
              <option value="Ant & Crawling Insects">
                Ant & Crawling Insects
              </option>
              <option value="Bandicoot Rat">Bandicoot Rat</option>
              <option value="Bed Bug">Bed Bug</option>
              <option value="Bird">Bird</option>
              <option value="Cockroach">Cockroach</option>
              <option value="Disinfection Service">Disinfection Service</option>
              <option value="Mouse">Mouse</option>
              <option value="Mosquito">Mosquito</option>
              <option value="Rat">Rat</option>
              <option value="Termite">Termite</option>
              <option value="Wood Borer">Wood Borer</option>
              <option value="Flea & Fly">Flea & Fly</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">
              Type of establishment *
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                name="establishmentType"
                value="Residential"
                checked={formData.establishmentType === "Residential"}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="mr-4">Residential</label>
              <input
                type="radio"
                name="establishmentType"
                value="Commercial"
                checked={formData.establishmentType === "Commercial"}
                onChange={handleChange}
                className="mr-2"
              />
              <label>Commercial</label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-4  rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
        {successMessage && (
          <div className="text-green-500 font-semibold mt-2">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
