import React, { Component } from "react";
import mockup from '../imgs/mock-up.png'

class Project extends Component {
  render() {
    return(
      <div id="project-wrapper">
        <h2 id="project-title">Hello!</h2>
        <div id="project-links-wrapper">
          <a id="project-url" href="https://czhu6515.github.io/projects/week1project-master/index.html">
            <i class="fa-3x fas fa-link"></i>
          </a>
          <a id="project-github" href="https://czhu6515.github.io/projects/week1project-master/index.html">
            <i class="fa-3x fab fa-github"></i>
          </a>
        </div>
          <img id="project-img" src={mockup} alt="Mock-Up" />
      </div>
    )
  }
}

export default Project 
