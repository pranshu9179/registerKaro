import React from "react";

const services = [
  {
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    icon: "🌟",
  },
  {
    title: "Company Secretarial Services",
    description:
      "Make data-driven decisions and utilize technology to reach business goals.",
    icon: "📊",
  },
  {
    title: "Virtual Office Address",
    description:
      "Foster customer relationships by effectively serving your market.",
    icon: "🏢",
  },
  {
    title: "Annual Compliance Services",
    description:
      "Turn your ideas into modern products with our design experts.",
    icon: "🛠️",
  },
  {
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    icon: "💰",
  },
  {
    title: "Bookkeeping Services",
    description:
      "Steering user behaviors with creative design, data insights & technology.",
    icon: "📖",
  },
];

const Service = () => {
  return (
    <div className="py-12 px-6 md:px-16">
      <div className="text-center">
        <p className="text-orange-500 uppercase font-semibold text-sm tracking-widest">
          Welcome to RegisterKaro.in
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2">
          Explore Our Services
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition bg-white"
          >
            <div className="text-orange-500 flex items-center text-3xl">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <a
              href="#"
              className="text-blue-600 mt-3 inline-block font-semibold"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          See All Services
        </button>
      </div>
    </div>
  );
};

export default Service;
