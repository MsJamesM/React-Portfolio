import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <>
      <Header />
      <div class="mainDivs">
        <h1>Projects Page</h1>
        <Link to="/About">About</Link>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
