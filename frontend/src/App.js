// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Tickets from './pages/Tickets';
import BookedTickets from './pages/BookedTickets';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetails';
import SportsEvents from './pages/sports';
import SportsDetail from './pages/SportsDetails';
import Booked from './pages/bookedmovies';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard'; // Import the Admin Dashboard

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Booking.Com</Link>
          </div>
          <input type="text" className="search-input" placeholder="Search for tickets.." />
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/sports">Tickets for Sports</Link>
            <Link to="/booked-tickets">Booked Tickets for Sports</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/admin/login">Admin Login</Link>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/sports" element={<SportsEvents />} />
            <Route path="/sports/:id" element={<SportsDetail />} />
            <Route path="/bookedmovies" element={<Booked />} />
            <Route path="/booked-tickets" element={<BookedTickets />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* Add this line */}
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Booking.Com. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;