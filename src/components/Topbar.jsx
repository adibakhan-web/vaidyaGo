// src/components/Topbar.jsx
import React from "react";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow rounded-xl mb-4">
      {/* Search Bar */}
      <div className="flex items-center space-x-2 w-full max-w-md">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600 hover:text-orange-500 cursor-pointer" />
        <FaCog className="text-gray-600 hover:text-orange-500 cursor-pointer" />
        <div className="w-9 h-9 rounded-full bg-orange-400 text-white flex items-center justify-center font-semibold">
          A
        </div>
      </div>
    </div>
  );
};

export default Topbar;
