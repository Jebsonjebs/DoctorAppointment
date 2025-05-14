import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import { AdminAssets } from "../AdminAssets/assets";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar: hidden on mobile, visible on md+ */}
        <div className="hidden lg:block bg-white">
          <Sidebar />
        </div>
        {/* Mobile Sidebar: show as top bar or drawer if needed */}
        <div className="block lg:hidden">
          {/* Optionally, you can add a mobile sidebar toggle here */}
        </div>
        <div className="flex-1 p-2 sm:p-4">
          <form className="bg-white rounded-lg shadow p-2 sm:p-4 md:p-8 w-full max-w-4xl mx-auto">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">Add Doctor</h2>

            {/* Upload Image */}
            <div className="flex flex-col items-center mb-6">
              <label htmlFor="doc-img" className="cursor-pointer">
                <img
                  src={docImg ? URL.createObjectURL(docImg) : AdminAssets.upload_area}
                  alt="Upload"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border"
                />
              </label>
              <input
                type="file"
                id="doc-img"
                hidden
                onChange={(e) => setDocImg(e.target.files[0])}
              />
              <p className="text-xs sm:text-sm text-gray-600 mt-2">Upload Doctor Picture</p>
            </div>

            {/* Form Sections */}
            <div className="flex flex-col gap-6 md:flex-row">
              {/* Left Side */}
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium">Doctor Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Doctor Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Experience</label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={`${i + 1} Year`}>
                        {i + 1} Year
                      </option>
                    ))}
                    <option value="More than 10">More than 10 Years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium">Fees</label>
                  <input
                    type="number"
                    placeholder="Fees"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                    value={fees}
                    onChange={(e) => setFees(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium">Speciality</label>
                  <select
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                  >
                    <option value="General physician">General physician</option>
                    <option value="Gynecologist">Gynecologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Pediatricians">Pediatricians</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Gastroenterologist">Gastroenterologist</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium">Education</label>
                  <input
                    type="text"
                    placeholder="Degree"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Address Line 1</label>
                  <input
                    type="text"
                    placeholder="Address 1"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Address Line 2</label>
                  <input
                    type="text"
                    placeholder="Address 2"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* About Doctor */}
            <div className="mt-6">
              <label className="block text-sm font-medium">About Doctor</label>
              <textarea
                placeholder="Describe the doctor..."
                className="w-full border rounded px-3 py-2 mt-1 text-sm"
                rows={4}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300 text-sm sm:text-base"
              >
                Add Doctor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
