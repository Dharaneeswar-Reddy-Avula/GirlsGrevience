import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessMessage('Registration Successful! Redirecting to Login...');
    setTimeout(() => navigate('/'), 2000); // Redirect to login after 2 seconds
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        
        {successMessage && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 border border-green-400 rounded-lg flex items-center">
            <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM4.293 6.293a1 1 0 1 1 1.414 1.414L7 7.414l3.293-3.293a1 1 0 1 1 1.414 1.414L8 9.414 4.293 6.293z"/>
            </svg>
            <span>{successMessage}</span>
          </div>
        )}

        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="College Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/')}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
