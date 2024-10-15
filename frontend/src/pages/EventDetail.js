import React from 'react';
import { useLocation } from 'react-router-dom';
import './eventDetail.css';  // You'll create this file for specific styling

const EventDetail = () => {
  const location = useLocation();
  const { event } = location.state;

  return (
    <div className="event-detail-container">
      <img src={event.image} alt={event.title} className="event-detail-image" />
      <div className="event-detail-content">
        <h1>{event.title}</h1>
        <p>Chess | English, Tamil | 5yrs+ | 3hrs 15mins</p>
        <p>Sun 15 Sep 2024 at 9:45 AM | Chai Galli: Chennai | ₹ 199</p>
        <button className="book-button">Book</button>
      </div>
    </div>
  );
};

export default EventDetail;
