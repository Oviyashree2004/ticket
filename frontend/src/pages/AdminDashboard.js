// pages/AdminDashboard.js
import React, { useState } from 'react';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // New state for Image URL
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const addProduct = async (productData) => {
    try {
      const response = await fetch('http://localhost:5000/admin/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`, // Include the token
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, message: data.message };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.message || 'Failed to add product' };
      }
    } catch (error) {
      return { success: false, message: 'Server error, please try again later.' };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    const productData = {
      name,
      price: parseFloat(price),
      description,
      imageUrl, // Include imageUrl in the product data
    };

    const result = await addProduct(productData);
    setMessage(result.message);

    if (result.success) {
      // Clear form if the product was added successfully
      setName('');
      setPrice('');
      setDescription('');
      setImageUrl(''); // Clear image URL field
    }

    setLoading(false);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p>Welcome to the admin dashboard! You can manage your products here.</p>

      <h3>Add a New Product</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0" // Prevent negative prices
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>Add Ticket</button>
      </form>
      {loading && <p>Loading...</p>} {/* Loading indicator */}
      {message && (
        <p className={message.includes('successfully') ? 'success-message' : 'error-message'}>
          {message}
        </p>
      )} {/* Display messages */}
    </div>
  );
};

export default AdminDashboard;
