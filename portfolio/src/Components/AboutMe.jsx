import React from "react";
import image from "../Images & Styles/images/coding.png";
import Navbar from "./Navbar";

export default function AboutMe() {
  return (
    <div>
      <Navbar />
      <div className="section-about" id="aboutme">
        <div className="aboutme-container">
          <img src={image} className="graphic" alt="3D graphic" />
          <div className="description">
            <h2>About me</h2>
            <div className="text">
              I am a Front-end developer and I am skilled in HTML, CSS and
              JavaScript web development, as well as the React framework. I am a
              graduate of Conclase Academy, CypherCrescent Academy and
              DevCareer. I am looking to gain valuable experience in an IT
              environment and expand my competence. I am ready for challenges
              and eager to learn and acquire new skills.
              <br />
              <br /> I graduated from the University of Benin, Benin city in Edo
              state with a degree in Petroleum Engineering.
              <br />
              <br />
              Privately, in addition to developing web applications, I am
              interested in building fantastic mobile applications, I am
              currently undergoing Flutter & Dart programming training at
              Kodecamp.
              {/* <img src={bee} /> */}
              <div className="media-icons">
                <a href="https://web.facebook.com/daveohimai/about/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com/david-ohimai/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/david-ohimai/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
