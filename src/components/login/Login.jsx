import React, { useState } from 'react';
import './log.css';
import './modal.css';
import { logIn } from '../../firebase/auth';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Login = ({ switchToSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await logIn(username, password);
    if (success) {
      // Seccessfull LOGIN
    } else {
      setError('Invalid username or password');
    }
  };

  const closeModal = () => {
    setError('');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Login</h2>
        <div className="form-group">
          <label htmlFor="username" className="login-label">Email</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="login-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="sign-up-link">
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
      <Modal message={error} onClose={closeModal} />
    </div>
  );
};

export default Login;