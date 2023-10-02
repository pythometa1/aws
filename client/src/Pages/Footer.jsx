import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Payment from "../assets/Footer/payment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  return (
    <footer className="p-1 mb-12 px-12 xsm:mt-[-5rem]">
      <p className="bg-[#d3b76f] mt-28 mb-5 pb-3 p-[1rem] h-3 "></p>
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:w-1/4">
          <h1 className="text-2xl font-bold">PESTOKILLER</h1>
          <p className="mt-2">
            Welcome to our pest control website! We offer top-quality pest
            control services to keep your home or business pest-free. Our expert
            technicians are experienced in dealing with a wide range of pests
            using advanced techniques.
          </p>
        </div>
        <div className="mb-6 md:w-1/4 md:ml-28">
          <h2 className="text-xl font-bold">PRODUCTS</h2>
          <ul className="mt-2 space-y-4">
            <li onClick={scrollToTop}>
              <Link to="/ant" className="hover:text-blue-500">
                Ant Treatment
              </Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/bedbug" className="hover:text-blue-500">
                BedBug Treatment
              </Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/cockroach" className="hover:text-blue-500">
                Cockroach Treatment
              </Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/mosquito" className="hover:text-blue-500">
                Mosquito Treatment
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-6 md:w-1/4">
          <h2 className="text-xl font-bold">USEFUL LINKS</h2>
          <ul className="mt-2">
            <li onClick={scrollToTop}>
              <button>Help</button>
            </li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h2 className="text-xl font-bold">CONTACT</h2>
          <address className="mt-2 leading-relaxed">
            <HomeIcon />
            Naryan Peth, Bhatacha bol, Pune, 411030
            <br />
            <a href="mailto:pestokiller.co@gmail.com">
              <EmailIcon />
              pestokiller.co@gmail.com
            </a>
            <br />
            <a href="tel:+918010281236">
              <CallIcon />
              +918010281236
            </a>
          </address>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="flex justify-center items-center space-x-4 mt-4">
        <p>Follow Us On:- </p>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <img
        src={Payment}
        alt="Payment Methods"
        className="mx-auto my-4"
        style={{ maxWidth: "150px" }}
      />
      <div className="text-center mt-4 text-gray-600">
        © 2023 Copyright: Shubham Yeljale
      </div>
    </footer>
  );
};

export default Footer;
