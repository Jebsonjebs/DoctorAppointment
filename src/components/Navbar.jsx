import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useClerk, useUser,UserButton } from '@clerk/clerk-react'

const ProfileIcon=()=>{
  return(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0"/>
   </svg>
  );
} 
const AppointmentIcon=()=>{
  return(
    <svg className="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
  </svg>
  );
} 
const DashboardIcon = () => {
  return (
    <svg  className="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  aria-hidden="true" >
      <path stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8v-10h-8v10Zm0-18v6h8V3h-8Z"/>  </svg>
  );
};
const AddIcon = () => (<svg className="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>);
const DoctorsListIcon = () => (<svg className="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 5h12M6 12h12M6 19h6" /></svg>);



const Navbar = () => {
    const {openSignIn}=useClerk();
    const {user}=useUser();
    const navigate=useNavigate();
    const logindetails=user?{
      email:user.primaryEmailAddress?.emailAddress
    }:null

    const [showMenu ,setShowMneu]=useState(false)
    const [token,setToken] =useState(true)
  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 curosr-pointer' src={assets.LogoTransparent} alt="" /> 
      <ul className='hidden md:flex items-center gap-5 font-medium'>
            <NavLink to='./'>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 m-auto bg-blue-400 hidden' />
            </NavLink>
            <NavLink  to='./doctors'>
            <li  className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 m-auto bg-blue-400 hidden' />
            </NavLink>
            <NavLink  to='./about'>
            <li  className='py-1 '>ABOUT</li>
            <hr className='border-none outline-none h-0.5 m-auto bg-blue-400 hidden' />
            </NavLink>
            <NavLink  to='./contact'>
            <li className='py-1' >CONTACT</li>
            <hr className='border-none outline-none h-0.5 m-auto bg-blue-400 hidden' />
            </NavLink>
            {logindetails && logindetails.email=="jebsonjebs143@gmail.com" &&
            <NavLink  to='./admin/dashboard'>
            <button  className=' px-3 py-2 text-gray-900 bg-gray-100 border border-black rounded-full '>Admin panel</button>
            </NavLink>}
        
      </ul>
      <div className='flex items-center gap 4'>
        { 
          <>
            {user ? (
              logindetails && logindetails.email != "jebsonjebs143@gmail.com" ? (
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Action label='My Profile' labelIcon={<ProfileIcon/>} onClick={()=>navigate('/my-profile')}></UserButton.Action>
                  </UserButton.MenuItems>
                  <UserButton.MenuItems>
                    <UserButton.Action label='My Appointments' labelIcon={<AppointmentIcon/>} onClick={()=>navigate('/my-appointments')}></UserButton.Action>
                  </UserButton.MenuItems>
                </UserButton>
              ) : (
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Action label='Dashboard' labelIcon={<DashboardIcon />} onClick={()=>navigate('/admin/dashboard')}></UserButton.Action>
                  </UserButton.MenuItems>
                  <UserButton.MenuItems>
                    <UserButton.Action label='AllAppointments' labelIcon={<AppointmentIcon/>} onClick={()=>navigate('/admin/appointments')}></UserButton.Action>
                  </UserButton.MenuItems>
                  <UserButton.MenuItems>
                    <UserButton.Action label='Add Doctors' labelIcon={<AddIcon/>} onClick={()=>navigate('/admin/add-doctor')}></UserButton.Action>
                  </UserButton.MenuItems>
                  <UserButton.MenuItems>
                    <UserButton.Action label='Doctors List' labelIcon={<DoctorsListIcon/>} onClick={()=>navigate('/admin/doctors')}></UserButton.Action>
                  </UserButton.MenuItems>
                  </UserButton>

              )
            ) : (
              <button onClick={openSignIn} className='bg-indigo-500 text-gray-200 px-8 py-3 rounded-full '>Login</button>
            )}
          </>
        }
        <img onClick={()=>setShowMneu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        {/* mob menu */}
        <div className={` ${showMenu ? 'fixed w-full' :'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
           <div className='flex items-center justify-between px-5 py-6'>
            <img  className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={()=>setShowMneu(false)} src={assets.cross_icon} alt="" />
           </div>
           <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink  onClick={()=>setShowMneu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
            <NavLink  onClick={()=>setShowMneu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>All DOCTORS</p></NavLink>
            <NavLink  onClick={()=>setShowMneu(false)} to='/about'><p className='px-4 py-2 roundedinline-block'>ABOUT</p></NavLink>
            <NavLink onClick={()=>setShowMneu(false)}to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
            {logindetails && logindetails.email=="jebsonjebs143@gmail.com" &&
              <NavLink onClick={()=>setShowMneu(false)} to='/admin/dashboard'>
                <button className='border border-white bg-gray-600 text-white rounded-full px-3 py-2'>ADMIN</button>
              </NavLink>
            }
           </ul>
        </div>

        </div>
        </div>
  )
}

export default Navbar
