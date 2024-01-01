import React from "react";
import "./style/Contact.css";
import MyForm from "./MyForm";
import Card from "./Card";
function Contact() {
  return (
    <>
      <div className="mainFooter">
        <div className="contact-main">
          <div className="cardProject">
            <h2>Projects Github & Frontend Mentero</h2>
            <p>You can visit my project</p>
            <a href="/">Github</a>
            <h3>My Frontend Projects & Clone</h3>
            <a href="/">Frontend</a>
          </div>
          <div className="cardForm">
            <MyForm />
          </div>
        </div>
        <div className="footer">
          <div className="social_link"></div>
        sacdxas
        </div>
      </div>
    </>
  );
}

export default Contact;
