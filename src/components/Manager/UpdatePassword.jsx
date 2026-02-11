// src/components/LoginPage.jsx

import React, { useState, useEffect } from 'react'; // 🟢 useState & useEffect added
import { FaUser, FaEye, FaEyeSlash  } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const UpdatePassword = () => {
  // 🟢 State to store background image path
  const [bgImage, setBgImage] = useState('/Manager'); 
   const [showPassword, setShowPassword] = useState(false);
  // default desktop image

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setBgImage('/union.svg'); 
      } else {
        setBgImage('/subtract.png'); 
      }
    };

    // Initial check
    handleResize();

    // Event listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  
  }, []);
  

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center px-4 py-8">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
        style={{ backgroundImage: "url('/Manager.svg')" }}
      ></div>

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm "></div>

      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* Left Section */}
      
<div
  className="
   relative w-full md:w-1/2 aspect-[3/4] sm:aspect-[2/1] md:aspect-[5/6]
  bg-cover bg-center flex items-end  
  "
>
    <img
      src="/Manager.svg" // 👈 Your image path here
      alt="Breakfast"
      className="w-full h-full object-contain bg-[#FFEAD2]"
    />
 
</div>


        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-6 bg-[#FFEAD2] relative">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className=" text-center text-[#AF2E27] text-lg md:text-xl font-semibold mb-10 flex mt-[0px]"
          >
            Login into your Account
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative bg-gradient-to-br from-[#AF2E27] to-[#FECF9B] p-4 md:p-6 rounded-xl shadow-xl w-full h-[300px] max-w-sm backdrop-blur-sm bg-opacity-90"
          >
            {/* Avatar Icon */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute -top-10 left-[160px] md:left-[130px] transform -translate-x-1/2 p-5 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #AF2E27, #f4bd7dff)',
                boxShadow: '0 4px 15px #F3D4B7A1, inset 0 4px 8px #3E0708',
              }}
            >
              <motion.img
                src="/mana.svg"
                className="h-12 w-12 text-white"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
               
              </motion.img>
            </motion.div>

            <form className="space-y-4 mt-12">
              <div className="flex items-center bg-[#FFEAD2] text-black px-3 py-3 rounded-md border border-[#8B4A3D] border-b-4 border-b-[#3E0708] hover:shadow-[0_2px_0_0_#3E0708] transition space-x-2">
               <img src="/bg1.png" alt="Lock Icon" className='w-5 h-5' />
                <input
                  type="text"
                  placeholder="New Password"
                  className="w-full text-black placeholder:text-black  text-sm font-medium bg-transparent outline-none"
                />
              </div>

              <div className="flex items-center bg-[#FFEAD2] text-black px-3 py-3 rounded-md border border-[#8B4A3D] border-b-4 border-b-[#3E0708] hover:shadow-[0_2px_0_0_#3E0708] transition space-x-2">
                <img src="/bg1.png" alt="Lock Icon" className='w-5 h-5' />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=" Confirm Password"
                  className="w-full text-black placeholder:text-black  text-sm font-medium bg-transparent outline-none"
                />
              
              </div>

             
              <motion.div whileHover={{ scale: 1.03 }}>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-[150px] h-[43px] py-2 rounded-md bg-[#731914] text-white text-md font-semibold hover:bg-[#6e1818] transition"
                  >
                    Update Password
                  </button>
                </div>
              </motion.div>
              <div className="flex justify-center text-xs">
                              <Link
                                to="/Login"
                                className="font-medium text-md text-white hover:text-red-700 transition duration-300 flex items-center underline"
                              >
                                ← Back to LOGIN
                              </Link>
                            </div>
            </form>

            {/* Social Login */}
          
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UpdatePassword;
