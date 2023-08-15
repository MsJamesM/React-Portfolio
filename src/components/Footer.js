import React from "react";
import { GitHub, Linkedin, Instagram, AtSign } from "react-feather";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/madeline-moore-48a399288/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin size={26} id="footerIcons" />
      </a>
      <a href="https://github.com/MsJamesM" target="_blank" rel="noreferrer">
        <GitHub size={26} id="footerIcons" />
      </a>
      <a
        href="https://www.instagram.com/missjamesm/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram size={26} id="footerIcons" />
      </a>
    </footer>
  );
};

export default Footer;
