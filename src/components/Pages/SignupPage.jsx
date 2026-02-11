// src/components/SignupPage.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OtpModal = ({ type, onClose }) => {
  const title = type === 'email' ? 'Hey wait!!' : 'Wait a second!';
  const message = `Enter the OTP sent to your ${type === 'email' ? 'Email' : 'Number'}.`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#FFEAD2] p-4 rounded-xl shadow-2xl w-[280px] text-center">
        <h2 className="text-lg font-bold text-[#3E0708] mb-2">{title}</h2>
        <p className="text-xs text-[#3E0708] mb-3">{message}</p>
        <div className="flex justify-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              className="w-8 h-8 text-center text-base rounded bg-[#AF2E27] text-white focus:outline-none"
            />
          ))}
        </div>
        <button
          onClick={onClose}
          className="bg-[#AF2E27] hover:bg-red-700 text-white px-3 py-1 rounded-full text-sm"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

const SignupPage = () => {
  const [otpType, setOtpType] = useState(null);

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover  bg-center blur-md  blur-lg scale-110  "
        style={{ backgroundImage: "url('/login.jpg')" }}
      ></div>

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm "></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
      >
       
<div
  className="relative w-full h-[10px] md:w-1/2 min-h-[300px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url('/Subtract.png')` }}
>
  <div
    className="absolute inset-0 bg-[#FFEAD2] mix-blend-multiply opacity-80 z-10"
    style={{ backgroundImage: `url('/subtract.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  />

  <Link to="/LoginPage" className="z-10">
    <motion.button
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      className="  absolute top-[45px] right-[1px] 
      md:top-[243px] md:left-[290px] lg:top-[239px] lg:left-[296px]
      w-[183px] md:w-[96px] h-[183px] md:h-[96px] lg:h-[104px] lg:w-[104px]
      lg:w-[110px]
      bg-[#AF2E27] text-white 
      rounded-full text-lg font-semibold 
      shadow-lg transition duration-300 z-10

      smallDevice:top-[238px] smallDevice:left-[294px] 
      smallDevice:w-[108px] smallDevice:h-[108px]

      smallTab:top-[240px] smallTab:left-[285px] 
    smallTab:w-[104px] smallTab:h-[104px]

    tinyTab:top-[240px] tinyTab:left-[287px]
    tinyTab:w-[102px] tinyTab:h-[102px]

"
    >
      LOGIN
    </motion.button>
  </Link>
</div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-6 bg-[#FFEAD2] relative pt-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center text-[#AF2E27] text-lg sm:text-xl font-semibold mb-[50px] -mt-4 "
          >
            Sign-up to your Account
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative bg-gradient-to-br from-[#AF2E27] to-[#FECF9B] p-4 sm:p-6 rounded-xl shadow-xl w-full max-w-sm backdrop-blur-sm bg-opacity-90"
          >
            {/* Circle Icon */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute -top-[40px] right-[130px] md:right-[105px] transform -translate-x-1/2 p-5 rounded-full lg:right-[113px] "
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

            <form className="space-y-3 mt-10">
              {['Enter Name', 'Email', 'Password', 'Confirm Password', 'Contact Number'].map((label, index) => (
                <div className="relative" key={index}>
                  <div className="flex items-center bg-[#FFEAD2] border border-[#8B4A3D] rounded px-3 py-2 w-full hover:shadow-[0_2px_0_0_#3E0708] transition duration-200">
                    <img
                      src={`/${index === 0 ? 'bg.png' : index === 1 ? 'lock.png' : index >= 2 && index <= 3 ? 'bg1.png' : 'call.png'}`}
                      alt="Icon"
                      className="w-4 h-4 mr-2"
                    />
                    <input
                      type={index >= 2 && index <= 3 ? 'password' : 'text'}
                      placeholder={label}
                      className="bg-transparent outline-none text-black w-full placeholder-black text-sm font-semibold"
                    />
                  </div>
                  {(label === 'Email' || label === 'Contact Number') && (
                    <button
                      type="button"
                      onClick={() => setOtpType(label === 'Email' ? 'email' : 'phone')}
                      className="absolute top-1 right-1 bg-[#AF2E27] text-white px-2 py-1 text-xs rounded font-medium"
                    >
                      Send OTP
                    </button>
                  )}
                </div>
              ))}

              <div className="flex items-center space-x-2 text-xs text-white">
                <input type="checkbox" className="accent-[#AF2E27] w-4 h-4" />
                <span>Accept Terms and Conditions</span>
              </div>

              <motion.div whileHover={{ scale: 1.03 }}>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-[160px] py-2 rounded-md bg-[#8B1E1E] text-white text-base font-semibold hover:bg-[#6e1818] transition"
                  >
                    Create Account
                  </button>
                </div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {otpType && <OtpModal type={otpType} onClose={() => setOtpType(null)} />}
    </div>
  );
};

export default SignupPage;
