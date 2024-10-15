import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [alertMessage, setAlertMessage] = useState({
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setAlertMessage({ type: 'success', message: response.data.message });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setAlertMessage({ type: 'error', message: 'Failed to send message. Please try again later.' });
      console.error(error);
    }
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>If you have any inquiries or need assistance with your booking, feel free to contact us using the form below.</p>

      {alertMessage.message && (
        <div className={`alert ${alertMessage.type === 'success' ? 'alert-success' : 'alert-error'}`}>
          {alertMessage.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here"
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <div className="contact-details">
        <h2>Other ways to contact us</h2>
        <p><strong>Customer Support:</strong> +91 9000050009</p>
        <p><strong>Email:</strong> support@Booking.com</p>
        <p><strong>Follow us:</strong></p>
        <ul>
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#instagram">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
