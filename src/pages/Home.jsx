import React from "react";
import myImage from "../photos/HomeImg/image1.png";
import playButton from "../photos/HomeImg/image2.png";

import oracleLogo from "../photos/HomeImg/oracle.png";
import morpheusLogo from "../photos/HomeImg/morpheus.png";
import samsungLogo from "../photos/HomeImg/samsung.png";
import mondayLogo from "../photos/HomeImg/monday.png";
import segmentLogo from "../photos/HomeImg/segment.png";

const Home = () => {
  return (
    <div className="relative">
      <div
        className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-cover bg-center px-4 sm:px-8 md:px-12 lg:px-16"
        style={{ backgroundImage: `url(${myImage})` }}
      >
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your <span className="text-blue-600">Trusted</span> Partner for{" "}
            <br className="hidden sm:block" />
            Compliance Business Needs
          </h1>
          <p className="text-gray-600 mt-4 text-lg sm:text-xl md:text-2xl">
            An online business compliance platform that helps entrepreneurs and
            individuals with registrations, tax filings, and legal matters.
          </p>

          <div className="flex flex-wrap items-center mt-6 space-x-4 text-yellow-500">
            <div className="flex items-center space-x-1">
              ⭐⭐⭐⭐⭐ <span className="text-gray-900">Google Rating</span>
            </div>

            <div className="border-l pl-4 text-gray-900">
              <p className="font-semibold">4.5+</p>
              <p className="text-sm">Customer Rating</p>
            </div>

            <div className="border-l pl-4 text-gray-900">
              <p className="font-semibold">20,000+</p>
              <p className="text-sm">Clients</p>
            </div>

            <div className="border-l pl-4 text-gray-900">
              <p className="font-semibold">99.8%</p>
              <p className="text-sm">Financial Stability</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
              Talk An Expert
            </button>
            <button className="flex items-center text-gray-900 hover:text-red-500 transition">
              <img
                src={playButton}
                alt="Play"
                className="w-8 h-8 mr-2 rounded-full object-cover"
              />
              See how it works
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-col space-y-4 mt-6 md:mt-0 md:absolute md:top-1/4 md:right-10">
          {[
            "Annual Compliance",
            "Payroll Services",
            "Company Formation",
            "Annual Compliance",
          ].map((service, index) => (
            <button
              key={index}
              className="w-64 px-6 py-3 bg-white shadow-md rounded-lg text-gray-900 font-semibold text-center border border-gray-300 hover:bg-gray-100 transition"
            >
              {service}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8 md:hidden">
          {[
            "Annual Compliance",
            "Payroll Services",
            "Company Formation",
            "Annual Compliance",
          ].map((service, index) => (
            <button
              key={index}
              className="w-full max-w-xs px-6 py-3 bg-white shadow-md rounded-lg text-gray-900 font-semibold text-center border border-gray-300 hover:bg-gray-100 transition"
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 px-4 sm:px-6 md:px-12">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          Trusted By Over 100+ Startups and Freelance Businesses
        </h3>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-6">
          {[oracleLogo, morpheusLogo, samsungLogo, mondayLogo, segmentLogo].map(
            (logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Company Logo"
                className="h-12 sm:h-14 md:h-16 lg:h-20 transition-transform hover:scale-110"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
