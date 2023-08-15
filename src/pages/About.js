import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import aboutImage from "../assets/aboutPhoto2.png";

const About = () => {
  return (
    <>
      {" "}
      <Header />
      <div id="aboutPage">
        <img src={aboutImage} alt="About Me" className="aboutImage" />
        <div id="aboutPageRight">
          <h1 class="typewriter">I'm an aspiring computer nerd.</h1>
          <p id="aboutH1">
            Coding since 2007. Graduated Denver University's full-stack coding
            boot camp in partnership with edX in 2023.
          </p>
          <p id="aboutH2">
            I live in Colorado, enjoy watching the same shows over and over
            again, and start my mornings with coffee and yoga.
          </p>
        </div>
      </div>
      <center>
        <Link to="/portfolio">
          <FontAwesomeIcon icon={faChevronDown} size="3x" />
        </Link>
      </center>
      <Footer />
    </>
  );
};

export default About;
