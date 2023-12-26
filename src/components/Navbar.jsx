import React, { useState } from "react";
import "./style/Navbar.css";
import Home from "./Home";
import Navlogo from "../assets/navlogo.png";
import Skillspage from "./SkillsPage";
import About from "./About";
import Contact from "./Contact";
import MenuIcon from '@rsuite/icons/Menu';


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className="container main_nav">
        <nav className={`nav flex ${isNavOpen ? "open" : ""}`}>
          <div className="logo-nav">
            {" "}
            <img src={Navlogo} alt="" />{" "}
          </div>
          <div className="navlink">
            <ul className={`list  ${isNavOpen ? "show" : ""}`}>
              <li>
                <a href="#homepage" className="hover-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover-link">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover-link">
                  Skills
                </a>
              </li>
          
              <li>
                <a href="#contact" className="hover-link">
                  Contact
                </a>
              </li>
            </ul>
            <button className="toggleButton hanb" onClick={toggleNavbar}>
              <MenuIcon
              
              />
            </button>
          </div>
        </nav>
      </div>
      <div className="container-section">
        <section className="homepage" id="homepage">
          <Home />
        </section>
        <section className="about" id="about">
          <About />
        </section>
        <section className="services" id="services">
          <Skillspage />
        </section>
     
        <section className="about" id="contact">
          <Contact/>
        </section>
      </div>
    </div>
  );
}

export default Navbar;
