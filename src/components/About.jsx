import React from "react";
import "./style/About.css";
function About() {
  return (
    <div>
      <header className=" header-section">
        <div className="about-section ">
          <h1 className="heading">About Me</h1>
          <p>
            I am Passionet <span>Frontend</span> Development{" "}
          </p>
          <p>
            I Completed <span>Bachelor of Computer Application</span> from
            Microtek College of Management and technology,Varanasi in 2023. and
            I also Jetking<span> Certified Computer</span> hardware and
            networking.
          </p>
          <p>
            I completed <span> Intermediate</span> K.I Inter College from
            Bhadohi
          </p>
          <p>
            I completed <span>High school</span> shri M.P Dubey Inter college
            from Manikpur Bhadohi{" "}
          </p>

        </div>
        <div className="title">
        <h1>Personal Details</h1>

{/* <h3> I am Frontend Developer</h3> */}
        </div>
        <div className="information">
           
          <div className="personl">
           
            <li>
              <span><i class="fa-sharp fa-solid fa-chevron-right"></i></span> Birthday{" "}
              <span>: 1 May 1995</span>
            </li>
            <li>
              {" "}
              <span><i class="fa-sharp fa-solid fa-chevron-right"></i> </span>Email{" "}
              <span>: rajanmodanwal4444@gmail.com</span>
            </li>
            <li>
              {" "}
             <span> <i class="fa-sharp fa-solid fa-chevron-right"></i> </span>Age{" "}
              <span>: 30</span>
            </li>
            <li>
            <span><i class="fa-sharp fa-solid fa-chevron-right"></i> </span>Phome <span>: 9305085242</span>
            </li>
            <li>
           <span> <i class="fa-sharp fa-solid fa-chevron-right"></i></span> City <span>: Bhadohi</span>
            </li>
            <li>
           <span> <i class="fa-sharp fa-solid fa-chevron-right"></i></span> Degree <span>: Bachelor</span>
            </li>
          </div>
          <div className="right-side">
            <li>
             <span> <i class="fa-sharp fa-solid fa-chevron-right"></i></span> Country{" "}
              <span>: INDIA</span>
            </li>
            <li>
            <span><i class="fa-sharp fa-solid fa-chevron-right"></i></span>  Language <span>: Hindi & Eng</span>
            </li>
            <li>
            <span><i class="fa-sharp fa-solid fa-chevron-right"></i> </span> Developer <span>: React JS</span>
            </li>
            <li>
            <span><i class="fa-sharp fa-solid fa-chevron-right"></i></span>  Website <span>: www.Google.com</span>
            </li>
            <li>
            <span><i class="fa-sharp fa-solid fa-chevron-right"></i> </span>Frontend  <span>: www.FrontendMenter.com</span>
            </li>
            <li>
           <span> <i class="fa-sharp fa-solid fa-chevron-right"></i></span> Firelance <span>: Available</span>
            </li>
          </div>
        </div>
      </header>
    </div>
  );
}

export default About;
