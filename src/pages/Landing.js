import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  return (
    <div className="mainDivs" id="landingDiv">
      <h1 id="landingGreeting" className="animate__animated animate__fadeIn">
        Hi, I'm Madeline
      </h1>
      <Link to="/about">
        <FontAwesomeIcon icon={faChevronDown} size="3x" id="landingChevron" />
      </Link>
    </div>
  );
};

export default Landing;
