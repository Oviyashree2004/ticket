import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css';

function App() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      try {
        const response = await axios.post('http://localhost:5000/signup', { username, email, password, confirmPassword });
        console.log(response.data);
        window.alert('Sign Up Successful!'); // Alert on successful signup
      } catch (error) {
        console.error(error.response.data);
        window.alert('Sign Up Failed: ' + (error.response?.data?.message || 'An error occurred')); // Alert on signup failure
      }
    } else {
      try {
        const response = await axios.post('http://localhost:5000/login', { email, password });
        console.log(response.data);
        localStorage.setItem('token', response.data.token); // Save the token if login is successful
        window.alert('Log In Successful!'); // Alert on successful login
      } catch (error) {
        console.error(error.response.data);
        window.alert('Log In Failed: ' + (error.response?.data?.message || 'An error occurred')); // Alert on login failure
      }
    }
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
        <form onSubmit={handleFormSubmit}>
          {isSignup && (
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isSignup && (
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}
          <button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</button>
          <p onClick={switchMode}>
            {isSignup ? 'Already have an account? Log In' : 'Don\'t have an account? Sign Up'}
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
