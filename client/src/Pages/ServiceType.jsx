import React from "react";
import Residential from "../assets/ServiceType/residential.jpg";
import Commerical from "../assets/ServiceType/office.jpg";
import Industrial from "../assets/ServiceType/factory.jpg";

const ServiceType = () => {
  return (
    <div className="min-h-screen mt-[1rem] ssm:mt-[6rem] lg:mt-[1rem] md:mt-[2rem]   mb-16 flex flex-col items-center justify-center">
      <p className="text-lg font-bold mb-8 text-center">
        This is our services that we are providing you.
      </p>

      <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {/* Image 1 */}
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-2xl">
          <img
            src={Residential}
            alt="Residential Service Type"
            className="w-full hover:scale-110 cursor-zoom-in"
          />
          <div className="p-[1rem] mt-[12px]">
            <h2 className="text-lg font-semibold mb-2 text-center">
              Residential Service Type
            </h2>
            <ul className="list-disc pl-6">
              <li className="text-gray-700">Home Pest Control</li>
              <li className="text-gray-700">Villa Pest Control</li>
              <li className="text-gray-700">Apartment Pest Control</li>
              <li className="text-gray-700">Bungalow Pest Control</li>
              <li className="text-gray-700">Colony House Pest Control</li>
            </ul>
          </div>
        </div>

        {/* Image 2 */}
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-2xl">
          <img
            src={Commerical}
            alt="Commerical Service Type"
            className="w-full overflow-hidden h-[210px] hover:scale-110 cursor-zoom-in"
          />
          <div className="p-[1rem] mt-[12px]">
            <h2 className="text-lg font-semibold mb-2 text-center">
              Commerical Service Type
            </h2>
            <ul className="list-disc pl-6">
              <li className="text-gray-700">Hotel Pest Control</li>
              <li className="text-gray-700">
                Property Management Pest Control
              </li>
              <li className="text-gray-700">Industrial Pest Control</li>
              <li className="text-gray-700">
                Healthcare & Hospital Pest Control
              </li>
              <li className="text-gray-700">
                School & University Pest Control
              </li>
            </ul>
          </div>
        </div>

        {/* Image 3 */}
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-2xl">
          <img
            src={Industrial}
            alt="Industrial Service Type"
            className="w-full hover:scale-110 cursor-zoom-in"
          />
          <div className="p-[1rem] mt-[12px]">
            <h2 className="text-lg font-semibold mb-2 text-center">
              Industrial Service Type
            </h2>
            <ul className="list-disc pl-6">
              <li className="text-gray-700">
                Pre-audit inspections and recommendations
              </li>
              <li className="text-gray-700">Strict quality control measures</li>
              <li className="text-gray-700">
                A commitment to on-site safety protocols
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceType;
