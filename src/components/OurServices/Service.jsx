import React from "react";

const Service = () => {
  return (
    <section className="w-full  bg-[#127C85] py-20 px-10 flex flex-col md:flex-row items-center justify-between">

      {/* LEFT TEXT SECTION */}
      <div className="md:w-1/2 text-white space-y-4">
        <h2 className="text-4xl font-bold">Our Services</h2>

        <p className="max-w-sm text-lg leading-relaxed">
          "Our Service" can refer to a company's specific category of offerings,
          a physical pipe for utilities like water, or a line on a sports court.
        </p>
      </div>

      {/* =======================  
           RIGHT IMAGE + CIRCLES 
         ======================= */}
      <div className="relative md:w-1/2 flex justify-center">

        

       
     <div className="relative w-full h-[290px]">

  {/* MOVEABLE WHITE TRANSPARENT CIRCLE */}
  {/* <div className="absolute w-[550px] h-[550px] bg-white/20 rounded-full -top-[160px] left-[250px] z-10"></div> */}

{/* DOCTOR 2 – bottom image */}
  <img
  src="/bbg1.svg"
  className="relative z-10 w-[310px] md:w-[320px] drop-shadow-2xl -mt-10 float-right"
/>


  
</div>


        {/* ICON 1 */}
        {/* <div className="absolute top-20 right-32 bg-teal-600 p-4 rounded-xl shadow-lg z-30">
          <span className="text-2xl">🩺</span>
        </div>

        {/* ICON 2 */}
        {/* <div className="absolute top-40 left-20 bg-blue-900 p-4 rounded-xl shadow-lg z-30">
          <span className="text-2xl">📘</span>
        </div> */} 

      </div>
    </section>
  );
};

export default Service;
