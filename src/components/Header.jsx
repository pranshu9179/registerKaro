import { FaPhone, FaEnvelope } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#1e3a5f] text-white py-2 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <FaEnvelope className="text-gray-300" />
          <a
            href="mailto:pranshumishra1020@gmail.com"
            className="hover:text-gray-400 truncate"
          >
            pranshumishra1020@gmail.com
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-gray-300" />
            <a href="tel:+919179289234" className="hover:text-gray-400">
              +91 9179289234
            </a>
          </div>

          <span className="hidden sm:block border-l border-gray-400 h-4"></span>

          <div className="flex space-x-3">
            <a href="#" className="hover:text-green-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-600">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
