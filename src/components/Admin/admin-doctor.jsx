import React, { useState } from "react";


const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthlyData = [
  { month: "Jan", male: 40, female: 60 },
  { month: "Feb", male: 45, female: 55 },
  { month: "Mar", male: 50, female: 65 },
  { month: "Apr", male: 60, female: 75 },
  { month: "May", male: 55, female: 70 },
  { month: "Jun", male: 52, female: 68 },
  { month: "Jul", male: 48, female: 62 },
  { month: "Aug", male: 50, female: 66 },
  { month: "Sep", male: 54, female: 70 },
  { month: "Oct", male: 58, female: 72 },
  { month: "Nov", male: 53, female: 68 },
  { month: "Dec", male: 57, female: 73 },
];

const weeklyData = [
  { day: "Mon", value: 20 },
  { day: "Tue", value: 35 },
  { day: "Wed", value: 25 },
  { day: "Thu", value: 40 },
  { day: "Fri", value: 30 },
  { day: "Sat", value: 45 },
  { day: "Sun", value: 28 },
];
const tabsData = [
  "ALL",
  "CARDIOLOGIST",
  "ORTHOPEDICS",
  "ONCOLOGY",
  "DERMATOLOGY",
  // future me aur add kar sakte ho
  // "NEUROLOGY",
  // "PEDIATRICS",
];


