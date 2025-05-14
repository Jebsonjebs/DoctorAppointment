import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-200 via-blue-100 to-white shadow-xl rounded-2xl p-8 md:p-16 gap-8">
      {/* Left */}
      <div className="md:w-1/2 flex flex-col justify-center gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 drop-shadow-lg">
          Find Your <span className="text-blue-500">Perfect Doctor</span>
        </h1>
        <div className="flex items-center gap-4 mb-2">
          <img src={assets.group_profiles} alt="" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
          <p className="text-blue-900 text-lg font-medium">
            Browse our network of trusted professionals and book your appointment in seconds.
          </p>
        </div>
        <a
          href="#speciality"
          className="inline-flex items-center gap-3 bg-blue-400 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-lg shadow transition-transform duration-200 hover:scale-105 w-max"
        >
          Book Now
          <img className="w-4" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* Right */}
      <div className="md:w-1/2 flex justify-center">
        <img
          className="w-80 h-80 object-cover rounded-xl shadow-2xl border-4 border-white"
          src={assets.Banner1}
          alt=""
        />
      </div>
    </div>
  )
}

export default Header
