import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      {" "}
      <Header />
      <div class="mainDivs">
        <h1>About Page</h1>
        <Link to="/">Landing</Link>
        <Footer />
      </div>
    </>
  );
};

export default About;