const AdminDoctor = () => {

  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2025);

  const [active, setActive] = useState("Dashboard");

  const [openType, setOpenType] = useState(null);


  const [activeTab, setActiveTab] = useState("ALL");


  const menu = [
    { name: "Dashboard", icon: "/das.png" },
    { name: "Doctor", icon: "/doc.png" },
    { name: "Appointment", icon: "/app.png" },
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  return (
    <div className="flex min-h-screen bg-[#F7F9FB]">

      {/* ================= SIDEBAR ================= */}
      <aside className="relative w-[210px] bg-white border-2 border-[#19718A] rounded-[25px] p-4">

        {/* LOGO */}
        <div className="flex justify-center mb-8">
          <img src="/name.png" className="w-32" />
        </div>

        <div className="relative">

          {/* CURVED ACTIVE BACK */}
          <div
            className="absolute left-0 w-full h-[54px] 
                     border-2 border-[#19718A] 
                     rounded-full bg-white
                     transition-all duration-300"
            style={{
              top:
                active === "Dashboard"
                  ? "0px"
                  : active === "Doctor"
                    ? "70px"
                    : "139px",
            }}
          />

          {/* MENU */}
          <div className="flex flex-col gap-3 relative z-10">
            {menu.map((item) => (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className="flex items-center gap-3 h-[54px] pl-2"
              >
                {/* ICON CIRCLE */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center
                ${active === item.name
                      ? "bg-[#19718A]"
                      : "border border-[#19718A]"
                    }`}
                >
                  <img
                    src={item.icon}
                    className={`w-5 ${active === item.name
                      ? "brightness-0 invert"
                      : ""
                      }`}
                  />
                </div>

                {/* TEXT */}
                <span
                  className={`font-semibold text-sm ${active === item.name
                    ? "text-[#19718A]"
                    : "text-[#19718A]"
                    }`}
                >
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 pt-2 pr-2 pl-4 flex flex-col gap-6">


        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4 w-full max-w-[600px]">

            <div className="w-12 h-8 border rounded-lg bg-white flex items-center justify-center">
              <img src="/m.png" className="w-7" />
            </div>
            <div className="flex items-center bg-white border rounded-full px-4 py-2 w-full">
              <img src="/sea.png" className="w-5 mr-2" />
              <input className="w-full outline-none text-md" placeholder="Search" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border rounded-lg bg-white flex items-center justify-center">
              <img src="/sett.png" className="w-12" />
            </div>

            <div className="w-10 h-10 border rounded-lg bg-white flex items-center justify-center relative">
              <img src="/im.png" className="w-7" />

            </div>

            <div className="flex items-center gap-2 border rounded-lg px-2 py-">
              <span className="text-sm font-medium">Dasy William</span>
              <img src="/ph.png" className="w-10 rounded-full" />
            </div>
          </div>
        </div>

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-10 gap-6">

          {/* LEFT */}
          <div className="col-span-6 space-y-6">

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { t: "Total Appointment", v: "300", img: "/ap.png", bg: "#fcf3c8" },
                { t: "Patients", v: "1863", img: "/pers.png", bg: "#ebc7f4" },
                { t: "Income", v: "$142k", img: "/arr.png", bg: "#d8f4f9" },
              ].map((i, k) => (
                <div key={k} style={{ background: i.bg }}
                  className="border-t border-b border-gray rounded-xl p-4 h-[130px] flex flex-col justify-between">

                  <div className="flex items-center gap-2">
                    <img src={i.img} className="w-7" />
                    <p className="text-xs text-gray-600">{i.t}</p>
                  </div>
                  <h2 className="text-2xl font-bold">{i.v}</h2>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-gray-500">Last 7 days</span>
                    <span className="bg-green-100 text-green-500 px-2 rounded-full">50% ↑</span>
                  </div>
                </div>
              ))}
            </div>

            {/* DOCTORS */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { t: "Total Doctors", v: "100", img: "/do.png" },
                { t: "Active Doctors", v: "50", img: "/active.png" },
                { t: "Add Doctors", v: "", img: "/add.png" },
              ].map((c, i) => (
                <div key={i} className="bg-white border rounded-xl p-4 h-[120px]">
                  <p className="text-xs text-gray-500">{c.t}</p>
                  <div className="flex items-center gap-3">
                    {c.v && <h2 className="text-3xl font-bold">{c.v}</h2>}
                    <img src={c.img} className="w-20" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CALENDAR */}
          <div className="col-span-4 bg-white border-1 border-gray-500 rounded-xl p-6">
            <div className="flex justify-between mb-4">
              <select value={month} onChange={(e) => setMonth(+e.target.value)}
                className="border-1 border-black-300 rounded-full px-3 py-1 text-xs">
                {months.map((m, i) => (
                  <option key={i} value={i}>{m}</option>
                ))}
              </select>

              <select value={year} onChange={(e) => setYear(+e.target.value)}
                className="border-1 rounded-full px-3 py-1 text-xs">
                {[2024, 2025, 2026].map(y => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-xs">
              {["S", "M", "T", "W", "Th", "F", "Sat"].map(d => (
                <span key={d} className="text-blue-500 font-medium">{d}</span>
              ))}
              {[...Array(firstDay)].map((_, i) => <span key={i} />)}
              {[...Array(daysInMonth)].map((_, i) => (
                <span key={i} className="py-1 rounded hover:bg-blue-100 cursor-pointer">
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
        </div>


        {/* last section */}
        {/* TOP TABS SECTION */}
        <div className="w-full bg-white border border-[#19718A] rounded-full px-4 py-2 flex items-center justify-between">

          {/* LEFT: TABS */}
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap
          ${activeTab === tab
                    ? "bg-[#19718A] text-white"
                    : "text-gray-400 hover:text-[#19718A]"
                  }
        `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* RIGHT IMAGES */}
          <div className="flex items-center gap-3">

            {/* SMALL OPEN */}
            <img
              src="/tab.png"
              className="w-6 cursor-pointer hover:scale-110 transition"
              onClick={() =>
                setOpenType(openType === "small" ? null : "small")
              }
            />

            {/* FULL OPEN */}
            <img
              src="/tab1.png"
              className="w-6 cursor-pointer hover:scale-110 transition"
              onClick={() =>
                setOpenType(openType === "full" ? null : "full")
              }
            />

          </div>
        </div>



        {/* ✅ FULL SECTION */}
        {openType === "full" && (
          <div className="mt-4 bg-white border rounded-xl p-10 shadow-sm w-full">
           full content
          </div>
        )}

      </main>
    </div>

  );
};

export default AdminDoctor;
