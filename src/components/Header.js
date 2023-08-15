import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <header>
      <p id="headerName">Madeline Moore Portfolio</p>
      <FontAwesomeIcon
        icon={faBars}
        id="headerNavBars"
        size="2x"
        onClick={isMenuVisible ? closeMenu : toggleMenu}
      />
      <div className={`menuLinks ${isMenuVisible ? "menuVisible" : ""}`}>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
