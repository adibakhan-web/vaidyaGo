import React, { useState } from "react";

const AdminSidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    { name: "Dashboard", icon: "/das.png" },
    { name: "Doctor", icon: "/doc.png" },
    { name: "Appointment", icon: "/app.png" },
  ];

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
                    ${
                      active === item.name
                        ? "bg-[#19718A]"
                        : "border border-[#19718A]"
                    }`}
                >
                  <img
                    src={item.icon}
                    className={`w-5 ${
                      active === item.name ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>

                {/* TEXT */}
                <span className="font-semibold text-sm text-[#19718A]">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
