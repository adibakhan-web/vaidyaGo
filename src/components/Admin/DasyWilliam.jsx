import React from "react";
import { motion } from "framer-motion";

const DasyWilliam = ({ setOpenProfile }) => {
    return (
      <motion.div
  initial={{ opacity: 0, y: -40 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}
transition={{ type: "spring", stiffness: 260, damping: 20 }}

  className="absolute right-0 mt-2 w-[520px] bg-white rounded-2xl 
border border-gray-200 divide-y
shadow-[0_10px_40px_rgba(0,120,255,0.15)]"
>


            {/* Account Section */}
            <div className="px-4 py-3">
                <p className="text-gray-500 text-sm mb-2">Account</p>

                <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-xl p-2 transition">
                    <div className="flex gap-3 items-center">
                        <img
                            src="/ph.png"
                            alt="profile"
                            className="w-12 h-12 rounded-full object-cover"
                        />

                        <div className="leading-tight">
                            <h2 className="font-semibold text-lg text-gray-700">
                                Dasy William
                            </h2>
                            <p className="text-sky-600 text-sm">
                                javedtuba@gmail.com
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpenProfile(true);
                        }}
                        className="p-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>
            </div>

            {/* Plan Section */}
            <div className="px-2 py-3">
                <p className="text-gray-600 text-sm mb-2">Plan</p>

                <button className="w-full border rounded-full py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                    <img src="/plus.png" className="w-6 h-6 object-contain" />
                    <p className="text-gray-700 font-medium">Create plan</p>
                </button>
            </div>

            {/* Menu Items */}
            <div className="py-2">

                {/* Settings */}
                <div className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 cursor-pointer transition">
                    <div className="flex items-center gap-3">
                        <img src="/settt.png" className="w-6 h-6 object-contain" />
                        <p className="text-gray-700 font-medium">Settings</p>
                    </div>
                </div>

                {/* Theme */}
                <div className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 cursor-pointer transition">
                    <div className="flex items-center gap-3">
                        <img src="/theme.png" className="w-6 h-6 object-contain" />
                        <p className="text-gray-700 font-medium">Theme</p>
                    </div>

                    <span className="text-gray-400">⌄</span>
                </div>

                {/* Help */}
                <div className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 cursor-pointer transition">
                    <div className="flex items-center gap-3">
                        <img src="/help.png" className="w-6 h-6 object-contain" />
                        <p className="text-gray-700 font-medium">Help & Resources</p>
                    </div>

                    <span className="text-gray-400">⌄</span>
                </div>

            </div>


            {/* Logout */}
            <div className="p-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3 transition">

                <img src="/log.png" className="w-6 h-6 object-contain" />
                <p className="text-gray-700 font-medium">Logout</p>

            </div>

        </motion.div>

    );
};

const MenuItem = ({ title, icon, dropdown }) => {
    return (
        <div className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 cursor-pointer transition">
            <div className="flex items-center gap-3">
                <span>{icon}</span>
                <p className="text-gray-700 font-medium">{title}</p>
            </div>

            {dropdown && <span className="text-gray-400">⌄</span>}
        </div>
    );
};

export default DasyWilliam;
