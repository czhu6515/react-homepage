import React, { Component } from "react";
import mockup from '../imgs/mock-up.png'

class Project extends Component {
  render() {
    return(
      <div id="project-main-wrapper">
        <div id="project-carousel">
          <i class="fa-3x fas fa-angle-left"></i>
          <i class="fa-3x fas fa-angle-right"></i>
        </div>
        <div id="project-wrapper">
        
          <img id="project-img" src={mockup} alt="Mock-Up" />

          <div id="project-links-wrapper" class="animated fadeInDown">
            <a id="project-url" href="https://czhu6515.github.io/projects/week1project-master/index.html">
              <i className="fa-3x fas fa-link"></i>
            </a>
            <a id="project-github" href="https://czhu6515.github.io/projects/week1project-master/index.html">
              <i className="fa-3x fab fa-github"></i>
            </a>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Project 
