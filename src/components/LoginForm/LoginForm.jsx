import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import CSS for styling

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the login logic
    console.log(email, password);
    // navigate('/dashboard'); // Navigate to another page upon successful login
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <button type="button" onClick={() => navigate(-1)} className="close-btn">X</button>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Log In</button>
    </form>
  );
}

export default LoginForm;
