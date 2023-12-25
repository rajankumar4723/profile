import React from 'react'
import "./style/home.css";
import Pic from "../assets/Profile.jpg";
import Htmlpic from "../assets/html.png";
import Java from "../assets/java.png";
import JS from "../assets/js.png";
import CS from "../assets/css.webp";
import Reac from "../assets/react.webp";
import Ja from "../assets/java.png";
import My from "../assets/php.png";





function Home() {
  return (
    <div>
     <div className="profile small-container">
      <div className="profile-text">
        <h1>Hi</h1>
        
        <h2>Rajan K M <span >Coder</span> </h2>
        <p>I am 
        Front-end developer
        </p>
        <button className='btn hover-link'> About me</button>
        <button className='cv-button hover-link'>Download CV</button>
        <div className="logo-container ">
          <div className='skills'><img src={Htmlpic} alt="" /></div>
          <div className='skills'><img src={CS} alt="" /></div>

          <div className='skills'><img src={JS} alt="" /></div>
          <div className='skills'><img src={Reac} 
          alt="" /></div>
          <div className='skills'><img src={Ja} 
          alt="" /></div>
          <div className='skills'><img src={My} alt="" /></div>

      </div>

      </div>
      <div className="profile-image">
        <img src={Pic} alt="" />
        <ul className='flex links'>
        
            <li>
              <a target="_blank" href="https://www.instagram.com/rajan.kumar55555/">
              <i class="fa-brands fa-instagram fa-beat"></i>
              </a>
            </li>
           
            <li>
              <a target="_blank" href="https://github.com/rajankumar4723"><i class="fa-brands fa-github fa-flip"></i></a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/rajan-modanwal-11a73821a/"><i class="fa-brands fa-linkedin fa-beat-fade"></i></a>
            </li>
           
            <li>
              <a href="/"><i class="fa-brands fa-twitter fa-flip"></i></a>
            </li>

        </ul>
      </div>
      
     </div>
    </div>
  )
}

export default Home;
