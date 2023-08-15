import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <>
      <center>
        <Header />
        <h1>Portfolio</h1>
        <Projects />
        <Link to="/contact">
          <FontAwesomeIcon icon={faChevronDown} size="3x" />
        </Link>
      </center>
    </>
  );
};

export default Portfolio;
