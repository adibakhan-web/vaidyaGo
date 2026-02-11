import { useState } from "react";
import { motion } from "framer-motion";

export default function Restaurant3() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    floorNumber: "",
    floorName: "",
    floorPurpose: "",
    floorCapacity: "",
    floorFeature: "",
  });

  const [tableEntries, setTableEntries] = useState([
    { type: "2-seater", count: 20 },
    { type: "3-seater", count: 20 },
  ]);

  const [newTableType, setNewTableType] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddTableType = () => {
    if (newTableType.trim() !== "") {
      setTableEntries([...tableEntries, { type: newTableType, count: 0 }]);
      setNewTableType("");
    }
  };

  const handleUpdateCount = (index, delta) => {
    const updated = [...tableEntries];
    updated[index].count = Math.max(0, updated[index].count + delta);
    setTableEntries(updated);
  };

  const handleDeleteTable = (index) => {
    const updated = [...tableEntries];
    updated.splice(index, 1);
    setTableEntries(updated);
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
    console.log("Table Entries:", tableEntries);
  };

  const handleAddFloor = () => {
    alert("New floor added!");
  };

  const steps = [
    { id: 1, title: "Restaurant Detail" },
    { id: 2, title: "Admin Detail" },
    { id: 3, title: "Interior Detail" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="flex h-screen">
        {/* Left - Image + Steps */}
        <div className="w-1/2 relative">
          <img
            src="/res.png"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-[280px] top-1/2 transform -translate-y-1/2 space-y-10">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-600 rounded-full border-4 border-white"></div>
                <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm shadow-md">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div className="w-full flex justify-center items-center p-4 bg-[#FFEAD2]">
          <div
            className="relative p-6 rounded-xl shadow-xl"
            style={{
              width: "900px",
              height: "750px",
              background:
                "linear-gradient(to bottom right, #AF2E27, #FECF9B)",
            }}
          >
            {/* Home Icon */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute -top-[40px] left-1/2 transform -translate-x-1/2 p-4 rounded-full"
              style={{
                background: "linear-gradient(15deg, #fbd0a2, #954034)",
                boxShadow: "0 4px 15px #efc292, inset 0 4px 8px #560204a3",
              }}
            >
              <motion.img src="/black.svg" className="h-[50px] w-[50px]" />
            </motion.div>

            {/* Form Inputs */}
            <div className="pt-12 space-y-3 max-w-[700px] mx-auto">
              {/* Floor Inputs */}
              <input
                placeholder="eg: Floor 1"
                value={formData.floorNumber}
                onChange={(e) =>
                  handleInputChange("floorNumber", e.target.value)
                }
                className="w-full h-10 px-3 rounded bg-[#FFEAD2] border border-[#7D5151] text-orange-800 placeholder:text-[#8F8787]"
              />
              <input
                placeholder="Ground Floor"
                value={formData.floorName}
                onChange={(e) => handleInputChange("floorName", e.target.value)}
                className="w-full h-10 px-3 rounded bg-[#FFEAD2] border border-[#7D5151] text-orange-800 placeholder:text-[#8F8787]"
              />

              {/* -------- Your Styled Table-Type Block -------- */}
              <div
                className="relative mx-auto"
                style={{
                  width: "838px",
                  height: "318px",
                  backgroundColor: "#FFEAD2",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0px 0px 6px 5px rgba(125, 81, 81, 0.3)",
                }}
              >
                <div className="flex justify-between px-3 mb-4">
                  <h2 className="text-[27px] font-bold text-black">Table Type</h2>
                  <h2 className="text-[27px] font-bold text-black">Count</h2>
                </div>

                {/* Map tableEntries dynamically */}
                {tableEntries.map((entry, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-3 mb-4"
                    style={{
                      width: "685px",
                      height: "58px",
                      backgroundColor: "#FFEAD2",
                      boxShadow: "0px 0px 6px 5px rgba(125, 81, 81, 0.3)",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="text-[#CB6D5E] text-[32px] font-bold">
                      {entry.type}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleUpdateCount(index, -1)}
                        className="w-[38px] h-[37px] bg-[#E71E1E] rounded-[11px] text-white text-xl font-bold"
                      >
                        −
                      </button>
                      <div className="text-black text-[33px] font-bold">
                        {entry.count}
                      </div>
                      <button
                        onClick={() => handleUpdateCount(index, 1)}
                        className="w-[38px] h-[37px] bg-[#3FC430] rounded-[11px] text-white text-xl font-bold"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleDeleteTable(index)}
                        className="w-[59px] h-[53px] bg-[#FFEAD2] shadow-md rounded-[11px] flex justify-center items-center text-[#B3261E] text-xl font-bold"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                ))}

                {/* Green Add Row */}
                <div
                  className="mt-6 flex items-center justify-center cursor-pointer"
                  style={{
                    backgroundColor: "#72DE2A",
                    boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.25)",
                    width: "100%",
                    height: "53px",
                    borderRadius: "10px",
                  }}
                  onClick={handleAddTableType}
                >
                  <span className="text-[30px] font-bold text-black">Add</span>
                </div>

                {/* Input for new table type */}
                <div className="mt-3 flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="e.g. 4-seater"
                    value={newTableType}
                    onChange={(e) => setNewTableType(e.target.value)}
                    className="flex-1 px-3 py-1 rounded border border-gray-400"
                  />
                  <button
                    onClick={handleAddTableType}
                    className="bg-green-600 text-white px-4 py-1 rounded"
                  >
                    Add
                  </button>
                </div>
              </div>
              {/* -------- End Styled Table-Type Block -------- */}

              {/* Floor Feature */}
              <input
                placeholder="VIP section"
                value={formData.floorFeature}
                onChange={(e) => handleInputChange("floorFeature", e.target.value)}
                className="w-full h-10 px-3 rounded bg-[#FFEAD2] border border-[#7D5151] text-orange-800 placeholder:text-[#8F8787]"
              />

              {/* Action Buttons */}
              <div className="flex justify-between mt-4 max-w-[700px] mx-auto">
                <button
                  onClick={handleSave}
                  className="bg-[#AF2E27] text-white px-10 py-2 rounded-full text-lg shadow"
                >
                  Done
                </button>
                <button
                  onClick={handleAddFloor}
                  className="bg-[#FECF9B] text-[#AF2E27] px-10 py-2 rounded-full text-lg shadow"
                >
                  Add Floor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

