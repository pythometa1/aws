import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Logo from "../assets/Navbar/logo.png";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <li className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-2 lg:flex-row lg:items-center lg:gap-20 xxl:gap-28">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="tel:+918010281236"
          className="flex items-center text-lg pr-[8rem] xl:pr-[12rem] lg:pl-[2rem] xxl:pl-12 text-green-500 font-bold"
        >
          <CallIcon style={{ marginRight: "8px" }} />
          +918010281236
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="mailto:pestokiller.co@gmail.com"
          className="flex items-center mr-6 xl:ml-[-8.5rem] lg:-ml-32  xl:text-lg lg:text-lg text-black font-bold"
        >
          <EmailIcon style={{ marginRight: "8px" }} />
          pestokiller.co@gmail.com
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
        target="_blank"
          href="https://api.whatsapp.com/send?phone=8010281236"
          className="flex items-center pl-9 xl:pl-2 xl:text-lg text-green-500 font-bold xsm:pl-1"
        >
          <WhatsAppIcon style={{ marginRight: "8px" }} />
          WhatsApp
        </a>
      </Typography>
    </li>
  );

  return (
    <Navbar
      className="mx-auto max-w-screen-xxl py-2 px-4 lg:px-8 lg:py-4"
      style={{ boxShadow: "-moz-initial" }}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img
            className="mx-auto flex h-min w-[7rem] max-w-screen-xl "
            src={Logo}
            alt="Pest Control Logo"
          />
        </Typography>
        <div className="hidden lg:flex">{navList}</div>
        <Link
          to="/contact"
          variant="gradient"
          size="sm"
          className="hidden text-base lg:inline-block text-black font-bold ml-12 lg:mr-28 xxl:ml-32"
        >
          <span>Contact Us</span>
        </Link>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-black font-bold"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto text-black m-5 gap-y-7">
          {navList}
          <Link
            to="/contact"
            variant="gradient"
            size="sm"
            className="mb-2 ml-2 text-black bg-white font-bold"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
