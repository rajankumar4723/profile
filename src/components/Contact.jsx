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
            <p>You can see my projects</p>
            <a href="/">Github</a>
            <h3>My Frontend Projects & Clone</h3>
            <a href="/">Frontend</a>
          </div>
          <div className="cardForm">
            <MyForm />
          </div>
        </div>
        <div className="footer">
          <div className="social_link">
            <a href="/"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="/"><i class="fa-brands fa-github"></i></a>
            <a href="/"><i class="fa-brands fa-facebook"></i></a>
            <a href="/"><i class="fa-brands fa-instagram"></i></a>
            <a href="/"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
        <div className="subFooter">
        <p>&copy; 2024 Privacy Policy Terms & Conditions </p>

        </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
