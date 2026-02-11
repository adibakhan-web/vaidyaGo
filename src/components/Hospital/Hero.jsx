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
<section className="relative overflow-hidden pb-60">
  {/* Background Image */}
  <img
    src="/bg1.svg"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />

  {/* Navbar */}
  <header className="flex justify-between items-center px-6 py-4 shadow-none rounded-none mx-1 -mt-6">
  {/* Logo */}
  {/* <div className="flex items-center space-x-2 group">
  <img
    src="/logo.png"
    alt="Logo"
    className="w-28 h-auto transition-all duration-500 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_#19718A]"
  />
</div> */}


  {/* Navigation Links */}
  <nav className="flex flex-wrap justify-end items-center space-x-10 md:space-x-15 pr-6 md:pl-96">
  {["About", "Our Service", "Doctor", "FAQ"].map((item) => (
    <a
      key={item}
      href="#"
      className="relative text-[#19718A] font-medium transition-all duration-300 hover:text-[#0C6173]
      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#0C6173]
      hover:after:w-full after:transition-all after:duration-300"
    >
      {item}
    </a>
  ))}
</nav>


  {/* Right Icons + Button */}
  <div className="flex items-center space-x-3">
    <div className="w-px h-8 bg-gray-300"></div>
    <button className="p-2 md:pr-0 rounded-full hover:bg-[#E0F7FA] transition-all duration-300">
      <img src="/search.svg" alt="Search" className="w-5 h-5" />
    </button>
    <div className="w-px h-8 bg-gray-300"></div>
    <button className="p-2 rounded-full hover:bg-[#E0F7FA] transition-all duration-300">
      <img src="/Bell.png" alt="Bell" className="w-5 h-5" />
    </button>
   <button className="
  relative 
  border border-[#19718A] 
  text-[#19718A] 
  px-5 py-2 
  rounded-full 
  overflow-hidden 
  transition-all duration-500 
  hover:text-white 
  hover:bg-[#19718A] 
  hover:shadow-md 
  md:hover:shadow-lg 
  lg:hover:shadow-xl
">
  Contact Us
</button>


  </div>

  {/* Mobile Menu Icon */}
  <button className="md:hidden p-2 rounded-md hover:bg-[#E0F7FA] transition-all duration-300">
    <img src="/menu.svg" alt="Menu" className="w-6 h-6" />
  </button>
</header>

  {/* Hero Section */}
  <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 mt-40 space-y-10 md:space-y-0">
    {/* Decorative Circles */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute left-[-100px] top-1/3 w-72 h-72 bg-white/40 rounded-full blur-3xl border border-white/20 animate-pulse"></div>
      <div className="absolute right-[-150px] top-10 w-96 h-96 bg-white/30 rounded-full blur-3xl border border-white/10 animate-pulse"></div>
    </div>

    {/* Left Text Content */}
    
    <div className="md:w-1/2 max-w-lg space-y-6 relative z-10 text-center md:text-left md:-translate-y-32 md:translate-x-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-relaxed tracking-wide text-[#08334A] transition-all duration-500 hover:text-[#0C6173]">
        What Makes Us <br/> Better,Makes <br/>You Better.
      </h2>
      <p className="text-[#0E4056] font-medium text-sm sm:text-base md:translate-x-4">
       We are committed to delivering exceptional medical care through expert doctors, advanced facilities, and patient-focused services. Combining technology, compassion, and personalized attention, we ensure comfort, holistic wellness, and the best possible health outcomes for every patient.
      </p>
      <button className="bg-[#19718A] text-white px-7 py-3 rounded-full font-medium transition-all duration-500 hover:bg-[#088395] hover:scale-105 hover:shadow-[0_0_15px_#19718A]">
        Make Appointment
      </button>
    </div>

    {/* Right Image */}
    <div className="md:w-1/2 flex justify-center relative z-10">
      <img
  src="/hero2.png"
  alt="Doctor"
  className="w-72 sm:w-80 md:w-[420px] translate-x-9 md:-translate-x-40 -translate-y-1 md:-translate-y-20 transition-transform "
/>

    </div>
  </div>
</section>



{/* Unified Search Bar (Like First Image) */}
<section className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-[#088395] to-[#0B5E6C] py-8 px-5 mx-auto rounded-2xl shadow-2xl w-full md:w-10/12 -mt-12 relative z-10 space-y-4 md:space-y-0 md:space-x-4 overflow-hidden md:-translate-y-32  ">

  {/* ===== Smooth Glow Effect on Hover (entire box) ===== */}
  <style>
    {`
      .glow-section {
        transition: all 0.4s ease-in-out;
      }
      .glow-section:hover {
        box-shadow: 0 0 25px rgba(8, 131, 149, 0.6), 0 0 50px rgba(8, 131, 149, 0.3);
        transform: translateY(-3px);
      }

      /* Popup-like open animation */
      @keyframes popupShow {
        0% {
          opacity: 0;
          transform: scale(0.9) translateY(10px);
        }
        100% {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      .popup-animate {
        animation: popupShow 0.5s ease-out forwards;
      }
    `}
  </style>

  {/* Container with popup animation */}
  <div className="glow-section popup-animate flex flex-col md:flex-row justify-center items-center w-full gap-4 md:gap-6 ">

    {/* ===== Name Input ===== */}
    <div className="relative w-full md:w-1/4 group">
      <input
        type="text"
        placeholder="Enter Your Name"
        className="pl-10 pr-4 py-3 w-full rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A8E6E6] transition duration-300"
      />
      <img
        src="/user.svg"
        alt="User Icon"
        className="absolute left-2  top-1/2 transform -translate-y-1/2 w-7 h-10 opacity-70 transition-all duration-300 group-focus-within:scale-110 group-focus-within:opacity-100"
      />
    </div>

    {/* ===== Location Input ===== */}
    <div className="relative w-full md:w-1/4 group">
      <input
        type="text"
        placeholder="Select Your Location"
        className="pl-10 pr-4 py-3 w-full rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A8E6E6] transition duration-300"
      />
      <img
        src="/location_on.svg"
        alt="Location Icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-7 h-10 opacity-70 transition-all duration-300 group-focus-within:scale-110 group-focus-within:opacity-100"
      />
    </div>

    {/* ===== Services Dropdown ===== */}
    <div className="relative w-full md:w-1/4 group">
      <select className="appearance-none pl-10 pr-10 py-3 w-full rounded-lg text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-[#A8E6E6] transition duration-300 bg-white">
        <option value="">Select Services</option>
        <option value="cardiology">Cardiology</option>
        <option value="neurology">Neurology</option>
        <option value="dentistry">Dentistry</option>
        <option value="orthopedics">Orthopedics</option>
        <option value="dermatology">Dermatology</option>
        <option value="pediatrics">Pediatrics</option>
        <option value="gynecology">Gynecology</option>
        <option value="see-more">See More...</option>
      </select>

      {/* Left Icon */}
      <img
        src="/services.svg"
        alt="Services Icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-70 transition-all duration-300 group-focus-within:scale-110 group-focus-within:opacity-100"
      />

      {/* Right Dropdown Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none transition-transform duration-300 group-focus-within:rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    {/* ===== Book Now Button ===== */}
    <button className="relative bg-[#37E657] text-white font-semibold px-6 py-3 rounded-lg overflow-hidden transition-all duration-500 w-full md:w-auto group hover:bg-green-500 hover:shadow-[0_0_10px_#37E657]">
      <span className="relative z-10">BOOK NOW</span>
      <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
    </button>

  </div>
</section>
{/* ===== Specialities Section After Your Form Section ===== */}
<section className="w-full md:w-10/12 mx-auto mt-20 md:-mt-20 md:mb-10">

  <div className="text-center -mt-7 mb-4">
  <h2 className="text-4xl leading-snug text-black font-normal">
    We Serve In Different <span className="font-bold">Areas For</span>
  </h2>
  <h2 className="text-4xl font-bold text-black leading-snug">
    Our Patients
  </h2>
</div>

  {/* GRID BOXES */}
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

  {/* Reusable Box */}
  <div
  className="group relative bg-white p-6 rounded-2xl border shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
hover:shadow-[0_0_13px_#19718A,0_0_10px_rgba(25,113,138,0.4)] cursor-pointer w-[350px] h-[90px]"
  onClick={(e) => {
    const el = e.currentTarget;
    el.classList.remove("clicked");
    void el.offsetWidth;
    el.classList.add("clicked");
  }}
>
  <div className="flex items-center space-x-4 relative">

    {/* Icon with glow */}
    <div className="relative w-12 h-12">
      <img
        src="/heart.png"
        alt="Cardiac Care"
        className="w-full h-full object-contain transition-all duration-500 
        group-hover:scale-110 group-hover:brightness-110"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 
      opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
    </div>

    <div>
      <h4 className="font-bold text-2xl tracking-wide text-[#061953] 
      transition-colors duration-300 group-hover:text-[#19718A]">
        Cardiac Care
      </h4>

      <p className="text-gray-600 text-sm group-hover:text-gray-800 
      transition-colors duration-300">
        Heart Health Care
      </p>
    </div>
  </div>
</div>



  <div
  className="group relative bg-white p-6 rounded-2xl border shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
    hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
    hover:shadow-[0_0_13px_#19718A,0_0_10px_rgba(25,113,138,0.4)] cursor-pointer w-[350px] h-[90px]"
  onClick={(e) => {
    const el = e.currentTarget;
    el.classList.remove("clicked");
    void el.offsetWidth;
    el.classList.add("clicked");
  }}
>
  <div className="flex items-center space-x-4 relative">

    {/* Icon with glow */}
    <div className="relative w-12 h-12">
      <img
        src="/dentist.png" 
        alt="Dentistry"
        className="w-full h-full object-contain transition-all duration-500 
        group-hover:scale-110 group-hover:brightness-110"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 
      opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
    </div>

    <div>
      <h4 className="font-bold text-2xl tracking-wide text-[#061953] 
      transition-colors duration-300 group-hover:text-[#19718A]">
        Dentistry
      </h4>

      <p className="text-gray-600 text-sm group-hover:text-gray-800 
      transition-colors duration-300">
        Dental Care Solutions
      </p>
    </div>
  </div>
</div>



 <div
  className="group relative bg-white p-6 rounded-2xl border shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
    hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
    hover:shadow-[0_0_13px_#19718A,0_0_10px_rgba(25,113,138,0.4)] cursor-pointer w-[350px] h-[90px]"
>
  <div className="flex items-center space-x-4 relative">

    {/* Icon with glow */}
    <div className="relative w-12 h-12">
      <img
        src="/gastro.png"
        alt="Gastroscience"
        className="w-full h-full object-contain transition-all duration-500 
        group-hover:scale-110 group-hover:brightness-110"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 
      opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
    </div>

    <div>
      <h4 className="font-bold text-2xl tracking-wide text-[#061953] 
      transition-colors duration-300 group-hover:text-[#19718A]">
        Gastroscience
      </h4>

      <p className="text-gray-600 text-sm group-hover:text-gray-800 
      transition-colors duration-300">
        Digestive Health Care
      </p>
    </div>
  </div>
</div>



  
 <div
  className="group relative bg-white p-6 rounded-2xl border shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
    hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
    hover:shadow-[0_0_13px_#19718A,0_0_10px_rgba(25,113,138,0.4)] cursor-pointer w-[350px] h-[90px]"
>
  <div className="flex items-center space-x-4 relative">

    {/* Icon with glow */}
    <div className="relative w-12 h-12">
      <img
        src="/brain.png"
        alt="Neuroscience"
        className="w-full h-full object-contain transition-all duration-500 
        group-hover:scale-110 group-hover:brightness-110"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 
      opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
    </div>

    <div>
      <h4 className="font-bold text-2xl tracking-wide text-[#061953] 
      transition-colors duration-300 group-hover:text-[#19718A]">
        Neuroscience
      </h4>

      <p className="text-gray-600 text-sm group-hover:text-gray-800 
      transition-colors duration-300">
        Brain & Nerve Care
      </p>
    </div>
  </div>
</div>


  <div
  className="group relative bg-white p-6 rounded-2xl border shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
    hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
    hover:shadow-[0_0_13px_#19718A,0_0_10px_rgba(25,113,138,0.4)] cursor-pointer w-[350px] h-[90px]"
>
  <div className="flex items-center space-x-4 relative">

    {/* Icon with glow */}
    <div className="relative w-12 h-12">
      <img
        src="/ortho.png"
        alt="Orthopedics"
        className="w-full h-full object-contain transition-all duration-500 
        group-hover:scale-110 group-hover:brightness-110"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 
      opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
    </div>

    <div>
      <h4 className="font-bold text-2xl tracking-wide text-[#061953] 
      transition-colors duration-300 group-hover:text-[#19718A]">
        Orthopedics
      </h4>

      <p className="text-gray-600 text-sm group-hover:text-gray-800 
      transition-colors duration-300">
        Bone & Joint Care
      </p>
    </div>
  </div>
</div>


 <div
  className="group relative bg-white p-6 rounded-2xl border shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
    hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
    hover:shadow-[0_0_13px_#19718A,0_0_10px_rgba(25,113,138,0.4)] cursor-pointer w-[350px] h-[90px]"
>
  <div className="flex items-center space-x-4 relative">

    {/* Icon with glow */}
    <div className="relative w-12 h-12">
      <img
        src="/liver.png"
        alt="Liver Care"
        className="w-full h-full object-contain transition-all duration-500 
        group-hover:scale-110 group-hover:brightness-110"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 
      opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
    </div>

    <div>
      <h4 className="font-bold text-2xl tracking-wide text-[#061953] 
      transition-colors duration-300 group-hover:text-[#19718A]">
        Liver Care
      </h4>

      <p className="text-gray-600 text-sm group-hover:text-gray-800 
      transition-colors duration-300">
        Liver Transparent & Health Care
      </p>
    </div>
  </div>
</div>

  <div
  className="group relative bg-white p-6 rounded-2xl border shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
    hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
    hover:shadow-[0_0_13px_#19718A,0_0_10px_rgba(25,113,138,0.4)] cursor-pointer w-[350px] h-[90px]"
  onClick={(e) => {
    const el = e.currentTarget;
    el.classList.remove("clicked");
    void el.offsetWidth;
    el.classList.add("clicked");
  }}
>
  <div className="flex items-center space-x-4 relative">

    {/* Icon with glow */}
    <div className="relative w-12 h-12">
      <img
        src="/renal.png" 
        alt="Dentistry"
        className="w-full h-full object-contain transition-all duration-500 
        group-hover:scale-110 group-hover:brightness-110"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 
      opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
    </div>

    <div>
      <h4 className="font-bold text-2xl tracking-wide text-[#061953] 
      transition-colors duration-300 group-hover:text-[#19718A]">
        Renal Care
      </h4>

      <p className="text-gray-600 text-sm group-hover:text-gray-800 
      transition-colors duration-300">
        Kidney Healthy Treatment
      </p>
    </div>
  </div>
</div>




<div
  className="group relative bg-white p-6 rounded-2xl border shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
    hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
    hover:shadow-[0_0_13px_#19718A,0_0_10px_rgba(25,113,138,0.4)] cursor-pointer w-[350px] h-[90px]"
  onClick={(e) => {
    const el = e.currentTarget;
    el.classList.remove("clicked");
    void el.offsetWidth;
    el.classList.add("clicked");
  }}
>
  <div className="flex items-center space-x-4 relative">

    {/* Icon with glow */}
    <div className="relative w-12 h-12">
      <img
        src="/gyno.png" 
        alt="Dentistry"
        className="w-full h-full object-contain transition-all duration-500 
        group-hover:scale-110 group-hover:brightness-110"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 
      opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
    </div>

    <div>
      <h4 className="font-bold text-2xl tracking-wide text-[#061953] 
      transition-colors duration-300 group-hover:text-[#19718A]">
         Gynaecology
      </h4>

      <p className="text-gray-600 text-sm group-hover:text-gray-800 
      transition-colors duration-300">
        Gynaecological Care Solution
      </p>
    </div>
  </div>
</div>



<div
  className="group relative bg-white p-6 rounded-2xl border shadow-md border-b-2 border-t-2 border-r-2 border-l-2 border-transparent 
    hover:border-[#088395] transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] 
    hover:shadow-[0_0_13px_#19718A,0_0_10px_rgba(25,113,138,0.4)] cursor-pointer w-[350px] h-[90px]"
  onClick={(e) => {
    const el = e.currentTarget;
    el.classList.remove("clicked");
    void el.offsetWidth;
    el.classList.add("clicked");
  }}
>
  <div className="flex items-center space-x-4 relative">

    {/* Icon with glow */}
    <div className="relative w-12 h-12">
      <img
        src="/child.png" 
        alt="Dentistry"
        className="w-full h-full object-contain transition-all duration-500 
        group-hover:scale-110 group-hover:brightness-110"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#C8D9E2]/30 
      opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
    </div>

    <div>
      <h4 className="font-bold text-2xl tracking-wide text-[#061953] 
      transition-colors duration-300 group-hover:text-[#19718A]">
        Paediatric Care
      </h4>

      <p className="text-gray-600 text-sm group-hover:text-gray-800 
      transition-colors duration-300">
        Child Health Services
      </p>
    </div>
  </div>
</div>


  

</div>


  {/* Button */}
  <div className="flex mt-8">
  <button className="bg-[#19718A] text-white px-12 py-3 rounded-full font-medium transition-all duration-500 hover:bg-[#088395] hover:scale-105 hover:shadow-[0_0_10px_#19718A] mb-10 md:mb-4 inline-flex items-center gap-3">
  View All Specialities
  <img src="/icon.png" alt="ic" className="h-5 w-5" />
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
