import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './App.jsx'; // Adjust the path if your App component is located elsewhere
import './index.css'; // Optional: If you have global styles to apply

// Use createRoot
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
