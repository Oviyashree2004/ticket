import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './BookedTicket.css'; 

const BookedTickets = () => {
  const location = useLocation();
  const { formData, event } = location.state || {}; 
  const [isCanceled, setIsCanceled] = useState(false); 

  const handleCancel = async () => {
    try {
      await axios.post('http://localhost:5000/cancel-ticket', { bookingId: formData.bookingId });
      alert('Ticket canceled successfully!');
      setIsCanceled(true);
    } catch (error) {
      console.error(error.response.data);
      alert('Ticket cancellation failed: ' + (error.response?.data?.message || 'An error occurred'));
    }
  };

  if (!formData || !event) {
    return <p>No booking information available.</p>;
  }

  if (isCanceled) {
    return <p>Your ticket has been canceled.</p>; 
  }

  return (
    <div className="booked-tickets">
      <h1>Booking Confirmation</h1>
      <div className="booking-details">
        <p><strong>Event:</strong> {event.title}</p>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Number of Tickets:</strong> {formData.tickets}</p>
        <p><strong>Chairs:</strong> {formData.chairs.join(', ')}</p>
        <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
      </div>
      <button onClick={handleCancel} className="cancel-button">
        Cancel Ticket
      </button>
    </div>
  );
};

export default BookedTickets;
