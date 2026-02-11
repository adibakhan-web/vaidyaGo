import React from "react";

const Hero = () => {
  return (
    //      <section className="relative pb-0.25">
    //       <img
    //     src="/new.png"
    //     alt="Background"
    //     className="absolute inset-0 w-full h-full object-cover -z-10"
    //   />
    //   {/* Navbar */}
    //   <header className="flex items-center space-x-20 mr-6 justify-end px-4 py-2">
    //     {/* Left Logo */}
    //     {/* <div className="flex items-center space-x-2">
    //       <img src="/logo.png" alt="Logo" className="w-36 h-auto" />
    //     </div> */}

    //     {/* Navigation */}
    //     <nav className="flex items-center space-x-14">
    //       <a href="#" className="text-[#19718A] hover:text-teal-600 font-medium">About</a>
    //       <a href="#" className="text-[#19718A] hover:text-teal-600 font-medium">Our Service</a>
    //       <a href="#" className="text-[#19718A] hover:text-teal-600 font-medium">Doctor</a>
    //       <a href="#" className="text-[#19718A] hover:text-teal-600 font-medium">FAQ</a>
    //     </nav>

    //     {/* Icons + Contact Button */}
    //     <div className="flex items-center space-x-4">
    //       <div className="w-px h-7 bg-gray-300"></div>
    //       <div className="flex items-center space-x-3">
    //         <button className="text-gray-600 hover:text-teal-600">
    //           <img src="/search.svg" alt="Search" className="w-5 h-5" />
    //         </button>
    //         <div className="w-px h-7 bg-gray-300"></div>
    //         <button className="text-gray-600 hover:text-teal-600">
    //           <img src="/Bell.png" alt="Notification" className="w-5 h-5" />
    //         </button>
    //       </div>
    //       <button className="border border-[#19718A] text-[#19718A] px-4 py-1 rounded-full hover:bg-[#088395] hover:text-white transition">
    //         Contact Us
    //       </button>
    //     </div>
    //   </header>

    //   {/* Hero Section */}
    //    <div className="absolute top-[80px] left-10 w-10 h-10 bg-gray-300 rounded-full opacity-20 -z-10"></div>

    //   <div className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-6 md:pt-12">
    //     {/* Decorative Circles (optional, like second design) */}
    //     <div className="absolute inset-0 pointer-events-none z-0">
    //       <div className="absolute left-[-100px] top-1/3 w-72 h-72 bg-white/40 rounded-full blur-2xl border border-white/30"></div>
    //       <div className="absolute right-[-120px] top-10 w-96 h-96 bg-white/30 rounded-full blur-2xl border border-white/20"></div>
    //     </div>

    //     {/* Left Text Content */}
    //      <div className="absolute top-[80px] left-10 w-10 h-10 bg-gray-300 rounded-full opacity-20 -z-10"></div>
    //         <div className="absolute bottom-20 top-20 left-12 w-10 h-10 bg-gray-300 rounded-full opacity-20 -z-10"></div>
    //     <div className="md:w-1/2 max-w-lg space-y-5 relative z-10">
    //   <div className="space-y-5 relative z-10 -translate-y-2 md:-translate-y-6">
    //     <h2 className="text-4xl font-bold leading-tight text-[#08334A]">
    //       What Makes Us Better,<br />Makes You Better.
    //     </h2>
    //     <p className="text-[#0E4056] font-medium">
    //       We are dedicated to providing the best medical care with world-class doctors, advanced facilities, and patient-focused services.
    //     </p>
    //     <button className="bg-[#19718A] text-white px-6 py-3 rounded-full hover:bg-[#088395] transition">
    //       Make Appointment
    //     </button>
    //   </div>
    // </div>



    //     {/* Right Image */}
    //     <div className="md:w-1/2 flex justify-center relative z-10 -mt-8 md:-mt-12">
    //   <img
    //     src="/hero.svg"
    //     alt="Doctor"
    //     className="w-80 md:w-[400px] -translate-y-2 md:-translate-y-4"
    //   />
    // </div>

    //   </div>
    // </section> 


    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <section className="relative overflow-hidden ">
        {/* Background Image */}


        {/* Navbar */}
        <header className="relative flex items-center justify-between px-8 py-1 bg-[#19718A] border-b border-white/30">

          {/* Empty Left Space (Balance Maintain Karne Ke Liye) */}
          <div className="w-[280px]"></div>

          {/* CENTER NAVIGATION */}
          <nav className="absolute left-[500px] -translate-x-1/2 hidden md:flex items-center gap-[130px]">
            {["About", "Our Service", "Doctor", "FAQ"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-white font-medium tracking-wide transition-colors duration-300 hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* RIGHT SECTION (Icons + Contact) */}
          <div className="flex items-center gap-8">

            <div className="w-px h-6 bg-white/40"></div>

            <button className="p-2 hover:bg-[#0C6173] rounded-full transition-all duration-300">
              <img src="/search.svg" alt="Search" className="w-5 h-5 invert" />
            </button>

            <div className="w-px h-6 bg-white/40"></div>

            <button className="p-2 hover:bg-[#0C6173] rounded-full transition-all duration-300">
              <img src="/Bell.png" alt="Bell" className="w-5 h-5 invert" />
            </button>

            <button
              className=" border border-[#19718A]
               text-white
               px-7 py-1.5
              rounded-full
               transition-colors duration-300
                hover:bg-white
              hover:text-[#19718A]"

            >
              Contact Us
            </button>


          </div>

        </header>




      </section>



{/* hero */}
     {/* ================= HERO SECTION ================= */}
<section className="relative bg-[#f5f7f7] overflow-hidden pb-24">

  <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 items-center gap-12">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-gray-600 mb-4 text-lg">
        We are here for you
      </p>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
        What Makes Us <br />
        Better, Makes <br />
        You Better.
      </h1>

      <p className="text-gray-500 mt-6 max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <button className="mt-8 bg-[#19718A] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#0C6173] transition-all duration-300">
        Make Appointment
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center">

      <div className="absolute w-[380px] h-[380px] bg-[#19718A]/20 rounded-full"></div>

      <img
        src="/doctor.png"
        alt="Doctor"
        className="relative z-10 w-[350px] md:w-[400px]"
      />

      {/* Floating Cards */}
      <div className="absolute top-10 right-4 bg-[#a7c6cc] px-6 py-3 rounded-xl shadow-md">
        <span className="text-xl font-bold">20k Reviews</span>
      </div>

      <div className="absolute top-32 right-0 bg-[#a7c6cc] px-6 py-3 rounded-xl shadow-md">
        <span className="text-xl font-bold">100+ Happy Client</span>
      </div>

    </div>
  </div>

  {/* BOOKING BAR */}
  <div className="bg-[#19718A] py-8 px-6 md:px-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

      <input
        type="text"
        placeholder="Enter Your Name"
        className="px-5 py-3 rounded-lg outline-none w-full"
      />

      <input
        type="text"
        placeholder="Select Your Location"
        className="px-5 py-3 rounded-lg outline-none w-full"
      />

      <input
        type="text"
        placeholder="Select Services"
        className="px-5 py-3 rounded-lg outline-none w-full"
      />

      <button className="bg-green-500 text-white font-semibold rounded-lg py-3 hover:bg-green-600 transition-all">
        BOOK NOW
      </button>

    </div>
  </div>

</section>



{/* ================= SPECIALITIES SECTION ================= */}
<section className="w-full md:w-10/12 mx-auto mt-16 mb-20 px-6">

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    {[
      { img: "/heart.png", title: "Cardiac Care", desc: "Heart Health Care" },
      { img: "/dentist.png", title: "Dentistry", desc: "Dental Care Solutions" },
      { img: "/gastro.png", title: "Gastroscience", desc: "Digestive Health Care" },
      { img: "/brain.png", title: "Neuroscience", desc: "Brain & Nerve Care" },
      { img: "/ortho.png", title: "Orthopedics", desc: "Bone & Joint Care" },
      { img: "/liver.png", title: "Liver Care", desc: "Liver Transparent & Health Care" },
      { img: "/renal.png", title: "Renal Care", desc: "Kidney Healthy Treatment" },
      { img: "/gyno.png", title: "Gynaecology", desc: "Gynaecological Care Solution" },
      { img: "/child.png", title: "Paediatric Care", desc: "Child Health Services" },
    ].map((item, index) => (
      <div
        key={index}
        className="group bg-white p-6 rounded-2xl shadow-md border border-transparent
        hover:border-[#088395] transition-all duration-500
        hover:-translate-y-2 hover:shadow-xl cursor-pointer w-full min-h-[110px]"
      >
        <div className="flex items-center gap-4">

          <div className="relative w-12 h-12">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-contain transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#C8D9E2]/30 blur-md opacity-0 group-hover:opacity-100 transition duration-500 rounded-full"></div>
          </div>

          <div>
            <h4 className="font-bold text-xl text-[#061953] group-hover:text-[#19718A] transition">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>

        </div>
      </div>
    ))}

  </div>

  <div className="flex justify-center mt-12">
    <button className="bg-[#19718A] text-white px-12 py-3 rounded-full font-medium 
    transition duration-500 hover:bg-[#088395] hover:scale-105 shadow-md">
      View All Specialities
    </button>
  </div>

</section>


      {/* ==================== Diseases & Conditions Section ===================== */}

      <section className="w-full md:w-10/12 mx-auto mt-10 ">

        {/* LEFT IMAGE + RIGHT SEARCH PANEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">

          {/* LEFT SIDE IMAGE */}
          <div className="w-full h-full flex justify-center">
            <img
              src="/side.png"
              alt="Doctor Image"
              className="rounded-3xl w-[500px] h-[700px] object-cover shadow-md md:mb-20"
            />
          </div>

          {/* RIGHT SIDE SEARCH AREA */}
          <div className="flex flex-col items-center mr-20">

            <h2 className="text-2xl md:text-3xl font-normal text-center">
              Search <span className="font-bold text-[#19718A]">Diseases & Conditions</span>
              <br /> of Patients
            </h2>

            {/* A–Z Buttons */}
            <div className="grid grid-cols-6 gap-4 mt-6">
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
                <button
                  key={letter}
                  className="w-16 h-16 border-2 border-[#19718A] rounded-full text-[#19718A] 
      font-bold text-3xl flex items-center justify-center
      hover:bg-[#19718A] hover:text-white transition"
                >
                  {letter}
                </button>
              ))}
            </div>


            {/* Search Bar */}
            <div className="flex items-center w-full mt-6 bg-white shadow-md px-4 py-2 rounded-full border-2 mb-10">
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-gray-900 "
              />
              <button className="w-11 h-10 bg-[#19718A] rounded-full flex items-center justify-center hover:bg-[#088395] transition">
                <img src="/white.png" alt="Search" className="w-6 h-6 " />
              </button>

            </div>
          </div>
        </div>
      </section>





      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-[#E5F6F8]  m-4 md:m-10 transition-all duration-500 hover:shadow-2xl hover:border-[#088395]">

        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-[#08334A]">
            About Our Hospital
          </h3>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>

          {/* Points with icons */}
          <ul className="space-y-3">
            {["Browse Our Website", "Choose Services", "Send Message"].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md group-hover:bg-[#C8D9E2] transition-all duration-300">
                  <img
                    src="/tick.png"
                    alt="tick"
                    className="h-6 w-6 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-gray-800 font-medium group-hover:text-[#088395] transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="bg-[#19718A] text-white px-8 py-3 rounded-md font-medium hover:bg-[#088395] hover:scale-105 transition-all duration-300 shadow-md">
            Know More
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/doc.svg"
            alt="Doctor checking patient"
            className="w-[320px] md:w-[480px] lg:w-[550px] h-[500px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-14 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">

          {/* ==== Outer Box Container ==== */}
          <div className="bg-[#C8D9E2] shadow-xl rounded-2xl p-10 md:p-14 m-6 md:m-10 border-2 border-[#164863]
">

            {/* ==== Heading ==== */}
            <div className="text-center -mt-7 mb-3">
              <h2 className="text-4xl leading-snug text-black font-normal">
                We Serve In Different <span className="font-extrabold">Areas For</span>
              </h2>
              <h2 className="text-4xl font-extrabold text-black leading-snug">
                Our Patients
              </h2>
            </div>


            {/* ==== Grid Container ==== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* ==== 1. Cardiology Card ==== */}

              <div
                className="group relative bg-white p-6 rounded-2xl shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
hover:shadow-[0_0_20px_#19718A,0_0_40px_rgba(25,113,138,0.4)] cursor-pointer"
                onClick={(e) => {
                  const el = e.currentTarget;
                  el.classList.remove("clicked");
                  void el.offsetWidth;
                  el.classList.add("clicked");
                }}
              >
                <div className="flex items-center space-x-4 mb-4 relative">
                  {/* Icon with glow */}
                  <div className="relative w-12 h-12">
                    <img
                      src="/cardi.png"
                      alt="Cardiology"
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    {/* Circular glow behind icon */}
                    <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
                  </div>

                  {/* Title */}
                  <h4 className="font-bold text-xl text-[#003366] transition-colors duration-300 group-hover:text-[#19718A]">
                    Cardiology
                  </h4>
                </div>

                {/* Paragraph */}
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>


              {/* ==== 2. Dental Card ==== */}
              {/* === Dental Card === */}
              <div
                className="group relative bg-white p-6 rounded-2xl shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
hover:shadow-[0_0_20px_#19718A,0_0_40px_rgba(25,113,138,0.4)] cursor-pointer"
                onClick={(e) => {
                  const el = e.currentTarget;
                  el.classList.remove("clicked");
                  void el.offsetWidth;
                  el.classList.add("clicked");
                }}
              >
                <div className="flex items-center space-x-4 mb-4 relative">
                  <div className="relative w-12 h-12">
                    <img
                      src="/dental.png"
                      alt="Dental"
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
                  </div>

                  <h4 className="font-bold text-xl text-[#003366] transition-colors duration-300 group-hover:text-[#19718A]">
                    Dental
                  </h4>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>


              {/* === 3. Psychology Card === */}
              <div
                className="group relative bg-white p-6 rounded-2xl shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
hover:shadow-[0_0_20px_#19718A,0_0_40px_rgba(25,113,138,0.4)] cursor-pointer"
                onClick={(e) => {
                  const el = e.currentTarget;
                  el.classList.remove("clicked");
                  void el.offsetWidth;
                  el.classList.add("clicked");
                }}
              >
                <div className="flex items-center space-x-4 mb-4 relative">
                  <div className="relative w-12 h-12">
                    <img
                      src="/psy.png"
                      alt="Psychology"
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
                  </div>

                  <h4 className="font-bold text-xl text-[#003366] transition-colors duration-300 group-hover:text-[#19718A]">
                    Psychology
                  </h4>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* === 4. Neurology Card === */}
              <div
                className="group relative bg-white p-6 rounded-2xl shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
hover:shadow-[0_0_20px_#19718A,0_0_40px_rgba(25,113,138,0.4)] cursor-pointer"
                onClick={(e) => {
                  const el = e.currentTarget;
                  el.classList.remove("clicked");
                  void el.offsetWidth;
                  el.classList.add("clicked");
                }}
              >
                <div className="flex items-center space-x-4 mb-4 relative">
                  <div className="relative w-12 h-12">
                    <img
                      src="/neuro.png"
                      alt="Neurology"
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
                  </div>

                  <h4 className="font-bold text-xl text-[#003366] transition-colors duration-300 group-hover:text-[#19718A]">
                    Neurology
                  </h4>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              {/* ==== 5. Dermatology Card ==== */}
              <div className="group relative bg-white p-6 rounded-2xl shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
hover:shadow-[0_0_20px_#19718A,0_0_40px_rgba(25,113,138,0.4)] cursor-pointer"
                onClick={(e) => {
                  const el = e.currentTarget;
                  el.classList.remove("clicked");
                  void el.offsetWidth;
                  el.classList.add("clicked");
                }}
              >
                <div className="flex items-center space-x-4 mb-4 relative">
                  <div className="relative w-12 h-12">

                    <img src="/dermato.png"
                      alt="Dermatology"
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" />
                    <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
                  </div>
                  <h4 className="font-bold text-xl text-[#003366] transition-colors duration-300 group-hover:text-[#19718A">
                    Dermatology
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* ==== 6. Oncology Card ==== */}
              <div className="group relative bg-white p-6 rounded-2xl shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
hover:shadow-[0_0_20px_#19718A,0_0_40px_rgba(25,113,138,0.4)] cursor-pointer"
                onClick={(e) => {
                  const el = e.currentTarget;
                  el.classList.remove("clicked");
                  void el.offsetWidth;
                  el.classList.add("clicked");
                }}
              >
                <div className="flex items-center space-x-4 mb-4 relative">
                  <div className="relative w-12 h-12">

                    <img src="/oncology.png" alt="Oncology" className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" />
                    <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
                  </div>
                  <h4 className="font-bold text-xl text-[#003366] transition-colors duration-300 group-hover:text-[#19718A">
                    Oncology
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F4F9FB] py-12 mt-3">
        <div className="max-w-7xl mx-auto text-center px-2">

          {/* ==== 3 Boxes in a Row ==== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

            {[
              {
                name: "Robert Brown",
                text: "A positive statement from a satisfied customer about their experience with a product or service.",
                img: "/person2.png", // 👈 first image
                color: "#19718A",
              },
              {
                name: "Sarah Lee",
                text: "Excellent service! The staff was friendly, and the treatment was top-notch. Highly recommend!",
                img: "/person3.png", // 👈 second image
                color: "#399CAA",
              },
              {
                name: "Jenny Wilson",
                text: "Professional and caring team. I felt comfortable throughout my entire visit!",
                img: "/person4.png", // 👈 third image
                color: "#0F628E",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white w-full h-[420px] max-w-sm p-12 shadow-lg rounded-2xl overflow-hidden
                     transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-3
                     border-2 border-transparent"
              >

                {/* ==== Wavy Top Section ==== */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] h-[160px]">
                  <svg
                    className="relative block w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 160"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,80 C150,160 350,0 500,80 L500,0 L0,0 Z"
                      fill={item.color}
                    ></path>
                    <path
                      d="M0,100 C150,180 350,20 500,100 L500,0 L0,0 Z"
                      fill={item.color}
                      opacity="0.8"
                    ></path>
                  </svg>
                </div>

                {/* ==== Content ==== */}
                <div className="relative z-10 flex flex-col items-center mt-14">

                  {/* ==== Profile Image ==== */}
                  <div className="relative -mt-10">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Decorative Icons */}
                  <div>
                    <img src="/comma.png" alt="comma" className="absolute -left-8 -mt-10 w-7 h-7" />
                    <img src="/comma1.png" alt="comma" className="absolute -right-8 -mt-10 w-7 h-7" />
                  </div>

                  <div>
                    <img src="/circle.png" alt="circle" className="absolute -left-8 top-10 w-7 h-7" />
                    <img src="/circle.png" alt="circle" className="absolute -right-8 top-10 w-7 h-7" />
                  </div>

                  {/* ==== Quote Box ==== */}
                  <div
                    className="relative px-1 pt-4 pb-1 -mx-5 border-l-[2px] border-r-[2px] border-b-[2px] rounded-b-2xl"
                    style={{ borderColor: item.color }}
                  >
                    <h3 className="text-xl font-semibold text-[#003366] mt-4">{item.name}</h3>
                    <p className="text-gray-600 text-sm italic leading-relaxed px-6">{item.text}</p>

                    <div className="flex justify-center text-yellow-400 text-lg tracking-widest mt-2">
                      ★★★★★
                    </div>

                    <div
                      className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-0 h-0"
                      style={{
                        borderLeft: "20px solid transparent",
                        borderRight: "20px solid transparent",
                        borderTop: `20px solid ${item.color}`,
                      }}
                    ></div>
                  </div>

                  {/* ==== Button ==== */}
                  <button
                    className="mt-4 text-white px-12 py-1.5 rounded-full transition-all duration-300"
                    style={{
                      background: `linear-gradient(to right, ${item.color}, ${item.color}cc)`,
                      boxShadow: `0 0 15px ${item.color}80`,
                    }}
                  >
                    More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Footer Section ===== */}
      <footer className="bg-[#19718A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* === Logo + Description === */}
          <div className="flex flex-col items-start -mt-6">
            <img
              src="/logo.png"
              alt="VaidyaGo Logo"
              className="w-56 mb-4 -ml-5"
            />

            <p className="text-[13px] leading-relaxed max-w-xs font-serif">
              Committed to compassionate care, advanced
              technology, and healthier lives serving
              Eastern U.P. with trust, excellence,
              and integrity since 1989.
            </p>
          </div>

          {/* === Quick Links === */}
          <div>
            <h4 className="text-[15px] font-semibold mb-4 font-serif">Quick Links</h4>
            <ul className="space-y-2 text-[14px] font-[400] font-serif">
              <li className="flex items-center gap-2 mb-4">
                <span className="text-white text-sm">▶</span>
                <a href="#" className="hover:text-[#AEE8F5] transition-colors">Home</a>
              </li>

              <li className="flex items-center gap-2 font-serif mb-4">
                <span className="text-white text-sm">▶</span>
                <a href="#" className="hover:text-[#AEE8F5] transition-colors">About Us</a>
              </li>

              <li className="flex items-center gap-2 font-serif mb-4">
                <span className="text-white text-sm">▶</span>
                <a href="#" className="hover:text-[#AEE8F5] transition-colors">Services</a>
              </li>

              <li className="flex items-center gap-2 font-serif">
                <span className="text-white text-sm">▶</span>
                <a href="#" className="hover:text-[#AEE8F5] transition-colors">Gallery</a>
              </li>
            </ul>
          </div>

          {/* === Our Services === */}
          <div>
            <h4 className="text-[15px] font-semibold mb-4 font-serif">Our Services</h4>
            <ul className="space-y-2 text-[14px] font-[400] font-serif mb-4">
              <li>Ayurvedic Treatment</li>
              <li>Herbal Consultation</li>
              <li>Health Care Programs</li>
            </ul>
          </div>

          {/* === Contact Us === */}
          <div>
            <h4 className="text-[15px] font-semibold mb-4 font-serif">Contact Us</h4>
            <ul className="space-y-3 text-[14px] font-[400]">

              <li className="flex items-center gap-2 font-serif mb-4">
                <img src="/cl.png" alt="icon" className="w-4 h-4"></img>
                <span>+91 9879877801</span>
              </li>

              <li className="flex items-center gap-2 font-serif mb-4">
                <img src="/pack.png" alt="icon" className="w-4 h-4"></img>
                <span>vaidyaGo24@gmail.com</span>

              </li>
              <li className="flex items-center gap-2 font-serif mb-4">
                <img src="/pack.png" alt="icon" className="w-4 h-4"></img>
                <span>vaidyaGo247@gmail.com</span>

              </li>
              <li className="flex items-center gap-2 font-serif mb-4">
                <i className="fa fa-map-marker text-sm"></i>
                <span>
                  xyz, xyz, Gorakhpur,<br />
                  Uttar Pradesh, 273015
                </span>
              </li>

              {/* ==== Social Icons ===== */}
              <li className="flex items-center gap-3 pt-2">
                <img src="/instagram.png" className="w-4 cursor-pointer" />
                <img src="/facebook.png" className="w-4 cursor-pointer" />
                <img src="/whatsapp.png" className="w-4 cursor-pointer" />
              </li>

            </ul>
          </div>
        </div>

        {/* === Bottom Line === */}

      </footer>

    </div>
  );
};

export default Hero;
