import React from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const allowedEmail = "admin@gmail.com";
        const allowedPassword = "admin123";
    
    
        if (email === allowedEmail && password === allowedPassword) {
           navigate('/admin/dashboard')
           Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome, Admin!',
            showConfirmButton: false,
            timer: 2000
          });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Access Denied',
                text: 'Admin Mail or Password doest match .',
              });
              
        }
    };

    return (
        <div className="flex justify-center items-center"
        
        >
            <div className=' bg-gray-100'
        style={{padding:'10%'}}
             
            >
            <form onSubmit={handleLogin} className="flex flex-col w-72 ">
                <h2 className="text-center text-2xl font-bold mb-4">Admin Login</h2>
                <label htmlFor="email" className="mb-1 text-sm font-medium">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mb-3 p-2 border border-gray-300 rounded"
                />
                <label htmlFor="password" className="mb-1 text-sm font-medium">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="mb-3 p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
            </div>
        </div>
    );
};

export default AdminLogin
