import React, { Component } from "react";

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
        <h1>awesome</h1>
      </div>
    );
  }
}

export default Projects;
