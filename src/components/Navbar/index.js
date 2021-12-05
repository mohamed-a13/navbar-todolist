import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  const [activeNav, setActiveNav] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [animationLink, setAnimationLink] = useState(false);

  const handleNav = () => {
    setActiveNav(!activeNav);
    setToggle(!toggle);
    setAnimationLink(!animationLink);
  };

  return (
    <nav>
      <h2>
        <Link exact="true" to="/">
          LOGO
        </Link>
      </h2>

      <ul className={`links ${activeNav ? "nav-active" : ""}`}>
        <li className={`${animationLink ? "animationLink1" : ""}`}>
          <Link exact="true" to="/" onClick={handleNav}>
            Home
          </Link>
        </li>
        <li className={`${animationLink ? "animationLink2" : ""}`}>
          <Link exact="true" to="/about" onClick={handleNav}>
            About
          </Link>
        </li>
        <li className={`${animationLink ? "animationLink3" : ""}`}>
          <Link exact="true" to="/projects" onClick={handleNav}>
            Projects
          </Link>
        </li>
        <li className={`${animationLink ? "animationLink4" : ""}`}>
          <Link exact="true" to="/contact" onClick={handleNav}>
            Contact
          </Link>
        </li>
      </ul>
      <div
        className={`btnBurger ${toggle ? "toggle" : ""}`}
        onClick={handleNav}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
