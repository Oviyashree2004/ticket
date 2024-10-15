import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // For making HTTP requests
import './BookingForm.css';

const BookingForm = ({ onClose, event }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tickets: '',
    chairs: [],
    paymentMethod: 'Credit Card'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a request to save the booking on the backend (if needed)
      await axios.post('http://localhost:5000/book-ticket', {
        ...formData,
        event // Send event details with form data
      });

      // Navigate to Booked Tickets page and pass formData and event as state
      navigate('/booked-tickets', { state: { formData, event } });
      onClose();
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  const seatLayout = () => {
    let rows = [];
    for (let row = 0; row < 10; row++) {
      rows.push(
        <div key={row} className="seat-row">
          {Array.from({ length: 10 }, (_, index) => {
            const seatNumber = row * 10 + index + 1;
            return (
              <div key={seatNumber} className="seat">
                <input
                  type="checkbox"
                  id={`seat-${seatNumber}`}
                  name="chairs"
                  value={seatNumber}
                  checked={formData.chairs.includes(seatNumber.toString())}
                  onChange={(e) => {
                    const newChairs = e.target.checked
                      ? [...formData.chairs, e.target.value]
                      : formData.chairs.filter(c => c !== e.target.value);
                    setFormData(prev => ({ ...prev, chairs: newChairs }));
                  }}
                />
                <label htmlFor={`seat-${seatNumber}`}>{seatNumber}</label>
              </div>
            );
          })}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="booking-form">
      <div className="overlay" onClick={onClose}></div>
      <div className="form-container">
        <h2>Book Tickets</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Number of Tickets:
            <input
              type="number"
              name="tickets"
              value={formData.tickets}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Payment Method:
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="On site">On Site</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </label>
          <label>
            Select Chairs:
            <div className="theater-seats">
              {seatLayout()}
            </div>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
