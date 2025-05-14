import React from 'react';
import AdminNavbar from './AdminNavbar';
import Sidebar from './Sidebar';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement, // Required for Pie chart
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const lineData = {
    labels: [
      'Jan', 'Feb', 'March', 'April', 'May', 'June',
      'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Total Appointments',
        data: [10, 20, 15, 30, 25, 40, 35, 50, 45, 60, 55, 70],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Total Appointments (Month-wise)' },
    },
  };

  const pieData = {
    labels: ['Pending Approvals', 'Completed Appointments', 'Cancelled Appointments'],
    datasets: [
      {
        data: [15, 85, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 40,
      },
      
    ],
    
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
  };

  return (
    <div>
      <AdminNavbar />
      <div className='flex items-start bg-blue-50'>
        <Sidebar />
        <div className='bg-gray-100 flex-1'>
          <div className='p-6'>
            <h1 className='text-2xl font-bold mb-4'>Admin Dashboard</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='bg-white shadow-md rounded-lg p-4'>
                <h2 className='text-lg font-semibold'>Total Appointments</h2>
                <p className='text-2xl font-bold'>120</p>
              </div>
              <div className='bg-white shadow-md rounded-lg p-4'>
                <h2 className='text-lg font-semibold'>Pending Approvals</h2>
                <p className='text-2xl font-bold'>15</p>
              </div>
              <div className='bg-white shadow-md rounded-lg p-4'>
                <h2 className='text-lg font-semibold'>Completed Appointments</h2>
                <p className='text-2xl font-bold'>85</p>
              </div>
              <div className='bg-white shadow-md rounded-lg p-4'>
                <h2 className='text-lg font-semibold'>Cancelled Appointments</h2>
                <p className='text-2xl font-bold'>20</p>
              </div>
            </div>

            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
  <div className='bg-white shadow-md rounded-lg p-4'>
    <h2 className='text-lg font-semibold mb-4'>Monthly Appointments</h2>
    <div className='w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]'>
      <Line data={lineData} options={{ ...lineOptions, maintainAspectRatio: false }} />
    </div>
  </div>

  <div className='bg-white shadow-md rounded-lg p-4  text-center'>
    <h2 className=' text-lg font-semibold mb-4 text-center 	'>Appointments Overview</h2>
    <div className='h-96 pl-15 '>
      <Pie data={pieData} options={pieOptions} />
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
