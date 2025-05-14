import React, { useContext } from 'react'
import { AdminAssets } from '../AdminAssets/assets'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const AdminNavbar = () => {
    
   const navigate = useNavigate()
    return (
    <div className='flex justify-between items-center bg-white px-4 sm:px-10 py-3 border-b '>
      <div className='flex items-center gap-2 text-xs'>
      <img className='w-36 sm:w-40 cursor-pointer' src={assets.LogoTransparent} alt="" />
      <button
        onClick={() => navigate('/admin/dashboard')}
        className='border px-5 py-2 rounded-full border-gray-500 text-gray-700 bg-gray-100 hover:bg-gray-200 text-base font-semibold shadow transition-all duration-200'
      >
        Admin
      </button>
      </div>
      <button onClick={() => navigate('/')} className='bg-blue-500 text-white text-sm px-10 py-2 rounded-full'>Close</button>
    </div>
    )
}

export default AdminNavbar
