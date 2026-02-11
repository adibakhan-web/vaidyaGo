import { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Stepper from '../Stepper';

export default function Restaurant() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    restaurantName: "",
    restaurantLocation: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    contactNumber: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Form data:", formData);
    // Handle form submission
  };

  const steps = [
    { id: 1, title: "Restaurant Detail", path:"/components/Restaurant" },
    { id: 2, title: "Admin Detail", path:"/components/Restaurant1" },
    { id: 3, title: "Interior Detail" },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="flex h-screen">
        {/* Left Side - Restaurant Interior Image */}
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-orange-200/20"></div>
          <img
            src="/manager.png"
            alt="Restaurant Interior"
            className=" absolute top-0 right-0 h-full w-full bg-cream "
          />

          {/* Step Indicators */}
  <div className="relative w-1/2">
  {/* Curved Background */}
  <div className="absolute inset-0  rounded-l-[80px]"></div>

   {/* Stepper Container */}
        <div className="absolute top-[0px] left-[80px]"></div>
      {/* Vertical Line */}
      <div className="absolute left-[500px] top-0 h-[590px] w-3 bg-red-100 rounded-full z-0"></div>

      {/* Red moving circle */}
      <div
         className="absolute left-[500px] top-[60px] w-3 bg-red-600 z-10 rounded-full transition-all duration-500"
          style={{
            height: `${(currentStep - 1) * 90}px`,
            top: "60px",
        }}
      ></div>

      {/* Steps */}
           <div className="flex flex-col gap-[220px] pl-6 z-20">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center gap-3  ">
              {/* Red Dot */}
              <div
                className={` w-4 h-4 rounded-full transition-colors duration-300 ${
                  currentStep >= step.id ? "bg-red-600" : "bg-orange-200"
                }`}
              ></div>

              {/* Step Button */}
              <button
                onClick={() => setCurrentStep(step.id)}
                className={`px-4 py-2 text-sm rounded-full shadow transition-all duration-300 ${
                  currentStep === step.id
                    ? "bg-red-600 text-white"
                    : "bg-white text-red-600 border border-red-300"
                }`}
              >
                {step.title}
              </button>
            </div>
          ))}
        </div>
    </div>
    </div>
        {/* Right Side - Form */}
        <div className="w-full w-90 flex flex-col items-center justify-center p-[2px] md:p-6 bg-[#FFEAD2] relative">
          <div className="relative bg-gradient-to-br from-[#AF2E27] to-[#FECF9B] p-7 md:p-6 rounded-xl shadow-xl w-[800px] h-[600px] backdrop-blur-sm bg-opacity-90">

            {/* Home Icon */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute -top-[50px] left-[390px] md:left-[360px] transform -translate-x-1/2 p-5 rounded-full"
              style={{
                background: 'linear-gradient(15deg, #fbd0a2ff, #954034)',
                boxShadow: '0 4px 15px #efc292ff, inset 0 4px 8px #560204a3',
              }}
            >
              <motion.img
                src="/black.svg"
                className="h-[55px] w-[55px] text-white"
                
                fill="currentColor"
               
              />
                
              
            </motion.div>

            {/* Form Fields */}
            <div className="flex flex-col space-y-4 pt-7 pb-6">
              <input
                placeholder="Restaurant Name"
                value={formData.restaurantName}
                onChange={(e) => handleInputChange("restaurantName", e.target.value)}
                className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl placeholder:text-#8F8787 text-orange-800 px-3 focus:outline-none focus:ring-2 focus:ring-[#7D5151] focus:border-[#7D5151]"
              />

              <input
                placeholder="Restaurant Location"
                value={formData.restaurantLocation}
                onChange={(e) => handleInputChange("restaurantLocation", e.target.value)}
                className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl placeholder:text-#8F8787 text-orange-800 px-3 focus:outline-none focus:ring-2 focus:ring-[#7D5151] focus:border-[#7D5151]"
              />

              <select
                 defaultValue=""
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl  px-3 
             text-[#8F8787] focus:outline-none focus:ring-2 focus:ring-[#7D5151] focus:border-[#7D5151]"
              >
                <option value=""  disabled hidden className="text-[#8F8787]" >Select Country</option>
                <option value="us">United States</option>
                <option value="in">India</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
              </select>

              <select
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl  px-3 
             text-[#8F8787] focus:outline-none focus:ring-2 focus:ring-[#7D5151] focus:border-[#7D5151]"
              >
                <option value="" disabled hidden className="text-[#8F8787]">Select State</option>
                <option value="ca">California</option>
                <option value="ny">New York</option>
                <option value="tx">Texas</option>
                <option value="fl">Florida</option>
              </select>

              <select
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl  px-3 
             text-[#8F8787] focus:outline-none focus:ring-2 focus:ring-[#7D5151] focus:border-[#7D5151]"
              
              >
                <option value="" disabled hidden className="text-[#8F8787]">Select City</option>
                <option value="la">Select City</option>
                <option value="sf">San Francisco</option>
                <option value="nyc">New York City</option>
                <option value="miami">Miami</option>
              </select>

              <input
                placeholder="Enter Pincode"
                value={formData.pincode}
                onChange={(e) => handleInputChange("pincode", e.target.value)}
                className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl placeholder:text-#8F8787 text-orange-800 px-3 focus:outline-none focus:ring-2 focus:ring-[#7D5151] focus:border-[#7D5151]"
              />

              <input
                placeholder="Enter Contact Number"
                value={formData.contactNumber}
                onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl placeholder:text-#8F8787 text-orange-800 px-3 focus:outline-none focus:ring-2 focus:ring-[#7D5151] focus:border-[#7D5151]"
              />
            </div>

            {/* Save Button */}
            
            <div className="flex justify-center ">
            <button
              onClick={handleSave}
              className="px-[60px] py-3 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium text-xl shadow-lg mx-auto mt-4 block"
            >
              Save
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

