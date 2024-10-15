import React from 'react';
import './Home.css'; // Assuming you will create a corresponding CSS file for styling

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Discover Your Perfect Ticket</h1>
          <p>Find and book tickets for the best events and experiences around you.</p>
          <a href="/sports" className="cta-button">Book Now</a>
        </div>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Wide Selection</h2>
          <p>Choose from a variety of events and experiences that suit your interests.</p>
        </div>
        <div className="feature">
          <h2>Secure Booking</h2>
          <p>Enjoy peace of mind with our secure and straightforward booking process.</p>
        </div>
        <div className="feature">
          <h2>24/7 Support</h2>
          <p>Our dedicated support team is here to assist you at any time.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
