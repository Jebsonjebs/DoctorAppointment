import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] garp-14 my-10 mt-40 text-sm'>

        {/* Left  */}
        <div>
           <img className='mb-5 w-40' src={assets.LogoTransparent} alt="" />
           <p className='w-full md:w-2/3 text-gray-600 leading-6'>Patients can select departments, doctors, and available time slots to book appointments. Separate dashboards for patients and doctors to view, manage, or update appointments.View doctor profiles and receive confirmation or reminder alerts via email/SMS.</p>
        </div>

        {/* Center */}
        <div>
           <p className='text-xl font-medium mb-5'>COMPANY</p>
           <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
           </ul>
        </div>

        {/* Right */}
        <div>
           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
           <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 72627172</li>
            <li>JJ_Appointments@gmail.com</li>
           </ul>
        </div>
       </div>

       {/* Copyright */}
       <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@JJ_Appointments - All rights reserved</p>
       </div>
    </div>
  )
}

export default Footer
