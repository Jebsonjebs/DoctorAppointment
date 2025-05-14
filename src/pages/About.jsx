import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-20">

      <div className="text-center text-3xl font-bold text-blue-900 mb-8 tracking-wide">
        <p>About Us</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 mb-14">
        <img
          className="w-full md:w-[340px] rounded-xl shadow-lg object-cover"
          src={assets.about_image}
          alt="About JJ_Appointments"
        />
        <div className="flex flex-col gap-5 md:w-2/3 text-base text-gray-700">
          <p>
            Welcome to <span className="font-semibold text-black">JJ_Appointments</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            <span className="font-semibold text-black">JJ_Appointments</span> is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, we're here to support you every step of the way.
          </p>
          <p className="text-blue-900 font-bold text-lg mt-2">Our Vision</p>
          <p>
            Our vision at <span className="font-semibold text-black">JJ_Appointments</span> is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-2xl font-semibold text-center text-blue-900 mb-6">
        <p>Why Choose Us</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center mb-20">
        <div className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-lg px-8 py-10 shadow hover:bg-blue-400 hover:text-white transition-all duration-300 cursor-pointer text-center">
          <b className="block mb-3 text-lg">Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-lg px-8 py-10 shadow hover:bg-blue-400 hover:text-white transition-all duration-300 cursor-pointer text-center">
          <b className="block mb-3 text-lg">Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-lg px-8 py-10 shadow hover:bg-blue-400 hover:text-white transition-all duration-300 cursor-pointer text-center">
          <b className="block mb-3 text-lg">Personalization</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
