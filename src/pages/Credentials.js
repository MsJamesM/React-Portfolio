import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Credentials = () => {
  return (
    <>
      <Header />
      <div class="mainDivs">
        <h1>Credentials Page</h1>
        <Link to="/projects">Projects</Link>
      </div>
      <Footer />
    </>
  );
};

export default Credentials;
