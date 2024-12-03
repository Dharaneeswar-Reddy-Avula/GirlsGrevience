import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ComplaintForm = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Corrected string interpolation using template literals
    setSuccessMessage(`Complaint submitted on ${category} successfully! We will review it shortly.`);
    setCategory('');
    setDescription('');
    setTimeout(() => setSuccessMessage(''), 5000); // Hide the message after 5 seconds
  };
  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Raise a Complaint</h2>

        {successMessage && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 border border-green-400 rounded-lg flex items-center">
            <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM4.293 6.293a1 1 0 1 1 1.414 1.414L7 7.414l3.293-3.293a1 1 0 1 1 1.414 1.414L8 9.414 4.293 6.293z"/>
            </svg>
            <span>{successMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <select
            className="w-full p-3 mb-4 border rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Personal">Personal</option>
            <option value="Sexual Harassment">Sexual Harassment</option>
            <option value="General">General</option>
          </select>
          <textarea
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
          <button
          onClick={handleLogout}
          className="bg-black text-white px-3 sm:px-4 py-2  mt-[15px] rounded-lg hover:bg-blue-700 transition w-full"
        >
          Logout
        </button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
