import React from 'react'
import { AdminAssets } from '../AdminAssets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div  className='min-h-screen  max-h-screen bg-white ' >
      <ul className='text-[#515151] mt-5  '>
        <NavLink className={({isActive}) =>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''}` } to={"/admin/dashboard"}>
            <img src={AdminAssets.home_icon} alt="" />
            <p>Dashboard</p>
        </NavLink >
        <NavLink className={({isActive}) =>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''}` } to={"/admin/appointments"}>
            <img src={AdminAssets.appointment_icon} alt="" />
            <p>Appoinments</p>
        </NavLink>
        <NavLink className={({isActive}) =>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''}` } to={"/admin/add-doctor"}>
            <img src={AdminAssets.add_icon} alt="" />
            <p>Add Doctor</p>
        </NavLink>
        <NavLink className={({isActive}) =>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''}` } to={"/admin/doctors"}>
            <img src={AdminAssets.people_icon} alt="" />
            <p>Doctors List</p>
        </NavLink>
      </ul>
    </div>
  )
}

export default Sidebar
