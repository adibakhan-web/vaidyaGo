import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = ({ icon, text, isSelected }) => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition-all rounded-full ${
        isSelected ? "bg-white shadow-md" : ""
      }`}
    >
      {/* Icon with circle */}
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          isSelected ? "bg-[#FFEAD2]" : ""
        }`}
      >
        {typeof icon === "string" ? (
          <img src={icon} alt={text} className="w-5 h-5 object-contain" />
        ) : (
          <FontAwesomeIcon
            icon={icon}
            className={`text-lg ${
              isSelected ? "text-orange-500" : "text-black"
            }`}
          />
        )}
      </div>

      {/* Text */}
      <span
        className={`text-sm font-semibold ${
          isSelected ? "text-orange-500" : "text-black"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default MenuItem;
