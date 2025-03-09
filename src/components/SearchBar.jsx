import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative flex items-center space-x-2 ">
      <button
        onClick={() => setIsSearchOpen(true)}
        className="text-gray-600 focus:outline-none mr-5 "
      >
        <FaSearch />
      </button>

      {isSearchOpen && (
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden transition-all">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 w-40 md:w-64 focus:outline-none"
          />
          <button
            onClick={() => {
              setIsSearchOpen(false);
              setSearchTerm("");
            }}
            className="bg-gray-200 px-3 py-2 "
          >
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
