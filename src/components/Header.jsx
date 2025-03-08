import { FaPhone, FaEnvelope } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#1e3a5f] text-white py-2 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-gray-300" />
          <a
            href="mailto:pranshumishra1020@gmail.com"
            className="hover:text-gray-400 flex items-end
          "
          >
            pranshumishra1020@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <FaPhone className="text-gray-300" />
          <a href="tel:+919179289234" className="hover:text-gray-400">
            +91 9179289234
          </a>
          <span className="border-l border-gray-400 h-4"></span>

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
