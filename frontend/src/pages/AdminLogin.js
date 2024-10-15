// pages/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after login
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // To navigate to the admin page after login

  // Fixed admin credentials
  const adminCredentials = {
    email: 'admin#@gmail.com', // Replace with your fixed admin email
    password: '123qwe123' // Replace with your fixed admin password
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Check if entered credentials match the fixed ones
    if (email === adminCredentials.email && password === adminCredentials.password) {
      // Simulating token storage for successful login
      localStorage.setItem('adminToken', 'your-fixed-token'); // You can use a fixed token
      alert('Admin Logged In Successfully!');
      navigate('/admin/dashboard'); // Redirect to the admin dashboard
    } else {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
