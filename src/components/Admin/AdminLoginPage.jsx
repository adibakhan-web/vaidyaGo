import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();

  // 🔒 Fixed role for Admin
  const role = "Admin";
  const [username, setUsername] = useState("");
  const [identifier, setIdentifier] = useState(""); // phone / email
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // ================================
  //        HANDLE LOGIN
  // ================================
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!identifier || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(
        "https://tubajavedd.pythonanywhere.com/accounts/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: identifier, // phone or email
            password: password,
            role: role, // Admin
          }),
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", role);
        navigate("/admin-dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#A9CCDF] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl shadow-2xl pt-[70px] px-8 w-[500px] h-[510px] flex flex-col items-center relative"
      >
        {/* ICON */}
        <div className="absolute -top-14 bg-[#19718A] p-4 rounded-full text-white h-[110px] w-[110px] flex items-center justify-center">
          <FaUsersGear className="text-4xl" />
        </div>

        <form onSubmit={handleLogin} className="w-full space-y-4">

          {/* User Type (read-only) */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              User Type
            </label>
            <input
              type="text"
              value={role}
              readOnly
              className="w-full px-3 py-3 rounded-md outline-none bg-gray-100 text-gray-500 cursor-not-allowed"
              style={{ border: "2px solid #19718A" }}
            />
          </div>

          <div className="mt-2">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Username
            </label>
            <input
              type="text"
              value={username}
              readOnly
              className="w-full px-3 py-3 rounded-md outline-none bg-gray-100 text-gray-500 cursor-not-allowed"
              style={{ border: "2px solid #19718A" }}
            />
          </div>
          {/* Phone / Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Phone / Email
            </label>
            <input
              type="text"
              placeholder="Enter phone or email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-3 py-3 rounded-md outline-none"
              style={{ border: "2px solid #19718A" }}
            />
          </div>

          {/* Password */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <FaLock className="mr-2" />
              Password
            </label>
            <div
              className="flex items-center rounded-md px-3 py-3"
              style={{ border: "2px solid #19718A" }}
            >
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          {/* Login Button */}
          <motion.div whileHover={{ scale: 1.03 }}>
            <div className="flex justify-center mt-">
              <button
                type="submit"
                className="w-[140px] h-[42px] rounded-full bg-[#89C8D9] text-[#164863] text-lg font-semibold hover:bg-[#08374e] hover:text-white transition"
              >
                Login
              </button>
            </div>
          </motion.div>

        </form>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage;
