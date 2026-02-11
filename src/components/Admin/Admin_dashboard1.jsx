import React, { useState, useRef, useEffect } from "react";
import DasyWilliam from "./DasyWilliam";
import Profile from "./Profile";
import AdminSidebar from "./AdminSidebar";
import { AnimatePresence } from "framer-motion";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";


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
const Admin_dashboard1 = () => {
    const [open, setOpen] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const menuRef = useRef(null);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(2025);
    const [active, setActive] = useState
    ("Dashboard");

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
if (openProfile) {
        return <Profile setOpenProfile={setOpenProfile} />;
    }
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
            <AdminSidebar active={active} setActive={setActive} />

            {/* ================= MAIN ================= */}
            <main className="flex-1 pt-2 pr-2 pl-4">

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

                        <div className="relative" ref={menuRef}>

                            {/* Profile Button */}
                            <div
                                onClick={() => setOpen(!open)}
                                className="flex items-center gap-2 border rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-100"
                            >
                                <span className="text-sm font-medium">Dasy William</span>
                                <img src="/ph.png" className="w-10 h-10 rounded-full" />
                            </div>

                           <AnimatePresence>
  {open && !openProfile && (
    <DasyWilliam setOpenProfile={setOpenProfile} />
  )}
</AnimatePresence>

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

                {/* ================= LAST SECTION ================= */}
                <div className="mt-[12px] grid grid-cols-10 gap-6">

                    {/* HELLO + BALANCE */}
                    <div className="col-span-6 space-y-4">

                        {/* GREETING CARD */}
                        <div className="relative bg-[#19718A] rounded-2xl p-6 w-[720px]
                  flex justify-between items-center text-white
                  overflow-hidden">

                            {/* DATE */}
                            <div className="absolute top-4 left-4 bg-white text-[#19718A]
                    text-xs px-3 py-1 rounded-full flex items-center gap-2">
                                17-01-2026
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>

                            {/* TEXT */}
                            <div className="z-10">
                                <h2 className="mt-[130px] text-2xl font-bold leading-tight">
                                    Hello MR.Admin
                                </h2>
                                <p className="text-sm mt-1 opacity-90">
                                    have a nice , Monday
                                </p>
                            </div>


                            {/* IMAGE CONTAINER */}
                            <div className="w-[300px] h-[100px] flex items-center justify-center">
                                <img
                                    src="/admin.png"
                                    className="max-w-full h-[250px]  object-contain"
                                    alt="Admin"
                                />
                            </div>


                        </div>

                        {/* BALANCE CARD */}
                        <div className="col-span-10">
                            <h3 className="font-semibold text-sm mb-2">Balance</h3>
                            <div className="bg-white border rounded-xl p-2 w-[700px] h-[150px]">
                                <div className="flex items-center gap-2">
                                    {/* CIRCLE ICON */}
                                    <div className="w-8 h-8 bg-[#19718A] rounded-full flex items-center justify-center">
                                        <img src="/coin.png" className="w-4 h-4" alt="coin" />
                                    </div>

                                    {/* TEXT */}
                                    <h2 className="my-2 font-bold text-gray-600">
                                        Income
                                    </h2>
                                </div>

                                <div className="flex items-center justify-between">
                                    {/* LEFT TEXT */}
                                    <h2 className="text-3xl font-semiabold text-black">
                                        $9,5000
                                    </h2>

                                    {/* RIGHT IMAGE */}
                                    <div className="relative mb-[70px]">
                                        <img
                                            src="/graph.png"
                                            className="w-[480px] h-[80px] "
                                            alt="graph"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* UPCOMING APPOINTMENT */}
                    <div className=" col-span-4 justify-self-end bg-white border-1 border-gray-500 rounded-xl p-4 h-[400px] w-[550px] ">

                        {/* HEADER */}
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-sm">Upcoming Appointment</h3>

                            <div className="flex gap-1">
                                <div className="w-6 h-6 border rounded flex items-center justify-center">
                                    <img src="/Frame.png" className="w-4 h-4" />
                                </div>
                                <div className="w-6 h-6 border rounded flex items-center justify-center">
                                    <img src="/Frame1.png" className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-black mb-3"></div>
                        {/* WEEK BAR */}
                        <div className="flex items-center justify-between text-xs mb-3">

                            <span className="cursor-pointer px-1">‹</span>

                            {[
                                { d: "Wed", n: "2nd" },
                                { d: "Thu", n: "3rd" },
                                { d: "Friday", n: "August 4th 2023" },
                                { d: "Sat", n: "5th" },
                                { d: "Sun", n: "6th" },
                            ].map((day, i) => (
                                <div
                                    key={i}
                                    className="
          px-2 py-1 rounded-lg text-center cursor-pointer
          text-gray-500
          hover:bg-[#19718A] hover:text-white
          transition-all duration-200
        "
                                >
                                    <p className="text-[11px]">{day.d}</p>
                                    <p className="text-[10px]">{day.n}</p>
                                </div>
                            ))}

                            <span className="cursor-pointer px-1">›</span>
                        </div>

                        {/* APPOINTMENT LIST */}
                        {[1, 2, 3].map(i => (
                            <div
                                key={i}
                                className="flex justify-between items-center bg-[#E6F0F3] p-2.5 border-1 border-gray-300 rounded-lg mb-2"
                            >
                                <div className="flex items-center  gap-2">
                                    <img
                                        src="/admin.png"
                                        className="w-10 h-10 rounded-full bg-white p-0.5"
                                    />

                                    <div>
                                        <p className="text-xs font-semibold leading-tight">
                                            Shawn Hampton
                                        </p>
                                        <p className="text-[10px] text-gray-600 leading-tight">
                                            Emergency Appointment
                                        </p>

                                        <span className="inline-block mt-0.5 text-[9px] bg-[#19718A] text-white px-2 py-0.5 rounded-full">
                                            10:00 AM
                                        </span>
                                    </div>
                                </div>

                                {/* CALL ICON */}
                                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                                    <img src="/call.png" className="w-6 h-6" />
                                </div>
                            </div>
                        ))}

                        {/* VIEW MORE */}
                        <div className="text-right mt-1">
                            <button className="text-[11px] text-blue-500 hover:underline">
                                View More
                            </button>
                        </div>
                    </div>

                    {/* ================= APPROVAL SECTION ================= */}
                    <div className="col-span-10">
                        <h3 className="font-semibold text-sm mb-2">Approval Section</h3>

                        <div className="bg-white border border-gray-400 rounded-xl px-3 py-2">

                            {/* HEADER */}
                            <div className="grid grid-cols-5 text-sm font-semibold text-gray-600 px-3 py-2 border-b">
                                <div>Doctor Name</div>
                                <div>Phone Number</div>
                                <div>Experience</div>
                                <div className="text-center">Action</div>
                                <div className="text-center">Status</div>
                            </div>

                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-5 items-center px-3 py-3 mt-2 border border-gray-200 rounded-lg"
                                >
                                    {/* DOCTOR NAME */}
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="/admin.png"
                                            className="w-10 h-10 rounded-full"
                                            alt="doctor"
                                        />
                                        <div>
                                            <p className="font-medium leading-tight">
                                                Dr. Sumaiya Javed
                                            </p>
                                            <p className="text-[11px] text-gray-500">
                                                Cardiologist
                                            </p>
                                        </div>
                                    </div>

                                    {/* PHONE */}
                                    <div className="text-sm">1234567890</div>

                                    {/* EXPERIENCE */}
                                    <div className="text-sm">5 years</div>

                                    {/* ACTION (Active / InActive) */}
                                    <div className="flex justify-center">
                                        {i === 2 ? (
                                            <span className="px-3 py-1 text-xs rounded-full bg-red-500 text-white">
                                                InActive
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 text-xs rounded-full bg-green-500 text-white">
                                                Active
                                            </span>
                                        )}
                                    </div>

                                    {/* STATUS (ICONS) */}
                                    <div className="flex justify-center gap-2">
                                        <div className="w-9 h-9 border rounded-lg flex items-center justify-center">
                                            <img src="/ti.png" className="w-5" />
                                        </div>
                                        <div className="w-9 h-9 border rounded-lg flex items-center justify-center">
                                            <img src="/delete.png" className="w-5" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ================= PATIENTS ANALYTICS ================= */}
                    <div className="col-span-10 mt-6">

                        <h3 className="font-semibold text-sm mb-4 text-gray-800">
                            Patients Analytics
                        </h3>


                        <div className="grid grid-cols-10 gap-4">

                            {/* LEFT BIG GRAPH */}
                            <div className="col-span-7 border rounded-xl p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm font-medium">
                                        Patients by Gender
                                    </p>
                                    <div className="text-xs text-gray-500">
                                        ● Male &nbsp; ● Female
                                    </div>
                                </div>

                                <ResponsiveContainer width="100%" height={260}>
                                    <AreaChart data={monthlyData}>
                                        <XAxis dataKey="month" />
                                        <YAxis hide />
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="male"
                                            stroke="#19718A"
                                            fill="#19718A"
                                            fillOpacity={0.3}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="female"
                                            stroke="#1E3A8A"
                                            fill="#1E3A8A"
                                            fillOpacity={0.2}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                            {/* RIGHT SIDE CARDS */}
                            <div className="col-span-3 flex flex-col gap-4">

                                {/* MALE */}
                                <div className="border rounded-xl p-3">
                                    <p className="text-xs font-semibold text-gray-600 mb-1">
                                        Male
                                    </p>
                                    <h4 className="text-sm font-bold mb-2">
                                        40.05%
                                    </h4>

                                    <ResponsiveContainer width="100%" height={90}>
                                        <AreaChart data={weeklyData}>
                                            <XAxis dataKey="day" hide />
                                            <YAxis hide />
                                            <Area
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#19718A"
                                                fill="#19718A"
                                                fillOpacity={0.3}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* FEMALE */}
                                <div className="border rounded-xl p-3">
                                    <p className="text-xs font-semibold text-gray-600 mb-1">
                                        Female
                                    </p>
                                    <h4 className="text-sm font-bold mb-2">
                                        58.08%
                                    </h4>

                                    <ResponsiveContainer width="100%" height={90}>
                                        <AreaChart data={weeklyData}>
                                            <XAxis dataKey="day" hide />
                                            <YAxis hide />
                                            <Area
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#1E3A8A"
                                                fill="#1E3A8A"
                                                fillOpacity={0.3}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* ================= RECENT ACTIVITY ================= */}
                    <div className="col-span-10 mt-6">
                        <h3 className="font-semibold text-sm mb-2 text-gray-800">
                            Recent Activity
                        </h3>

                        <div className="bg-white border border-gray-400 rounded-xl px-3 py-3">

                            {/* HEADER */}
                            <div className="grid grid-cols-5 text-sm font-semibold text-gray-600 px-3 py-2 border-b">
                                <div>Dates</div>
                                <div>Patients Name</div>
                                <div>Doctors Name</div>
                                <div className="text-center">Status</div>
                                <div className="text-center">Action</div>
                            </div>

                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-5 items-center px-3 py-3 mt-2 border border-gray-200 rounded-lg"
                                >
                                    {/* DATE */}
                                    <div className="text-sm font-bold ">
                                        28-01-2026
                                    </div>

                                    {/* PATIENT */}
                                    <div className="text-sm font-bold ">
                                        Arti yadav
                                    </div>

                                    {/* DOCTOR */}
                                    <div className="text-sm font-bold">
                                        Dr. Sumaiya Javed
                                    </div>

                                    {/* STATUS */}
                                    <div className="flex justify-center">
                                        <span className="px-3 py-1 text-xs rounded-full bg-green-500 text-white">
                                            Completed
                                        </span>
                                    </div>

                                    {/* ACTION */}
                                    <div className="flex justify-center relative">
                                        <button
                                            className="w-9 h-9 border rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100"
                                            title="Edit"
                                        >
                                            <img src="/Edit.png" className="w-4" />
                                        </button>
                                    </div>

                                </div>
                            ))}

                            {/* VIEW MORE */}
                            <div className="text-right mt-2">
                                <button className="text-xs text-blue-500 hover:underline">
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        </div>
    );
};

export default Admin_dashboard1;
