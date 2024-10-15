import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BookedTicket.css'; // Assuming there's a CSS file for styling

const Booked = () => {
  const { id } = useParams(); // Use the booking ID from the route
  const [booking, setBooking] = useState(null); // Store booking details
  const [isCanceled, setIsCanceled] = useState(false); // Track if the ticket is canceled
  const [error, setError] = useState(null); // Handle errors

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/`);
        setBooking(response.data);
      } catch (error) {
        setError(error.response?.data?.message || 'Error fetching booking');
      }
    };
    fetchBooking();
  }, [id]);

  const handleCancel = async () => {
    try {
      await axios.post('http://localhost:5000/cancel-ticket', { bookingId: id });
      alert('Ticket canceled successfully!');
      setIsCanceled(true); // Mark the ticket as canceled
    } catch (error) {
      console.error(error.response.data);
      alert('Ticket cancellation failed: ' + (error.response?.data?.message || 'An error occurred'));
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!booking) {
    return <p>Loading booking details...</p>;
  }

  if (isCanceled) {
    return <p>Your ticket has been canceled.</p>; // Display message after cancellation
  }

  return (
    <div className="bookedmovies">
      <h1>Booking Confirmation</h1>
      <div className="booking-details">
        <p><strong>Event:</strong> {booking.event.title}</p>
        <p><strong>Name:</strong> {booking.name}</p>
        <p><strong>Email:</strong> {booking.email}</p>
        <p><strong>Number of Tickets:</strong> {booking.tickets}</p>
        <p><strong>Chairs:</strong> {booking.chairs.join(', ')}</p>
        <p><strong>Payment Method:</strong> {booking.paymentMethod}</p>
      </div>
      <button onClick={handleCancel} className="cancel-button">
        Cancel Ticket
      </button>
    </div>
  );
};

export default Booked;
