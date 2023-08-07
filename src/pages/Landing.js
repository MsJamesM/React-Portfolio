import React, { useState } from "react";
import Header from "../components/Header";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { ChevronDown } from "react-feather";

const Landing = () => {
  const [iconColor, setIconColor] = useState("#6a6a6a");

  return (
    <div className="mainDivs" id="landingDiv">
      <h1 id="landingGreeting" className="animate__animated animate__fadeIn">
        Hi, I'm Madeline
      </h1>
      <div id="credentialsLink">
        <Link to="/credentials">
          <button
            id="chevronDown"
            className="iconButton"
            onMouseEnter={() => setIconColor("#a883ba")}
            onMouseLeave={() => setIconColor("#6a6a6a")}
          >
            <ChevronDown size={50} color={iconColor} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
