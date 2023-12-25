import React from 'react'
import "./style/Contact.css";
import MyForm from './MyForm';
import Card from './Card';
function Contact() {
  return (
    <div>
      <div className="contact-main">
        <div className="project-section">
          <h1>Github Project</h1>
          <p>You can visit</p>
          <a href="">click here</a>
          <div className='space'>
          <h1>Frontend Menter Project</h1>
          <a href="https://www.frontendmentor.io/profile/rajankumar4723">click here</a>

          </div>
        </div>
        <div className="contact-from cards">
         <MyForm/>
        </div>

      </div>
      <footer>
          <p>@copyright</p>

      </footer>
    </div>
  )
}

export default Contact;
