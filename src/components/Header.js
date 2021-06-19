import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className='navbar'>
        <ul className="navbar-ul">
          <li className="navbar-li">
            <a href="/3125-L4/#service" className="links">
              Services
            </a>
          </li>
          <li className="navbar-li">
            <a href="/3125-L4/#booking" className="links">
              Book Appointment
            </a>
          </li>
          <li className="navbar-li">
            <a href="/3125-L4/#about" className="links">
              About Us
            </a>
          </li>
          <li className="navbar-li">
            <a href="/3125-L4/#contact" className="links last-link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
