import React from 'react';

const Snackbar = ({ message, type, onClose }) => {
  // type: "success" or "error"
  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white font-semibold transition-opacity duration-300
      ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
      role="alert"
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 font-bold focus:outline-none"
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};

export default Snackbar;
