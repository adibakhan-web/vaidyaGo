// src/App.js (Corrected)

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LoginPage from './components/Pages/LoginPage';
import SignupPage from './components/Pages/SignupPage';
import Dashboard from './components/Dashboard';
import Dashboard1 from './components/Dashboard1';
import OtpInput from './components/OtpInput';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Counter from './components/Counter';
import Restaurant from './components/Restaurant/Restaurant';
import Restaurant1 from './components/Restaurant/Restaurant1';
import Restaurant2 from './components/Restaurant/Restaurant2';
import Restaurant3 from './components/Restaurant/Restaurant3';


import Login from './components/Manager/Login';
import ForgetPassword from './components/Manager/ForgetPassword';
import GetOtp from './components/Manager/GetOtp';
import UpdatePassword from './components/Manager/UpdatePassword';
import Bootstrap from './components/Bootstrap/Bootstrap';


import Hero from './components/Hospital/Hero';
import Hero1 from './components/Hospital/Hero1';
import ContactUs from './components/Hospital/ContactUs';
import Section3 from './components/Hospital/Section3';

import Finallogin from './components/Login-hospital/Finallogin';
import Admin_signup from './components/Admin/admin-signup';
import AdminLoginPage from './components/Admin/AdminLoginPage';
import VerticalProgress1 from './components/Admin/VerticalProgress1';

import Profile from './components/Admin/Profile';


import Admin_dashboard1 from './components/Admin/Admin_dashboard1';
import AdminDoctor from './components/Admin/admin-doctor';
import DasyWilliam from './components/Admin/DasyWilliam';
import AdminSidebar from './components/Admin/AdminSidebar';
import ProtectedRoute from './components/Admin/ProtectedRoute';

import Signup1 from './components/Pages/Signup-hospital/Signup1';
import VerticalProgressBar from './components/Pages/Signup-hospital/VerticalProgressBar';
import Service from './components/OurServices/Service';
const App = () => {
  return (

    // <BrowserRouter> 
    <Routes>

      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/signupPage" element={<SignupPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    
      <Route path="/OtpInput" element={<OtpInput />} />
      
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/Topbar" element={<Topbar />} />
      <Route path="/Dashboard1" element={<Dashboard1 />} />
      <Route path="/Counter" element={<Counter />} />
      <Route path="/Restaurant" element={<Restaurant />} />
      <Route path="/Restaurant1" element={<Restaurant1 />} />
      <Route path="/Restaurant2" element={<Restaurant2 />} />

      <Route path="/Restaurant3" element={<Restaurant3 />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />
      <Route path="/GetOtp" element={<GetOtp />} />
      <Route path="/UpdatePassword" element={<UpdatePassword />} />
      <Route path="/Bootstrap" element={<Bootstrap />} />


      <Route path="/Hero" element={<Hero />} />
      <Route path="/Hero1" element={<Hero1 />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Section3" element={<Section3 />} />

      <Route path="/Finallogin" element={<Finallogin />} />
      <Route path="/Admin-signup" element={<Admin_signup />} />
      <Route path="/AdminLoginPage" element={<AdminLoginPage />} />

      <Route path="/Profile" element={<Profile/>} />
     
      <Route path="/Admin_dashboard1" element={<Admin_dashboard1 />} />
      <Route path="/DasyWilliam"element={<DasyWilliam />} />
      <Route path="/admin-doctor" element={<AdminDoctor />} />
      <Route path="/AdminSidebar" element={<AdminSidebar />} />
      <Route path="/ProtectedRoute" element={<ProtectedRoute />} />
      <Route path="/VerticalProgress1" element={<VerticalProgress1 />} />
      <Route path="/Signup1" element={<Signup1 />} />
      <Route path="/VerticalProgressBar" element={<VerticalProgressBar />} />

      <Route path="/Service" element={<Service />} />
    </Routes>


    /* </BrowserRouter> */
  );
};

export default App;