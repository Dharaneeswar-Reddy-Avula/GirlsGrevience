import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const sendEscalationEmail = (complaint) => {
  console.log('Attempting to send email for complaint:', complaint);
  
  emailjs
    .send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
      {
        complaint_id: complaint.id,
        category: complaint.category,
        description: complaint.description,
        recipient_email: 'avuladharaniswarreddy@gmail.com',
        date: complaint.date,
      },
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
    )
    .then(
      (response) => {
        console.log('Email sent successfully:', response.status, response.text);
      },
      (error) => {
        console.error('Failed to send email:', error);
      }
    );
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([
    {
      id: '001',
      category: 'Sexual Harassment',
      description: 'Reported harassment near the library.',
      status: 'Pending',
      raisedBy: 'Anonymous',
      date: '2023-11-26',
      escalated: false,
    },
    {
      id: '002',
      category: 'Personal',
      description: 'Request for mental health support.',
      status: 'Escalated',
      raisedBy: 'Confidential',
      date: '2023-11-20',
      escalated: true,
    },
    {
      id: '003',
      category: 'General',
      description: 'Issue with cafeteria cleanliness.',
      status: 'Resolved',
      raisedBy: 'Victim',
      date: '2023-12-01',
      escalated: false,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Checking complaints for escalation...');
      const currentDate = new Date();
      const updatedComplaints = complaints.map((complaint) => {
        const complaintDate = new Date(complaint.date);
        const differenceInDays = Math.floor(
          (currentDate - complaintDate) / (1000 * 60 * 60 * 24)
        );

        if (differenceInDays >= 7 && complaint.status === 'Pending' && !complaint.escalated) {
          console.log('Escalating complaint:', complaint);
          sendEscalationEmail(complaint);
          return { ...complaint, status: 'Escalated', escalated: true };
        }
        return complaint;
      });
      setComplaints(updatedComplaints);
    }, 60000); // Check every 60 seconds

    return () => clearInterval(interval);
  }, [complaints]);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4  sm:p-6 relative">
      
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-600">
          Admin Dashboard - Girls' Grievance System
        </h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-yellow-500 text-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Pending Complaints</h3>
            <p className="text-2xl">{complaints.filter((c) => c.status === 'Pending').length}</p>
          </div>
          <div className="p-4 bg-green-500 text-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Resolved Complaints</h3>
            <p className="text-2xl">{complaints.filter((c) => c.status === 'Resolved').length}</p>
          </div>
          <div className="p-4 bg-red-500 text-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Escalated Complaints</h3>
            <p className="text-2xl">{complaints.filter((c) => c.status === 'Escalated').length}</p>
          </div>
        </div>

        {/* Complaints Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border border-gray-300">Complaint ID</th>
                <th className="p-3 border border-gray-300">Category</th>
                <th className="p-3 border border-gray-300">Description</th>
                <th className="p-3 border border-gray-300">Status</th>
                <th className="p-3 border border-gray-300">Raised By</th>
                <th className="p-3 border border-gray-300">Date</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id} className="hover:bg-gray-100">
                  <td className="p-3 border border-gray-300">{complaint.id}</td>
                  <td className="p-3 border border-gray-300">{complaint.category}</td>
                  <td className="p-3 border border-gray-300 truncate">{complaint.description}</td>
                  <td
                    className={`p-3 border border-gray-300 font-semibold ${
                      complaint.status === 'Pending'
                        ? 'text-yellow-600'
                        : complaint.status === 'Resolved'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {complaint.status}
                  </td>
                  <td className="p-3 border border-gray-300">{complaint.raisedBy}</td>
                  <td className="p-3 border border-gray-300">{complaint.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={handleLogout}
          className="cd bg-black text-white px-3 sm:px-4 py-2  mt-[15px] rounded-lg hover:bg-blue-700 transition w-[100px]"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
