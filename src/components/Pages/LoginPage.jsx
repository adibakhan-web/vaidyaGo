// src/components/LoginPage.jsx

import React, { useState, useEffect } from 'react'; // 🟢 useState & useEffect added
import { FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  // 🟢 State to store background image path
  const [bgImage, setBgImage] = useState('/subtract.png'); // default desktop image

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
        style={{ backgroundImage: "url('/login.jpg')" }}
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
  bg-cover bg-center flex items-end justify-end p-4
  "
    style={{ backgroundImage: `url('${bgImage}')` }}
>
  <div
    className="absolute inset-0 bg-[#FFEAD2] mix-blend-multiply opacity-80 z-10"
  />

  <Link to="/SignupPage">
    <motion.button
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      className="
        absolute
bottom-6 left-1/2 -translate-x-1/2           
md:translate-x-0 md:bottom-auto              

md:top-[190px] md:left-[280px]
lg:left-[287px] lg:top-[185px]

w-[180px] md:w-[96px] lg:w-[110px] lg:h-[105px] h-[180px] md:h-[96px] 
bg-[#AF2E27] text-white 
rounded-full text-lg font-semibold 
shadow-lg transition duration-300 z-10

custom:top-[183px] custom:left-[287px] custom:w-[108px] custom:h-[108px] 
midGap:top-[185px] midGap:left-[271px] midGap:w-[105px] midGap:h-[105px]
smallGap:top-[184px] smallGap:left-[281px] smallGap:w-[104px] smallGap:h-[104px]

      "
    >
      SIGN UP
    </motion.button>
  </Link>
</div>


        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-6 bg-[#FFEAD2] relative">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center text-[#AF2E27] text-lg md:text-xl font-semibold mb-10"
          >
            Login into your Account
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative bg-gradient-to-br from-[#AF2E27] to-[#FECF9B] p-4 md:p-6 rounded-xl shadow-xl w-full max-w-sm backdrop-blur-sm bg-opacity-90"
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
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                <path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" />
              </motion.svg>
            </motion.div>

            <form className="space-y-4 mt-12">
              <div className="flex items-center bg-[#FFEAD2] text-black px-3 py-2 rounded-md border border-[#8B4A3D] border-b-4 border-b-[#3E0708] hover:shadow-[0_2px_0_0_#3E0708] transition">
                <FaUser className="text-black mr-2" />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full text-black placeholder:text-black  text-sm font-medium bg-transparent outline-none"
                />
              </div>

              <div className="flex items-center bg-[#FFEAD2] text-black px-3 py-2 rounded-md border border-[#8B4A3D] border-b-4 border-b-[#3E0708] hover:shadow-[0_2px_0_0_#3E0708] transition space-x-2">
                <img src="/bg1.png" alt="Lock Icon" className='w-5 h-5' />
                <input
                  type="Password"
                  placeholder="Password"
                  className="w-full text-black placeholder:text-black  text-sm font-medium bg-transparent outline-none"
                />
              </div>

              <div className="flex justify-end text-xs">
                <a
                  href="#"
                  className="font-medium text-white hover:text-red-700 transition duration-300"
                >
                  Forget Password?
                </a>
              </div>

             <motion.div whileHover={{ scale: 1.03 }}>
  <div className="flex justify-center">
    <Link to="/Dashboard">
      <button
        type="button"
        className="w-[160px] py-2 rounded-md bg-[#8B1E1E] text-white text-sm font-semibold hover:bg-[#6e1818] transition"
      >
        Login
      </button>
    </Link>
  </div>
</motion.div>
            </form>

            {/* Social Login */}
            <div className="mt-6 text-center text-sm">
              <p className="text-[#C93A2F] mb-3">Continue With</p>
              <div className="flex justify-center space-x-5">
                {["google-logo", "microsoft-outlook-2019--v1", "yahoo"].map((site) => (
                  <motion.a
                    key={site}
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    className="p-2 bg-white rounded-full shadow-md transition-transform duration-300"
                  >
                    <img
                      src={`https://img.icons8.com/color/36/000000/${site}.png`}
                      alt={site}
                      className="w-6 h-6"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
