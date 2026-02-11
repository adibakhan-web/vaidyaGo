import React, { useState } from "react";

const InteriorDetailForm = () => {
  const [formData, setFormData] = useState({
    floorNumber: "",
    floorType: "",
    tableType: "",
    purpose: "",
    capacity: "",
    feature: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saving:", formData);
  };

  const handleAddFloor = () => {
    console.log("Adding Floor:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFEAD2] font-[Acme]">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-1/4 bg-[#AF2E27] text-[#FFEAD2] py-10 px-4 space-y-12">
        <div className="text-2xl">Restaurant Detail</div>
        <div className="text-2xl">Admin Detail</div>
        <div className="text-2xl bg-white text-[#AF2E27] rounded-full px-6 py-2 inline-block">Interior Detail</div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-3/4 p-10 bg-gradient-to-t from-[#AF2E27aa] to-[#FECF9Baa] rounded-lg shadow-lg">
        <div className="space-y-6 max-w-2xl mx-auto">
          <div>
            <label className="block text-white text-xl mb-1">Enter Floor Number</label>
            <input name="floorNumber" onChange={handleChange} className="w-full p-3 rounded shadow bg-[#FFEAD2] text-gray-700 font-bold" placeholder="eg: Floor 1" />
          </div>
          <div>
            <label className="block text-white text-xl mb-1">Enter Floor Name/type</label>
            <input name="floorType" onChange={handleChange} className="w-full p-3 rounded shadow bg-[#FFEAD2] text-gray-700 font-bold" placeholder="Ground Floor" />
          </div>
          <div>
            <label className="block text-white text-xl mb-1">Table Type Entries</label>
            <input name="tableType" onChange={handleChange} className="w-full p-3 rounded shadow bg-[#FFEAD2] text-gray-700 font-bold" placeholder="Table Type" />
          </div>
          <div>
            <label className="block text-white text-xl mb-1">Floor Purpose</label>
            <select name="purpose" onChange={handleChange} className="w-full p-3 rounded shadow bg-[#FFEAD2] text-gray-700 font-bold">
              <option value="">Select Purpose</option>
              <option value="Bar Area">Bar Area</option>
              <option value="Dining Area">Dining Area</option>
              <option value="Outdoor Seating">Outdoor Seating</option>
            </select>
          </div>
          <div>
            <label className="block text-white text-xl mb-1">Floor Capacity</label>
            <input name="capacity" onChange={handleChange} type="number" className="w-full p-3 rounded shadow bg-[#FFEAD2] text-gray-700 font-bold" placeholder="20 people" />
          </div>
          <div>
            <label className="block text-white text-xl mb-1">Floor Feature</label>
            <input name="feature" onChange={handleChange} className="w-full p-3 rounded shadow bg-[#FFEAD2] text-gray-700 font-bold" placeholder="VIP section" />
          </div>

          <div className="flex justify-between pt-6">
            <button onClick={handleSave} className="bg-[#AF2E27] text-white px-8 py-3 rounded-full text-xl shadow">
              Save
            </button>
            <button onClick={handleAddFloor} className="bg-[#AF2E27] text-white px-6 py-3 rounded-xl text-xl shadow flex items-center">
              Add Floor <span className="ml-2 text-2xl font-bold">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorDetailForm;
