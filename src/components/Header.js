/* dark gray social media links at the top of page, even on landing */

import React from "react";
import { GitHub, Linkedin, Instagram, AtSign } from "react-feather";

const Header = () => {
  return (
    <header>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <GitHub size={26} id="headerIcons" />
      </a>
      <a href="https://Linkedin.com" target="_blank" rel="noreferrer">
        <Linkedin size={26} id="headerIcons" />
      </a>
      <a href="https://Instagram.com" target="_blank" rel="noreferrer">
        <Instagram size={26} id="headerIcons" />
      </a>
      <a href="https://Outlook.com" target="_blank" rel="noreferrer">
        <AtSign size={26} id="headerIcons" />
      </a>
    </header>
  );
};

export default Header;
