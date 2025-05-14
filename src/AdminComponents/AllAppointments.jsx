import React from "react";
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar' 

const AllAppointments = () => {
  return (
    <div className="min-h-screen ">
      <AdminNavbar />
      <div className="flex flex-col md:flex-row items-start bg-gray-100">
        {/* Sidebar: show only on md and up */}
        <div className="hidden md:block bg-white">
          <Sidebar />
        </div>
        <main className="flex-1 bg-white shadow-md rounded-lg m-4 md:m-8 p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6 border-b pb-2">All Appointments</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm text-sm md:text-base">
              <thead>
                <tr className="bg-blue-100 text-gray-700">
                  <th className="border border-gray-300 px-2 md:px-6 py-2 md:py-3 text-left">Patient</th>
                  <th className="border border-gray-300 px-2 md:px-6 py-2 md:py-3 text-left">Age</th>
                  <th className="border border-gray-300 px-2 md:px-6 py-2 md:py-3 text-left">Date &amp; Time</th>
                  <th className="border border-gray-300 px-2 md:px-6 py-2 md:py-3 text-left">Doctor</th>
                  <th className="border border-gray-300 px-2 md:px-6 py-2 md:py-3 text-left">Fees</th>
                  <th className="border border-gray-300 px-2 md:px-6 py-2 md:py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-50 transition">
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">John Doe</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">30</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">2023-10-01 10:00 AM</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">Dr. Smith</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">$100</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">
                    <span className="inline-block px-2 md:px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium text-xs md:text-sm">Completed</span>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">Jane Doe</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">25</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">2023-10-02 2:00 PM</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">Dr. Brown</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">$150</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">
                    <span className="inline-block px-2 md:px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium text-xs md:text-sm">Pending</span>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">Alice Smith</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">40</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">2023-10-03 11:00 AM</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">Dr. Taylor</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">$200</td>
                  <td className="border border-gray-300 px-2 md:px-6 py-2 md:py-4">
                    <span className="inline-block px-2 md:px-3 py-1 rounded-full bg-red-100 text-red-700 font-medium text-xs md:text-sm">Cancelled</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllAppointments;
