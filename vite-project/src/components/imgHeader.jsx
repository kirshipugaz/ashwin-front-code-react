import React from 'react';
import '../css/imgHeader.css';
import unite from "../assets/unite.png"

function Header() {
  return (
    <header className="header-content">
      <img src={unite} alt="Join the circle of wellness" className="img-fluid header-image" />
    </header>
  );
}

export default Header;
