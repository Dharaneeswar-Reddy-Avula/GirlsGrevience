import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Student Dashboard</h2>
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
          <p>Welcome, <strong>[Student Name]</strong></p>
          <Link
            to="/complaint-form"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-[20px]"
          >
            Raise a Complaint
          </Link>
        </div>
        <h3 className="text-xl font-semibold mb-4">Recent Complaints</h3>
        <ul className="space-y-3">
          <li className="p-4 border rounded-lg shadow flex flex-col md:flex-row gap-[20px]">
            <span className="font-bold">Complaint ID: <span className='font-thin'>001</span> </span>
            <span className="font-bold">Status:<span className='font-thin'>Pending</span></span>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="bg-black text-white px-3 sm:px-4 py-2 mt-[15px] rounded-lg hover:bg-blue-700 transition w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
