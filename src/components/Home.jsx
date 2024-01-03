import React from 'react'
import "./style/Home.css";
import Pic from "../assets/Profile.jpg";
import Htmlpic from "../assets/HTML.jpg";
import Java from "../assets/java.png";
import JS from "../assets/js.png";
import CS from "../assets/css.webp";
import Reac from "../assets/react.webp";
import My from "../assets/php.png";
import Next from "../assets/next.png";






function Home() {
  return (
    <div className='profile'>
      <div className="flexContainer">
      <div className="textProfile">
        <h2>Hi I am <br /> <span>Rajan Kumar Modanwal</span></h2>
        <h3>Frontend & Web Developer</h3>
          <ul>
            <li><a href="https://github.com/rajankumar4723"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/rajan-modanwal-11a73821a/"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://twitter.com/RajanMo65439359"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://www.frontendmentor.io/profile/rajankumar4723"><i class="fa-solid fa-code"></i></a></li>
          </ul>
        
      </div>
      <div className="ImgProfile">
        <img src={Pic} alt="" />
      </div>
      </div>
      <div className="image-container">
      <img src={Reac} alt="Image 1" />
      <img src={JS} alt="Image 2" />
      <img src={CS} alt="Image 3" />
      <img src={Htmlpic} alt="Image 1" />
      <img src={Java} alt="Image 2" />
      <img src={Next} alt="Image 3" />

    </div>
     
    </div>
  )
}

export default Home;
