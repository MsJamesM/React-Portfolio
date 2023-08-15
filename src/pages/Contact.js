import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      //form submission logic here
      console.log(formData);
    }
  };

  return (
    <>
      <Header />
      <div className="mainDivs">
        <h1>Contact</h1>
        <form className="contactForm" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              className="contactFormInput"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <p className="contactFormErrors">{formErrors.name}</p>
            )}
          </label>
          <label>
            <input
              type="email"
              name="email"
              className="contactFormInput"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="contactFormErrors">{formErrors.email}</p>
            )}
          </label>
          <label>
            <textarea
              id="contactFormTextArea"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="contactFormSubmitBtn">
            Send
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
