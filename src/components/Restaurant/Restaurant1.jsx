import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Restaurant() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    ownerName: "",
    contactNumber: "",
    email: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Form data:", formData);
  };

  const steps = [
    { id: 1, title: "Restaurant Detail" },
    { id: 2, title: "Admin Detail" },
    { id: 3, title: "Interior Detail" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="flex h-screen">
        {/* Left Side - Restaurant Interior Image */}
        <div className="w-1/2 relative">
          <img
            src="/res.png"
            alt="Restaurant Interior"
            className="w-full h-full object-cover"
          />

          {/* Step Indicators */}
          <div className="absolute left-[300px] top-1/2 transform -translate-y-1/2 space-y-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-start relative">
                {/* Circle */}
                <div
                  className={`w-6 h-6 rounded-full border-4 flex items-center justify-center z-10 ${
                    currentStep >= step.id
                      ? "bg-red-600 border-red-600"
                      : "bg-white border-red-300"
                  }`}
                ></div>

                {/* Label */}
                <div
                  className={`ml-6 px-6 py-2 rounded-full shadow-md ${
                    currentStep === step.id
                      ? "bg-red-600 text-white"
                      : "bg-white text-red-600 border border-red-300"
                  }`}
                >
                  <span className="text-sm font-medium">{step.title}</span>
                </div>

                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[10px] top-[24px] w-1 h-16 bg-red-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full w-90 flex flex-col items-center justify-center p-[2px] md:p-6 bg-[#FFEAD2] relative">
          <div className="relative bg-gradient-to-br from-[#AF2E27] to-[#FECF9B] p-7 md:p-6 rounded-xl shadow-xl w-[700px] h-[500px] backdrop-blur-sm bg-opacity-90">
            {/* Top Icon */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute -top-[50px] left-[300px] md:left-[300px] transform -translate-x-1/2 p-5 rounded-full"
              style={{
                background: 'linear-gradient(15deg, #fbd0a2ff, #954034)',
                boxShadow: '0 4px 15px #efc292ff, inset 0 4px 8px #560204a3',
              }}
            >
              <motion.img
                src="/black.svg"
                className="h-[55px] w-[55px] text-white"
                alt="icon"
              />
            </motion.div>

            {/* Form Fields */}
            <div className="flex flex-col space-y-10 pt-9 pb-7">
              <div className="flex items-center bg-[#FFEAD2] rounded-xl px-4 py-4 shadow-sm border">
  {/* Owner image */}
  <img 
    src="/bg.png"   // yahan apni image ka path dein
    alt="Owner" 
    className="w-8 h-8  mr-3 object-cover" 
  />

  {/* Input field */}
  <input
    placeholder="Owner Name"
    value={formData.ownerName}   // agar formData me ownerName field nahi hai to add karein
    onChange={(e) => handleInputChange("ownerName", e.target.value)}
    className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-500 text-lg" // text-lg se bada hota hai
  />
</div>


              <div className="flex items-center bg-[#FFEAD2] rounded-xl px-4 py-4 shadow-sm border">
  {/* Owner image */}
  <img 
    src="/call.png"   // yahan apni image ka path dein
    alt="Owner" 
    className="w-8 h-8  mr-3 object-cover" 
  />

  {/* Input field */}
  <input
    placeholder="Contact Number"
    value={formData.ownerName}   // agar formData me ownerName field nahi hai to add karein
    onChange={(e) => handleInputChange("ownerName", e.target.value)}
    className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-500 text-lg" // text-lg se bada hota hai
  />
</div>


              <div className="flex items-center bg-[#FFEAD2] rounded-xl px-4 py-3 shadow-sm border">
               <img 
    src="/lock.png"   // yahan apni image ka path dein
    alt="Owner" 
    className="w-8 h-8  mr-3 object-cover" 
  />
                <input
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSave}
                className="px-16 py-3 mt-8 bg-gradient-to-r from-[#B73225] to-[#D8564A] hover:opacity-90 text-white rounded-full font-semibold text-lg shadow-md"
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
