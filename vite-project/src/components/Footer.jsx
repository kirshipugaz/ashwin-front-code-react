import React from 'react';
import './../css/Footer.css';

function Footer() {
  return (
    <footer className="text-center mt-5">
      <div className="container">
        <a href="/about">About</a> | <a href="/terms">Terms Of Use</a> | <a href="/privacy">Privacy Policy</a> | <a href="/support">Help & Support</a>
      </div>
    </footer>
  );
}

export default Footer;