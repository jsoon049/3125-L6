import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className='navbar'>
        <ul className="navbar-ul">
          <li className="navbar-li">
            <a href="/3125-L5/#service" className="links">
              Services
            </a>
          </li>
          <li className="navbar-li">
            <a href="/3125-L5/#booking" className="links">
              Book Appointment
            </a>
          </li>
          <li className="navbar-li">
            <a href="/3125-L5/#about" className="links">
              About Us
            </a>
          </li>
          <li className="navbar-li">
            <a href="/3125-L5/#contact" className="links last-link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
