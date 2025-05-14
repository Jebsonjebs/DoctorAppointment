import React, { useContext } from 'react'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'  

const DoctorsList = () => {
  const navigate=useNavigate()
  const {doctors}=useContext(AppContext)
  return (
    <div>
      <AdminNavbar />
      <div className="flex items-start bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Doctors List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-28 h-28 rounded-full mb-4 border-2 border-blue-500"
                />
                <h3 className="text-xl font-semibold text-gray-700">{doctor.name}</h3>
                <p className="text-gray-500 text-sm">Specialization :{doctor.speciality}</p>
                <p className="text-gray-500 text-sm">Degree: {doctor.degree}</p>
                <p className="text-gray-500 text-sm">Experience: {doctor.experience} years</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsList
