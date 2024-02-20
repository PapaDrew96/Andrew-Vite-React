import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogInButton.css';

function LogInButton() {
  let navigate = useNavigate();
  return <button className="logInButton" onClick={() => navigate('/login')}>Log In</button>;
}

export default LogInButton;