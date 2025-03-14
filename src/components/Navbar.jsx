import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Search from "./SearchBar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md w-full relative z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
        <div className="ml-auto hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-600"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-blue-600"
          >
            Our Services
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="hover:text-blue-600"
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-600"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-600"
          >
            Contact Us
          </button>
        </div>

        <div className="flex items-center space-x-4 ml-6">
          <Search />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:flex items-center">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
            Talk An Expert
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 py-2 bg-white shadow-md">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-600"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-blue-600"
          >
            Our Services
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="hover:text-blue-600"
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-600"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-600"
          >
            Contact Us
          </button>

          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
            Talk An Expert
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
