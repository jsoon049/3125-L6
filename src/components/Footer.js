import React from "react";
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text footer-top">
        Website designed by Casper the Friendly Ghost
      </p>
      <p className="footer-text footer-bottom">
        Service content and logo taken from {" "}
        <a href="https://www.merivalechiro.com" className="footer-link">
          Merival Chiropractor
        </a>
      </p>
    </div>
  );
};
