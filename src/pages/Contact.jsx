import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaApple,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const statistics = [
  { label: "Customers", value: "1M+" },
  { label: "Years of Excellence", value: "12+" },
  { label: "R&D Engineers", value: "41+" },
  { label: "Countries", value: "78+" },
  { label: "Partners", value: "3287+" },
  { label: "Awards Received", value: "41+" },
];

const partners = ["Coinbase", "Spotify", "Slack", "Dropbox", "Webflow", "Zoom"];

const footerLinks = [
  {
    title: "Start a Business",
    links: ["Features", "Solutions", "Integrations", "Enterprise", "Solutions"],
  },
  {
    title: "Government Registration",
    links: ["Partners", "Community", "Developers", "App", "Blog"],
  },
  {
    title: "Compliance & Tax",
    links: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
  },
  {
    title: "BIS & CDSCO",
    links: ["About Us", "News", "Leadership", "Media Kit"],
  },
];

const Contacts = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12">
      <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Manage Your Services by Your Mobile Phone
        </h2>
        <p className="text-gray-300 mt-3">
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <button className="bg-green-500 px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:bg-green-600">
            Get it on App Store
          </button>
          <button className="bg-gray-800 px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:bg-gray-900">
            Get it on Google Play
          </button>
        </div>
      </div>

      <div className="text-center py-12">
        <h3 className="text-sm text-orange-500 uppercase tracking-wide">
          Why Register Karo
        </h3>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2">
          Some Numbers are Important
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-lg p-8 text-center">
        <h3 className="text-sm uppercase tracking-wide">1% of the Industry</h3>
        <h2 className="text-2xl md:text-4xl font-bold mt-2">
          Welcome to your new digital reality. Now.
        </h2>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-3 w-80 rounded-l-lg border-none text-black"
          />
          <button className="bg-blue-600 px-6 py-3 rounded-r-lg font-semibold shadow-lg hover:bg-blue-700">
            Submit
          </button>
        </div>
        <div className="flex justify-center gap-4 mt-4 text-xs">
          <span>✔ Instant results</span>
          <span>✔ User-friendly interface</span>
          <span>✔ Personalized customization</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-gray-200 px-6 py-3 rounded-md text-gray-800 font-semibold shadow-md"
          >
            {partner}
          </div>
        ))}
      </div>

      <footer className="bg-blue-900 text-white mt-12 p-8 rounded-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-300 text-sm">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <FaFacebookF className="text-xl cursor-pointer hover:text-gray-400" />
              <FaGoogle className="text-xl cursor-pointer hover:text-gray-400" />
              <FaApple className="text-xl cursor-pointer hover:text-gray-400" />
              <FaInstagram className="text-xl cursor-pointer hover:text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {footerLinks.map((category, index) => (
              <div key={index}>
                <h4 className="text-orange-400 font-semibold mb-2">
                  {category.title}
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  {category.links.map((link, idx) => (
                    <li
                      key={idx}
                      className="cursor-pointer hover:text-gray-400"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-orange-400 p-3 rounded-full text-white shadow-lg hover:bg-orange-500"
          >
            <FaArrowUp />
          </button>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">
          © 2024 RegisterKaro. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contacts;
