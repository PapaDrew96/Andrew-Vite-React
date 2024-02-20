import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpButton.css';

function SignUpButton() {
  let navigate = useNavigate();
  return <button className="signUpButton" onClick={() => navigate('/signup')}>Sign Up</button>;
}

export default SignUpButton;