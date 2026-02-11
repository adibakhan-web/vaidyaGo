// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-auto">
        <Topbar />

        {/* Hello Admin Section */}
        <div className="text-2xl font-semibold text-gray-700 mb-4">Hello Admin 👋</div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white shadow rounded-xl p-4">📦 Orders</div>
          <div className="bg-white shadow rounded-xl p-4">💰 Revenue</div>
          <div className="bg-white shadow rounded-xl p-4">👥 Customers</div>
          <div className="bg-white shadow rounded-xl p-4">📈 Growth</div>
        </div>

        {/* Income Chart */}
        <div className="bg-white shadow rounded-xl p-6 mb-6">
          <div className="text-lg font-semibold text-gray-700 mb-2">Income</div>
          <div className="h-40 bg-gradient-to-r from-orange-200 to-orange-100 rounded-xl"></div>
        </div>

        {/* Mostly Ordered Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="bg-white shadow rounded-xl p-4">
            <div className="text-lg font-semibold text-gray-700 mb-2">Mostly Ordered</div>
            <div className="h-24 bg-orange-50 rounded-xl"></div>
          </div>

          {/* Payments Section */}
          <div className="bg-white shadow rounded-xl p-4">
            <div className="text-lg font-semibold text-gray-700 mb-2">Payments</div>
            <div className="h-24 bg-orange-50 rounded-xl"></div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="bg-white shadow rounded-xl p-4">
          <div className="text-lg font-semibold text-gray-700 mb-2">Rating</div>
          <div className="h-24 bg-orange-50 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
