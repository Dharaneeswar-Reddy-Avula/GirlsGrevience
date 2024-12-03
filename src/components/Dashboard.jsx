import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Student Dashboard</h2>
        <div className="flex justify-between items-center mb-6">
          <p>Welcome, <strong>[Student Name]</strong></p>
          <Link
            to="/complaint-form"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Raise a Complaint
          </Link>
        </div>
        <h3 className="text-xl font-semibold mb-4">Recent Complaints</h3>
        <ul className="space-y-3">
          <li className="p-4 border rounded-lg shadow">
            <span className="font-bold">Complaint ID:</span> 001, <span className="font-bold">Status:</span> Pending
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
