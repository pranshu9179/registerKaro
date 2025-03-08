// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const Search = ({ data }) => {
//   const [query, setQuery] = useState("");
//   const [filteredResults, setFilteredResults] = useState([]);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.trim() === "") {
//       setFilteredResults([]);
//     } else {
//       const results = data.filter((item) =>
//         item.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredResults(results);
//     }
//   };

//   return (
//     <div className="relative">
//       <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={query}
//           onChange={handleSearch}
//           className="w-40 md:w-64 lg:w-80 outline-none"
//         />
//         <FaSearch className="text-gray-600 ml-2 cursor-pointer" />
//       </div>

//       {filteredResults.length > 0 && (
//         <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg max-h-40 overflow-y-auto">
//           {filteredResults.map((item, index) => (
//             <div key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
//               {item}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;


import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative mr-5">
      {!isSearchOpen ? (
        <button
          onClick={() => setIsSearchOpen(true)}
          className="text-gray-600 focus:outline-none"
        >
          <FaSearch />
        </button>
      ) : (
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden ">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 w-40 md:w-64 focus:outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
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
