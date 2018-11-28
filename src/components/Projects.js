import React, { Component } from "react";
import Project from "./Project";
import img1 from '../imgs/mock-up.png'



class Projects extends Component {
  state = { 
    project: 1 
  };

  nextProject = () => {
    this.setState({ project: this.state.project + 1 });
  };

  prevProject = () => {
    this.setState({ project: this.state.project - 1 });
  };

  render() {
    return (
      <div id="gallery" class="animated fadeIn">
        <div id="project-carousel">
          <i class="fa-3x fas fa-angle-left" onClick={this.prevProject}/>
          <i class="fa-3x fas fa-angle-right" onClick={this.nextProject}/>
        </div>
        <Project 
          project={this.state.project}
          img={img1}
          alt={"Mock-Up"}
          url={"https://czhu6515.github.io/projects/week1project-master/index.html"}
          git={"https://github.com/czhu6515/week1project"}
        />
      </div>
    );
  }
}

export default Projects;
