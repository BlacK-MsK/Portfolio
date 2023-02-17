import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">&copy; 2023 Software Engineer Name</p>
      <nav className="footer-nav">
        <ul className="footer-list">
          <li className="footer-item"><a className="footer-link" href="mailto:email@example.com">Email</a></li>
          <li className="footer-item"><a className="footer-link" href="tel:+1234567890">Phone</a></li>
        </ul>
      </nav>
    </footer>
  );
}


export default Footer;
