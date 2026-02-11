// src/components/ForgetPassword.jsx

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GetOtp = () => {
    const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current.forEach((input, index) => {
      if (input) {
        input.addEventListener("input", (e) => {
          if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
          }
        });

        input.addEventListener("keydown", (e) => {
          if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputRefs.current[index - 1].focus();
          }
        });
      }
    });

    // Cleanup event listeners
    return () => {
      inputRefs.current.forEach((input) => {
        if (input) {
          input.removeEventListener("input", () => {});
          input.removeEventListener("keydown", () => {});
        }
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center px-4 py-8">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
        style={{ backgroundImage: "url('/Manager.svg')" }}
      ></div>

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* Left Section */}
        <div className="relative w-full md:w-1/2 bg-[#FFEAD2] flex items-center justify-center">
          <img
            src="/manager.svg"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-6 bg-[#FFEAD2] relative">
          {/* Title */}
          {/* <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center text-[#AF2E27] text-lg md:text-xl font-semibold mb-10"
          >
            Forget Password?
          </motion.p> */}

          {/* Gradient Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative bg-gradient-to-br from-[#AF2E27] to-[#FECF9B] p-4 md:p-6 rounded-xl shadow-xl w-full h-[300px] max-w-sm backdrop-blur-sm bg-opacity-90"
          >
            {/* Avatar Lock Icon */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute -top-10 left-[145px] transform -translate-x-1/2 p-5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #AF2E27, #f4bd7dff)",
                boxShadow: "0 4px 15px #F3D4B7A1, inset 0 4px 8px #3E0708",
              }}
            >
              <motion.img
                src="/lo.svg" // 🔒 apna icon yahaan use karo
                alt="Lock Icon"
                className="h-12 w-12"
                animate={{ scale: [0, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 0, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-[#FFFBFB] text-xl md:text-xl font-semibold mb-4 mt-8 "
          >
            Forget Password?
          </motion.p>

            {/* Form */}
            <form className="space-y-4 mt-4">
              {/* Input */}
                 <div className="space-y-4 mt-4 flex justify-center">
    <div className="flex space-x-4">
     <input
                    type="text"
                    maxLength="1"
                    ref={(el) => (inputRefs.current[0] = el)}
                    className="w-12 h-12 bg-[#FFEAD2] text-black text-center text-base font-medium rounded-md border border-[#8B4A3D] border-b-4 border-b-[#3E0708] hover:shadow-[0_2px_0_0_#3E0708] transition outline-none"
                  />
                  <input
                    type="text"
                    maxLength="1"
                    ref={(el) => (inputRefs.current[1] = el)}
                    className="w-12 h-12 bg-[#FFEAD2] text-black text-center text-base font-medium rounded-md border border-[#8B4A3D] border-b-4 border-b-[#3E0708] hover:shadow-[0_2px_0_0_#3E0708] transition outline-none"
                  />
                  <input
                    type="text"
                    maxLength="1"
                    ref={(el) => (inputRefs.current[2] = el)}
                    className="w-12 h-12 bg-[#FFEAD2] text-black text-center text-base font-medium rounded-md border border-[#8B4A3D] border-b-4 border-b-[#3E0708] hover:shadow-[0_2px_0_0_#3E0708] transition outline-none"
                  />
                  <input
                    type="text"
                    maxLength="1"
                    ref={(el) => (inputRefs.current[3] = el)}
                    className="w-12 h-12 bg-[#FFEAD2] text-black text-center text-base font-medium rounded-md border border-[#8B4A3D] border-b-4 border-b-[#3E0708] hover:shadow-[0_2px_0_0_#3E0708] transition outline-none"
                  />
    </div>
  </div>

              {/* OTP Button */}
              <motion.div whileHover={{ scale: 1.03 }}>
               <div className="flex justify-center">
  <Link
    to="/UpdatePassword"
    className="w-[150px] h-[43px] flex items-center justify-center py-2 rounded-md bg-[#731914] text-white text-md font-semibold hover:bg-[#6e1818] transition"
  >
    Verify
  </Link>
</div>
              </motion.div>

              {/* Back Link */}
              <div className="flex justify-center text-xs">
                <Link
                  to="/ForgetPassword"
                  className="font-medium text-md text-white hover:text-red-700 transition duration-300 flex items-center underline"
                >
                  ← Back to Page
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetOtp;
