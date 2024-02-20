import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../HomePageIcon/HomePageIcon';
import './PopUpMenu.css'; // Import the CSS file

function PopUpMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pop-up-container">
      <button onClick={toggleMenu} className="menu-toggle">
        Menu
      </button>
      {isOpen && (
        <div className="menu-content">
          <ul>
            <li><HomeIcon /></li>
            <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/about-time-capsule" onClick={toggleMenu}>About the Time Capsule</Link></li>
            <li><Link to="/papadrew-tools" onClick={toggleMenu}>PapaDrew's Tools</Link></li>
            <li><Link to="/coming-soon" onClick={toggleMenu}>Coming Soon</Link></li>
            {/* Add more links as needed */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PopUpMenu;
