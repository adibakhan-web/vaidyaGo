// src/components/Dashboard.jsx (Final & Corrected based on all feedback)
import React from 'react';
// import ladyImage from '../assets/lady.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChartBar,
  faUsers,
  faMoneyBillAlt,
  faBox,
  faCommentDots,
  faUtensils, // For Sidebar 'Menu' header and 'Menu' item icon
  faBook,
  faCog,
  faDollarSign,
  faWalking,
  faBookOpen,
  faUser,
  faTrashAlt, // Delete icon
  faArrowUp, // Arrow Up icon
  faArrowDown, // Arrow Down icon
  faSearch, // For search bar
  faBell, // For notification
} from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

// --- Sidebar Menu Item Component ---
const MenuItem = ({ icon, text, isSelected }) => {
  return (
    // Outer div for padding and hover effect on the entire row
    <div
      // Conditional classes based on isSelected prop
      className={`flex items-center py-2 px-5 cursor-pointer transition-all duration-300 group text-black-800
        ${isSelected ? ' rounded-full' : 'text-black-600  hover:rounded-full'}
      `}
    >
      {/* Inner div for the icon and its background circle on hover/selection */}
      <div className={`
        flex items-center justify-center w-8 h-8 mr-3
        ${isSelected ? ' text-black rounded-full shadow-md' : 'text-black-600 group-hover:bg-orange-500 group-hover:text-white group-hover:rounded-full'}
        transition-all duration-300
      `}>
        <FontAwesomeIcon icon={icon} className="w-5 h-5" />
      </div>
      <span className={`font-semibold`}>{text}</span> {/* Text color already handled by parent div */}
    </div>
  );
};

