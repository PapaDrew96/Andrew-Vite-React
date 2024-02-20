import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css'; // Import CSS for styling

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Handle the signup logic here
    console.log(email, password);
    // navigate('/dashboard'); // Optionally navigate to another page upon successful signup
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
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
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
