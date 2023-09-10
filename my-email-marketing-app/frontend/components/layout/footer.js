// frontend/components/Layout/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">Your Logo</a>
        </div>
        <div className="footer-social">
          {/* Add social media links/icons here */}
        </div>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
