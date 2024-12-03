import React from 'react';

const AdminDashboard = () => {
  // Mock data for demo
  const complaints = [
    {
      id: '001',
      category: 'General',
      description: 'Issue with cafeteria cleanliness.',
      status: 'Pending',
      raisedBy: 'Anonymous',
      date: '2024-12-01',
    },
    {
      id: '002',
      category: 'Sexual Harassment',
      description: 'Reported incident near the library.',
      status: 'Escalated',
      raisedBy: 'Confidential',
      date: '2024-12-02',
    },
    {
      id: '003',
      category: 'Personal',
      description: 'Request for mental health support.',
      status: 'Resolved',
      raisedBy: 'Confidential',
      date: '2024-12-01',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Admin Dashboard</h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-blue-500 text-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Complaints</h3>
            <p className="text-2xl">{complaints.length}</p>
          </div>
          <div className="p-4 bg-green-500 text-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Resolved</h3>
            <p className="text-2xl">{complaints.filter(c => c.status === 'Resolved').length}</p>
          </div>
          <div className="p-4 bg-yellow-500 text-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Pending</h3>
            <p className="text-2xl">{complaints.filter(c => c.status === 'Pending').length}</p>
          </div>
          <div className="p-4 bg-red-500 text-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Escalated</h3>
            <p className="text-2xl">{complaints.filter(c => c.status === 'Escalated').length}</p>
          </div>
        </div>

        {/* Complaints Table */}
        <table className="w-full border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border border-gray-300 text-left">Complaint ID</th>
              <th className="p-3 border border-gray-300 text-left">Category</th>
              <th className="p-3 border border-gray-300 text-left">Description</th>
              <th className="p-3 border border-gray-300 text-left">Status</th>
              <th className="p-3 border border-gray-300 text-left">Raised By</th>
              <th className="p-3 border border-gray-300 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id} className="hover:bg-gray-100">
                <td className="p-3 border border-gray-300">{complaint.id}</td>
                <td className="p-3 border border-gray-300">{complaint.category}</td>
                <td className="p-3 border border-gray-300">{complaint.description}</td>
                <td className={`p-3 border border-gray-300 font-semibold ${
                  complaint.status === 'Pending' ? 'text-yellow-600' :
                  complaint.status === 'Resolved' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {complaint.status}
                </td>
                <td className="p-3 border border-gray-300">{complaint.raisedBy}</td>
                <td className="p-3 border border-gray-300">{complaint.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
