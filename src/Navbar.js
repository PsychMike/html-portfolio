// NavBar.js
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="logo-container">
        <img
          src="https://i.ibb.co/XDPsKRN/your-image-file.jpg"
          alt="Your face"
          className="logo"
        />
      </div>
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#online-cv">Online CV</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
