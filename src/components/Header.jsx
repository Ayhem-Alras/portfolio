// src/components/Header.js
import React from 'react';
import './Header.css'; // سنضيف الأسلوب لاحقًا

function Header() {
  return (
    <header className="header">
      <nav>
        <h1>My Portfolio</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