// --- Stat Card Component for Total Revenue ---
const StatCard = ({ title, value, icon,bgColor, textColor, imageSrc }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${bgColor} ${textColor} flex items-center justify-between`}>
      <div>
        <div className="text-sm font-medium opacity-80">{title}</div>
        <div className="text-3xl font-bold mt-1">{value}</div>
      </div>
      {imageSrc ? (
        <img src={imageSrc} alt={title} className="w-12 h-12" />
      ) : (
        <FontAwesomeIcon icon={icon} className="text-4xl opacity-50" />
      )}
    </div>
  );
};

// --- Data for Income/Expense Chart ---
const incomeExpenseData = [
  { name: 'Monday', income: 300, expense: 200 },
  { name: 'Tuesday', income: 450, expense: 300 },
  { name: 'Wednesday', income: 550, expense: 450 },
  { name: 'Thursday', income: 380, expense: 250 },
  { name: 'Friday', income: 480, expense: 350 },
  { name: 'Saturday', income: 580, expense: 400 },
  { name: 'Sunday', income: 600, expense: 480 },
];

// --- Order Card Component for Mostly Orders ---
const OrderCard = ({ title, image, rating, likes }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-3 object-cover object-contain" />
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      <div className="text-yellow-500 my-2">
        {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
      </div>
      <button className="mt-3 bg-orange-500 text-white py-2 px-4 rounded-md text-sm hover:bg-orange-600 transition duration-300">
        {likes}
      </button>
    </div>
  );
};

// --- Data for Payment Table ---
const paymentsData = [
  { id: 1, type: 'Monthly Payment', manager: 'Manager', status: 'Successful', date: '02 July 25', amount: '$10,000', detail: 'Salary' },
  { id: 2, type: 'Monthly Payment', manager: 'Receptionist', status: 'Successful', date: '02 July 25', amount: '$5,000', detail: 'Salary' },
  { id: 3, type: 'Monthly Payment', manager: 'Cook', status: 'Successful', date: '02 July 25', amount: '$5,000', detail: 'Salary' },
  { id: 4, type: 'Monthly Payment', manager: 'Cook', status: 'Successful', date: '02 July 25', amount: '$5,000', detail: 'Salary' },
  { id: 5, type: 'Monthly Payment', manager: 'Cook', status: 'Successful', date: '02 July 25', amount: '$5,000', detail: 'Salary' },
];

// --- Rating Bar Component for Rating Section ---
const RatingBar = ({ stars, count, totalRatings }) => {
  const percentage = (count / totalRatings) * 100;
  return (
    <div className="flex items-center mb-2">
      <div className="w-12 text-gray-600 text-right mr-3">{stars} star</div>
      <div className="flex-1 bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-orange-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="w-12 text-gray-600 text-left ml-3 text-sm">{count}</div>
    </div>
  );
};

// --- Main Dashboard Component ---
function Dashboard() {
  const totalRatingsForRatingSection = 1000;
  const ratingsSectionData = [
    { stars: 5, count: 500 },
    { stars: 4, count: 200 },
    { stars: 3, count: 150 },
    { stars: 2, count: 100 },
    { stars: 1, count: 50 },
  ];

  return (
    <div className="flex h-screen bg-white"> {/* Overall container, if sidebar has rounded corners, this needs to be bg-white */}
      {/* Sidebar Section - Background FFEAD2 */}
      <div className="w-20  shadow-lg py-30 px-4 flex flex-col justify-between h-[750px]"
    
      style={{
         backgroundImage: `url('/bar1.svg')`,    // Make sure this path is correct
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', // or 'contain' depending on your design
      backgroundPosition: 'bottom', // or 'center' or 'top' as per design
      }}> 
        <div>
          {/* Top 'Menu' header with icon */}
          <div className="text-2xl font-bold text-gray-800 mb-9 flex items-center px-1"
          
          >
            
          </div>
          <nav className="space-y-1">
           <MenuItem icon="/menu.svg" />
           <div className="flex items-center space-x-3">
            <img src="/des.svg" alt="Dashboard Icon" className="w-8 h-8" />
           </div>
            <MenuItem icon="/Frame.svg" text="" />
            <MenuItem icon="/frame1.svg" text="" />
            <MenuItem icon="/pay.svg" text="" />
            <MenuItem icon="/frame2.svg" text="" />
            <MenuItem icon="/feed.svg" text="" />
           <MenuItem icon="/book.svg" text="" />
           <MenuItem icon="/frame3.svg" text="" />
           <MenuItem icon="/Vector1.svg" text="" />



          </nav>
        </div>
        {/* 'Menu Section' header with 'Menu' and 'Booking' items */}
       
      </div>




     <div className="flex-1 p-1 overflow-y-auto bg-white"> {/* Main content background white */}
             {/* Search and User Profile (Top Bar) - White Background */}
             <div className="flex justify-between items-center mb-8 px-4 py-3 rounded-lg bg-white shadow-md">
               <div className="relative">
                 <input
                   type="text"
                   placeholder="Search"
                   className="pl-10 pr-[500px] py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-gray-50"
                 />
                 <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                 
               </div>
               <div className="flex items-center space-x-2 ">
                 <button className="p-2 rounded-full hover:bg-gray-100">
                   <FontAwesomeIcon icon={faBell} className="w-6 h-6 text-gray-500" />
                 </button>
                 <button className="p-2 rounded-full hover:bg-gray-100">
                   <FontAwesomeIcon icon={faCog} className="w-6 h-6 text-gray-600" />
                 </button>
                 <img
                   src="man.svg"
                   alt="User Avatar"
                   className="w-10 h-10 rounded-full"
                 />
               </div>
             </div>
     
             {/* Hello Admin Section - White Background */}
     <div className="flex items-stretch justify-between bg-white rounded-xl shadow-md p-6  h-[200px] w-[2000px] max-w-none mx-auto bg-gradient-to-br from-[#FFEAD2] to-[#FFFFFF] lg:h-[250px] lg:w-full border border-gray-300 mb-6 mt-[-10px]">
       {/* Left Content */}
       <div className="flex flex-col p-100 ">
         <div>
           <h1 className="text-3xl font-bold text-gray-800">Hello Admin</h1>
           <p className="text-gray-500 text-lg mt-1">Welcome</p>
         </div>
         <p className="text-sm text-gray-400 mt-12">"Great service starts with great systems."</p>
       </div>
     
       {/* Right Image */}
       <div className="h-full w-98   rounded-lg overflow-hidden">
         <img
           src="/cake.svg" // 👈 Your image path here
           alt="Breakfast"
           className="w-full h-full object-cover"
         />
       </div>
     </div>
             {/* Total Revenue Section - White Background */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 mt-[-9px] ">
       {/* Card 1 */}
       <div className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md bg-white text-gray-800 border-2 border-[#FFEAD2] h-[150px] w-[280px] "
       style={{
         boxShadow: "0 4px 5px rgba(0, 0, 0, 0.1), 0 4px 6px #FFEAD2"
       }}
       >
         <img src="/Lady.svg" alt="Total Revenue" className="w-12 h-12 mb-4" />
         <h3 className="text-lg font-semibold">Total Revenue</h3>
         <p className="text-2xl font-bold">$978.56</p>
       </div>
     
       {/* Card 2 */}
       <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-white text-black-800 border-2  border-[#FFEAD2] h-[150px] w-[280px]"
       style={{
         boxShadow: "0 4px 5px rgba(0, 0, 0, 0.1), 0 4px 6px #FFEAD2"
       }}
       >
         <img src="/walk.svg" alt="Walk-in Customers" className="w-12 h-12 mb-4" />
         <h3 className="text-lg font-semibold">Walk-in Customers</h3>
         <p className="text-2xl font-bold">368</p>
       </div>
     
       {/* Card 3 */}
       <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-white text-gray-800 border-2  border-[#FFEAD2] h-[150px] w-[280px] shadow-lg "
       style={{
         boxShadow: "0 4px 5px rgba(0, 0, 0, 0.1), 0 4px 6px #FFEAD2"
       }}
       >
         <img src="/b.svg" alt="Menu Today" className="w-12 h-12 mb-4" />
         <h3 className="text-lg font-semibold">Menu Today</h3>
         <p className="text-2xl font-bold">100</p>
       </div>
     
       {/* Card 4 */}
       <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-white text-gray-800 border-2  border-[#FFEAD2] h-[150px] w-[280px] "
       style={{
         boxShadow: "0 4px 5px rgba(0, 0, 0, 0.1), 0 4px 6px #FFEAD2"
       }}
       >
         <img src="/person.svg" alt="Visitor" className="w-12 h-12 mb-4" />
         <h3 className="text-lg font-semibold">Visitor</h3>
         <p className="text-2xl font-bold">100</p>
       </div>
     </div>
     
             {/* Income and Expense Chart - White Background */}
             <div className="bg-white p-6 rounded-2xl shadow-md mb-6 border border-[#FFEAD2] mt-[-19px]">
       <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
         <img src="coin.svg" alt="icon" className="w-10 h-8 " />
      
         Income and Expense
       </h2>
       
       <ResponsiveContainer width="100%" height={320}>
         <BarChart
           data={incomeExpenseData}
           margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
           barSize={22}
         >
           {/* X-Axis */}
           <XAxis 
             dataKey="name" 
             axisLine={false} 
             tickLine={false} 
             tick={{ fontSize: 14, fill: "#000" }} 
           />
     
           {/* Y-Axis */}
           <YAxis
             axisLine={false}
             tickLine={false}
             tickFormatter={(value) => `${value}k`}
             domain={[0, 600]}
             ticks={[0, 100, 200, 300, 400, 500, 600]}
             tick={{ fontSize: 14, fill: "#000" }}
           />
     
           {/* Grid Lines */}
           <CartesianGrid 
             strokeDasharray="0 0" 
             vertical={false} 
             stroke="rgba(147,137,137,0.29)" 
             strokeWidth={1} 
           />
     
           <Tooltip />
           <Legend />
     
           {/* Gradient Definitions */}
           <defs>
             {/* Income Gradient (Orange → Yellow) */}
             <linearGradient id="colorIncome" x1="0" y1="1" x2="0" y2="0">
               <stop offset="0%" stopColor="#E86B18" stopOpacity={1}/>
               <stop offset="100%" stopColor="#FFBF78" stopOpacity={1}/>
             </linearGradient>
     
             {/* Expense Gradient (Cream → Red) */}
             <linearGradient id="colorExpense" x1="0" y1="1" x2="0" y2="0">
               <stop offset="0%" stopColor="#FFEAD2" stopOpacity={1}/>
               <stop offset="100%" stopColor="#FE0808" stopOpacity={1}/>
             </linearGradient>
           </defs>
     
           {/* Bars */}
           <Bar dataKey="income" fill="url(#colorIncome)" radius={[6, 6, 0, 0]} />
           <Bar dataKey="expense" fill="url(#colorExpense)" radius={[6, 6, 0, 0]} />
         </BarChart>
       </ResponsiveContainer>
     </div>
     
             {/* Mostly Orders - White Background */}
             <div className="mb-8 border border-gray-300 rounded mt-[-10px]">
               <h2 className="text-xl font-semibold text-gray-800 mb-4">Mostly Orders</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
                 <OrderCard title="Pizza" image="pizza.svg" rating={4.5} likes="12K Like it" />
                 <OrderCard title="Sandwich" image="sand.svg" rating={4.0} likes="12K Like it" />
                 <OrderCard title="Dessert" image="cake1.svg" rating={5.0} likes="12K Like it" />
                 <OrderCard title="Shake" image="shake.svg" rating={4.5} likes="12K Like it" />
                 <OrderCard title="Anda Curry" image="food.svg" rating={4.0} likes="12K Like it" />
               </div>
             </div>
     
             {/* Payment Table - White Background */}
             <div className="bg-white p-4 rounded-lg shadow-md mb-8 border border-gray-300 mt-[-19px]">
               <h2 className="text-xl font-semibold text-gray-800 mb-[-15px]">Payment</h2>
               <div className="overflow-x-auto">
                 <table className="min-w-full ">
                   <thead className="">
                     <tr>
                       <th scope="col" className="px-6 py-3  text-sm font-medium text-[#7C4318]  tracking-wider">Payment Type</th>
                       <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#7C4318]  tracking-wider">Manager</th>
                       <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#7C4318]  tracking-wider">Status</th>
                       <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#7C4318]  tracking-wider">Date</th>
                       <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#7C4318]  tracking-wider">Amount</th>
                       <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#7C4318]  tracking-wider">Payment Detail</th>
                       <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#7C4318]  tracking-wider">Action</th>
                     </tr>
                   </thead>
                   <tbody className="bg-white ">
                     {paymentsData.map((payment) => (
                       <tr key={payment.id}>
                         <td className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.id} {payment.type}</td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.manager}</td>
                         <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full  text-[#3FC430]">
                             {payment.status}
                           </span>
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.date}</td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{payment.amount}</td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.detail}</td>
                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                           {/* Arrows and Delete Icon as per design*/}
                           <div className="flex items-center space-x-2 "> {/* Added space-x-2 for icons spacing */}
                             <img
                              src="/del.svg" 
                                 alt="Arrow Icon" 
                                 className="text-red-500 text-base w-5 h-5" 
                             />
                             
                             <img 
                                 src="/arrow.svg" 
                                 alt="Arrow Icon" 
                                 className="text-green-500 text-base w-4 h-4" 
                             />
                           </div>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             </div>
     
             {/* Rating Section - White Background */}
             <div className="bg-white p-7 rounded-lg  border border-gray-300 shadow-md mt-[-19px]">
               <div className="flex items-start mb-3">
                 <div className="text-[80px] font-bold text-gray-800 mr-2">4.9</div>
                 <div className="text-yellow-500 text-[90px]">
                   {'★'.repeat(1)}
                   
                 </div>
                 <div className='rating-info'
                   style={{
                     marginTop: '70px', fontWeight: 'bold' , color: '#000' ,  marginLeft: '10px'
                   }}>
                 <h1 >Based on 1000 Rating</h1>
                 </div>
               </div>
               <p className="text-gray-500 text-sm mb-4 mt-[-29px]">  <span className="ml-2"> Rating Since 11 June 2023</span></p>
     
               {ratingsSectionData.map((data) => (
       <div key={data.stars} className="flex items-center  mb-2">
         {/* Left side text */}
         <span className="w-16  text-gray-700 flex flex-col items-end">{data.stars} star</span>
         
         {/* Right side progress bar */}
         <div className="flex-1  mx-4 bg-gray-200 rounded h-4 relative">
           <div
             className="bg-red-600 h-4 rounded "
             style={{ width: `${(data.count / totalRatingsForRatingSection) * 100}%` }}
           />
         </div>
     
         {/* Right side count */}
         <span className="w-19 text-right text-gray-700">{data.count}</span>
       </div>
     ))}
     
               <p className="mt-4 text-gray-500 text-sm">Top Restaurant 5.0 star</p>
             </div>
           </div>
         </div>
  );
}

export default Dashboard;