import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './AdminComponents/Dashboard'
import DoctorsList from './AdminComponents/DoctorsList'
import AddDoctor from './AdminComponents/AddDoctor'
import AllAppointments from './AdminComponents/AllAppointments'


const App = () => {

  

  const location = useLocation();
  const noMarginRoutes = [
  '/admin',
  '/admin/dashboard',
  '/admin/doctors',
  '/admin/add-doctor',
  '/admin/appointments',
];
  const hideLayoutPaths = ['/admin',
    '/admin/dashboard',
    '/admin/doctors',
    '/admin/add-doctor',
    '/admin/appointments'];
  const hideLayout = hideLayoutPaths.includes(location.pathname);
  const isNoMargin = noMarginRoutes.includes(location.pathname);

  return (
    <div className={isNoMargin ? '' : 'mx-4 sm:mx-[10%]'}>
        {!hideLayout && <Navbar />}
       
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/doctors' element={<Doctors />} />
         <Route path='/doctors/:speciality' element={<Doctors />} />
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/my-profile' element={<MyProfile />} />
         <Route path='/my-appointments' element={<MyAppointments />} />
         <Route path='/appointment/:docId' element={<Appointment />} />
         <Route path='/admin' element={<Admin />} />
         <Route path='/adminLogin' element={<AdminLogin />} />
         <Route path='/admin/dashboard' element={<Dashboard />} />
         <Route path='admin/doctors' element={<DoctorsList />} />
         <Route path='/admin/add-doctor' element={<AddDoctor />} />
         <Route path='/admin/appointments' element={<AllAppointments/>} />
       </Routes> 
       {!hideLayout && <Footer />}
      
    </div>
  )
}

export default App
