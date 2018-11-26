import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
  state = { project: 1 };

  nextProject = () => {
    this.setState({ project: this.state.project + 1 });
  };

  prevProject = () => {
    this.setState({ project: this.state.project - 1 });
  };

  render() {
    return (
      <div id="gallery">
        <Project />
      </div>
    );
  }
}

export default Projects;
