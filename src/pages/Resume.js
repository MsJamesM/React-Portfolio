import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <>
      {" "}
      <Header />
      <div class="mainDivs">
        <h1 id="resumeMessage">Resume under construction!</h1>
        <p id="resumeMessageText">Please check back soon</p>
        <Link to="/contact">
          <FontAwesomeIcon icon={faChevronDown} size="3x" />
        </Link>
        <Footer />
      </div>
    </>
  );
};

export default Resume;
