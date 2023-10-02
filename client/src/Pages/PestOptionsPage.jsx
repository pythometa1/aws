import React from "react";
import Termite from "../assets/Option/termite.png";
import Cockroach from "../assets/Option/cockroach.png";
import Mosquito from "../assets/Option/mosquito.png";
import Mouse from "../assets/Option/mouse.png";
import Ant from "../assets/Option/ant.png";
import WoodBorer from "../assets/Option/wood.png";
import BedBug from "../assets/Option/bedbug.png";
import General from "../assets/Option/general.png";
import FleaFly from "../assets/Option/flea.png";
import Agriculture from "../assets/Option/agriculture.png";
import { Link } from "react-router-dom";

const PestOptionsPage = () => {
  const handleRedirect = () => {
    window.location.href = "/termite";
  };
  const handleRedirect2 = () => {
    window.location.href = "/cockroach";
  };
  const handleRedirect3 = () => {
    window.location.href = "/mosquito";
  };
  const handleRedirect4 = () => {
    window.location.href = "/mouse";
  };
  const handleRedirect5 = () => {
    window.location.href = "/ant";
  };
  const handleRedirect6 = () => {
    window.location.href = "/woodborer";
  };

  const handleRedirect7 = () => {
    window.location.href = "/bedbug";
  };

  const handleRedirect8 = () => {
    window.location.href = "/general";
  };
  const handleRedirect9 = () => {
    window.location.href = "/fleafly";
  };

  const handleRedirect10 = () => {
    window.location.href = "/agriculture";
  };

  return (
    <div className="min-h-screen mb-[15rem] sm:mt-[8rem] lg:mt-[6rem] xl:mt-38 ssm:mt-[11rem] md:mt-[5rem] flex items-center justify-center">
      <div className="p-8 ml-[-12px] mr-[-12px] items-center text-center w-[70rem] rounded-lg shadow-xl xl:-mt-[20rem] sm:-mt-[8rem] ssm:-mt-[11rem] md:-mt-[12rem] lg:-mt-[12rem] bg-white">
        <h1 className="text-3xl font-semibold mb-16 text-center">
          Our Services
        </h1>

        <div className="flex flex-wrap gap-8 ml-12 item-center">
          {/* Termite Control */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6"
            onClick={handleRedirect}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={Termite}
              alt="Termite Control"
            />
            <Link
              to="/termite"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Termite
            </Link>
          </div>

          {/* Cockroach Control */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6"
            onClick={handleRedirect2}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={Cockroach}
              alt="Cockroach Control"
            />
            <Link
              to="/cockroach"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Cockroach
            </Link>
          </div>

          {/* Mosquito Control */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6"
            onClick={handleRedirect3}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={Mosquito}
              alt="Mosquito Control"
            />
            <Link
              to="/mosquito"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Mosquito
            </Link>
          </div>

          {/* Mouse Control */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6"
            onClick={handleRedirect4}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={Mouse}
              alt="Mouse Control"
            />
            <Link
              to="/mouse"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Mouse
            </Link>
          </div>

          {/* Ant Service */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6"
            onClick={handleRedirect5}
          >
            <img
              className="h-11 ml-7 mr-6 md:ml-16 lg:ml-16"
              src={Ant}
              alt="Ant Service"
            />
            <Link
              to="/ant"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Ant
            </Link>
          </div>

          {/* Wood Borer Service */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6"
            onClick={handleRedirect6}
          >
            <img
              className="h-11 ml-10 md:ml-16 lg:ml-16"
              src={WoodBorer}
              alt="Wood Borer Service"
            />
            <Link
              to="/woodborer"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Wood Borer
            </Link>
          </div>

          {/* Bed Bug Service */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6"
            onClick={handleRedirect7}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={BedBug}
              alt="Bed Bug Service"
            />
            <Link
              to="/bedbug"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Bed Bug
            </Link>
          </div>

          {/* General Pest Control */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6"
            onClick={handleRedirect8}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={General}
              alt="General Pest Control"
            />
            <Link
              to="/general"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg  focus:outline-none focus:ring-blue-400"
            >
              General
            </Link>
          </div>

          {/* FleaFly Services */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6"
            onClick={handleRedirect9}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={FleaFly}
              alt="FleaFly Services"
            />
            <Link
              to="/fleafly"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Flea & Fly
            </Link>
          </div>

          {/* Agriculture Service */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6"
            onClick={handleRedirect10}
          >
            <img
              className="h-11 ml-1 md:ml-16 lg:ml-16"
              src={Agriculture}
              alt="Agriculture Service"
            />
            <Link
              to="/agriculture"
              className="flex items-center justify-center text-black py-3 gap-12 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Agriculture
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PestOptionsPage;
