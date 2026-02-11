// src/components/CircularIcon.jsx
import React from "react";

const CircularIcon = () => {
  return (
    <div className="w-20 h-20 bg-[#3a0d0d] rounded-full flex items-center justify-center shadow-md absolute -top-10 left-1/2 transform -translate-x-1/2 z-10 animate-fadeSlideDown">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354l8 4.5v4.39a9 9 0 01-8 8.946A9 9 0 014 13.244v-4.39l8-4.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 0v4m0-4h4m-4 0H8"
        />
      </svg>
    </div>
  );
};

export default CircularIcon;
