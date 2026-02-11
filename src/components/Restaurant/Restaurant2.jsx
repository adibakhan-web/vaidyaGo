import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Restaurant() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    floorNumber: "",
    floorName: "",
    tableType: "",
    floorPurpose: "",
    floorCapacity: "",
    floorFeature: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Form data:", formData);
    // Save form data to API or DB
  };

  const handleAddFloor = () => {
    console.log("Add Floor clicked");
    // Add new floor logic
  };

  const steps = [
    { id: 1, title: "Restaurant Detail", path: "/components/Restaurant" },
    { id: 2, title: "Admin Detail", path: "/components/Restaurant1" },
    { id: 3, title: "Interior Detail", path: "/components/Restaurant2" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="flex h-screen">
        {/* Left Side - Image with Steps */}
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-orange-200/20"></div>
          <img
            src="/res.png"
            alt="Restaurant Interior"
            className="w-full h-full object-cover"
          />

          {/* Step Indicators */}
          <div className="absolute left-[300px] top-1/2 transform -translate-y-1/2 space-y-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-start relative">
                <div
                  className={`w-4 h-4 rounded-full border-4 ${
                    currentStep === step.id
                      ? "bg-red-600 border-red-600"
                      : currentStep > step.id
                      ? "bg-red-600 border-red-600"
                      : "bg-white border-red-300"
                  }`}
                ></div>

                {/* Step Label */}
                <div
                  className={`ml-4 px-8 py-4 rounded-full ${
                    currentStep === step.id
                      ? "bg-red-600 text-white"
                      : "bg-white text-red-600 border border-red-300"
                  }`}
                >
                  <span className="text-sm font-medium">{step.title}</span>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-red-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full w-90 flex flex-col items-center justify-center p-[2px] md:p-6 bg-[#FFEAD2] relative">
          <div className="relative bg-gradient-to-br from-[#AF2E27] to-[#FECF9B] p-7 md:p-6 rounded-xl shadow-xl w-[800px] h-[650px] backdrop-blur-sm bg-opacity-90">

            {/* Home Icon */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute -top-[40px] left-[390px] md:left-[360px] transform -translate-x-1/2 p-5 rounded-full"
              style={{
                background: "linear-gradient(15deg, #fbd0a2ff, #954034)",
                boxShadow: "0 4px 15px #efc292ff, inset 0 4px 8px #560204a3",
              }}
            >
              <motion.img
                src="/black.svg"
                className="h-[55px] w-[55px]"
              />
            </motion.div>

            
           {/* Form Fields */}
<div className="flex flex-col space-y-3 pt-7 pb-8">
  {/* Floor Number */}
  <div className="flex flex-col">
    <label className="text-white font-medium mb-1">
      Enter Floor Number
    </label>
    <input
      placeholder="eg: Floor 1"
      value={formData.floorNumber}
      onChange={(e) => handleInputChange("floorNumber", e.target.value)}
      className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl text-orange-800 px-3 placeholder:text-[#8F8787] focus:outline-none"
    />
  </div>

  {/* Floor Name/Type */}
  <div className="flex flex-col">
    <label className="text-white font-medium mb-1">
      Enter Floor Name/Type
    </label>
    <input
      placeholder="eg: Ground Floor"
      value={formData.floorName}
      onChange={(e) => handleInputChange("floorName", e.target.value)}
      className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl text-orange-800 px-3 placeholder:text-[#8F8787] focus:outline-none"
    />
  </div>

  {/* Table Type */}
  <div className="flex flex-col">
    <label className="text-white font-medium mb-1">Table Type</label>
    <select
      value={formData.tableType}
      onChange={(e) => handleInputChange("tableType", e.target.value)}
      className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl text-[#8F8787] px-3 focus:outline-none"
    >
      <option value="" disabled hidden>
        Select Table Type
      </option>
      <option value="2-seater">2 Seater</option>
      <option value="4-seater">4 Seater</option>
      <option value="booth">Booth</option>
      <option value="bar">Bar Table</option>
    </select>
  </div>

  {/* Floor Purpose */}
  <div className="flex flex-col">
    <label className="text-white font-medium mb-1">Floor Purpose</label>
    <select
      value={formData.floorPurpose}
      onChange={(e) => handleInputChange("floorPurpose", e.target.value)}
      className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl text-[#8F8787] px-3 focus:outline-none"
    >
      <option value="" disabled hidden>
        Select Floor Purpose
      </option>
      <option value="dining">Dining Area</option>
      <option value="bar">Bar Area</option>
      <option value="lounge">Lounge</option>
    </select>
  </div>

  {/* Floor Capacity */}
  <div className="flex flex-col">
    <label className="text-white font-medium mb-1">
      Floor Capacity
    </label>
    <input
      placeholder="eg: 20 People"
      value={formData.floorCapacity}
      onChange={(e) => handleInputChange("floorCapacity", e.target.value)}
      className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl text-orange-800 px-3 placeholder:text-[#8F8787] focus:outline-none"
    />
  </div>

  {/* Floor Feature */}
  <div className="flex flex-col">
    <label className="text-white font-medium mb-1">
      Floor Feature
    </label>
    <select
      value={formData.floorFeature}
      onChange={(e) => handleInputChange("floorFeature", e.target.value)}
      className="h-12 w-full bg-[#FFEAD2] border border-[#7D5151] rounded-xl text-[#8F8787] px-3 focus:outline-none"
    >
      <option value="" disabled hidden>
        VIP Section
      </option>
      <option value="vip">VIP Section</option>
      <option value="outdoor">Outdoor Seating</option>
      <option value="smoking">Smoking Zone</option>
    </select>
  </div>
</div>
{/* Add Floor Button - Right side */}
<div className="flex justify-end px-6 mt-[-33px]">
  <button
    onClick={handleAddFloor}
    className="px-6 py-1 bg-red-600 border border-red-600 text-[#FFEAD2] rounded-full font-medium shadow-md flex items-center gap-1"
  >
    Add Floor <span className="text-xl">+</span>
  </button>
</div>

{/* Save Button - Center */}
<div className="flex justify-center mt-[-20px]">
  <button
    onClick={handleSave}
    className="px-[60px] py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium text-xl shadow-lg"
  >
    Save
  </button>
</div>


            {/* Save & Add Floor Buttons */}
           {/* <div className="relative w-full mt-6 px-6">
             <button
    onClick={handleAddFloor}
    className="absolute right-6 top-1/2 -translate-y-1/2 px-6 py-2 bg-[#FFEAD2] border border-red-600 text-red-600 rounded-full font-medium shadow-md flex items-center gap-1"
  >
    Add Floor <span className="text-xl">+</span>
  </button>
   <div className="flex justify-center">
    <button
      onClick={handleSave}
      className="px-[60px] py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium text-xl shadow-lg"
    >
      Save
    </button>
  </div> */}
              {/* <button
                onClick={handleSave}
                className="px-[60px] py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium text-xl shadow-lg"
              >
                Save
              </button>
               
              <button
                onClick={handleAddFloor}
                className="px-6 py-1 bg-[#FFEAD2] border border-red-600 text-red-600 rounded-full font-medium shadow-md flex items-center gap-1"
              >
                Add Floor <span className="text-xl">+</span>
              </button> */}
           
          </div>
        </div>
      </div>
    </div>
  );
}
