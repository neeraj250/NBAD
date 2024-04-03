// NavBar.js

import React, { useState, useEffect } from 'react';
import './NavBar.css';
import ExpenseModal from '../ExpenseModal/ExpenseModal';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const textToType = "Expense Tracker";
  

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentCharIndex < textToType.length) {
        setTypedText(prevTypedText => prevTypedText + textToType[currentCharIndex]);
        setCurrentCharIndex(prevIndex => prevIndex + 1);
      }
    }, 150); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [currentCharIndex]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
            <span>{typedText}</span>
        </div>
        <div className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <ul className="navbar-items">
            <li className="navbar-item"><a href="#">Home</a></li>
            <li className="navbar-item"><a href="#">Dashboard</a></li>
            <li className="navbar-item"><a href="#">Logout</a></li>
            {/* <li className="navbar-item"><a href="#">Contact</a></li> */}
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
