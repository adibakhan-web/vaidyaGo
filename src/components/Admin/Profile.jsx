import { useState } from "react";

const MenuItem = ({ text, img }) => (
  <div className="group flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer text-sm font-medium text-gray-600 hover:bg-[#1b6d8a] hover:text-white transition-all duration-200">
    <img
      src={img}
      className="w-4 h-4 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
      alt=""
    />
    <span>{text}</span>
  </div>
);

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "Tuba Javed",
    email: "javedtuba@gmail.com",
    phone: "1234567890",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen bg-[#f5f8fb]">
      
      {/* LEFT ICON BAR */}
      <div className="w-14 bg-white flex flex-col items-center shadow-lg border-r py-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100">
          <img src="/me.png" className="w-5 h-5" alt="" />
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <img src="/d.png" className="w-6 h-6 cursor-pointer" alt="" />
          <img src="/i.png" className="w-6 h-6 cursor-pointer" alt="" />
          <img src="/app.png" className="w-6 h-6 cursor-pointer" alt="" />
        </div>
      </div>

      {/* MAIN SIDEBAR */}
      <div className="w-64 bg-[#eef5f9] border-r p-6">
        <img src="/v.png" className="h-12 mb-6" alt="" />

        <p className="text-sm text-gray-500 mb-3">Personal Account</p>

        <nav className="flex flex-col gap-2">
          <MenuItem text="Your Profile" img="/images/profile.png" />
          <MenuItem text="Login" img="/right.png" />
          <MenuItem text="Accessibility" img="/ad.png" />
          <MenuItem text="Privacy Policy" img="/lo.png" />
        </nav>
      </div>

      {/* RIGHT PROFILE CONTENT */}
      <div className="flex-1 bg-white px-20 py-16">

        {/* HEADER */}
        {/* HEADER */}
<div className="relative flex items-center justify-center mb-24">

  <div className="absolute left-[-60px] bottom-[50px] flex items-center gap-2">

    {/* Edit (Pen) Button */}
    <div className="absolute left-0 flex items-center gap-3">

  {/* Edit Button */}
  {!isEditing && (
    <button
      onClick={() => setIsEditing(true)}
      className="bg-white border rounded-xl p-2 shadow hover:scale-105 transition"
    >
      <img src="/pen.png" className="w-6 h-5" alt="" />
    </button>
  )}

  {/* Update Button */}
  {isEditing && (
    <button
      onClick={handleUpdate}
      className="bg-green-100 border rounded-xl p-2 shadow hover:scale-105 transition"
    >
      <img src="/update.png" className="w-6 h-5" alt="" />
    </button>
  )}

</div>

  </div>

  <h2 className="text-3xl font-semibold">Your Profile</h2>
</div>


        {/* Profile Photo */}
        <div className="flex justify-between items-start pb-6 border-b border-dashed border-gray-300">
          <div>
            <p className="text-sm font-semibold mb-3">Profile Photo</p>
            <img
              src="/ph.png"
              alt="profile"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>

          <div className="flex gap-4 mt-6">
            <button className="text-sm font-medium">
              Remove Photo
            </button>
            <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100 transition">
              Change Photo
            </button>
          </div>
        </div>

        {/* Name */}
        <div className="py-5 border-b border-dashed border-gray-300">
          <p className="text-sm font-semibold">Name</p>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 px-3 py-2 border rounded-md text-sm w-full"
            />
          ) : (
            <p className="text-sm text-[#19718A] mt-2">
              {formData.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="py-5 border-b border-dashed border-gray-300">
          <p className="text-sm font-semibold">Email address</p>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 px-3 py-2 border rounded-md text-sm w-full"
            />
          ) : (
            <p className="text-sm text-[#19718A] mt-2">
              {formData.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="py-5 border-b border-dashed border-gray-300">
          <p className="text-sm font-semibold">Phone Number</p>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 px-3 py-2 border rounded-md text-sm w-full"
            />
          ) : (
            <p className="text-sm text-[#19718A] mt-2">
              {formData.phone}
            </p>
          )}
        </div>

        {/* Address */}
        <div className="py-5 border-b border-dashed border-gray-300">
          <p className="text-sm font-semibold mb-3">Address</p>
          <div className="flex gap-4">
            <select className="px-3 py-2 text-sm border rounded-md w-40">
              <option>Country</option>
              <option>India</option>
              <option>USA</option>
            </select>

            <select className="px-3 py-2 text-sm border rounded-md w-40">
              <option>City</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>

            <input
              type="text"
              placeholder="Pincode"
              className="px-3 py-2 text-sm border rounded-md w-32"
            />
          </div>
        </div>

        {/* Post */}
        <div className="py-5 border-b border-dashed border-gray-300">
          <p className="text-sm font-semibold mb-2">Post</p>
          <select className="border rounded-md px-3 py-2 text-sm text-[#19718A]">
            <option>Admin</option>
          </select>
        </div>

        {/* Language */}
        <div className="py-5 border-b border-dashed border-gray-300">
          <p className="text-sm font-semibold mb-2">Language</p>
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>English (US)</option>
          </select>
        </div>

        {/* Connected Social Media */}
        <div className="pt-6">
          <p className="text-sm font-semibold">
            Connected Social Media
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Services that you use to log in to your Account
          </p>

          <div className="flex justify-between items-center border border-gray-300 rounded-lg px-4 py-3">
            <div className="flex items-center gap-3">
              <img src="/google.png" className="w-8 h-8" alt="" />
              <div>
                <p className="text-sm font-medium">Google</p>
                <p className="text-xs text-[#19718A]">
                  {formData.name}
                </p>
              </div>
            </div>

            <button className="px-4 py-1 text-sm border rounded-md hover:bg-gray-100 transition">
              Disconnect
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
