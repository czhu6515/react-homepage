import React, { Component } from "react";
import "../App.css";
import Showcase from "./Showcase";
import ParticleLayer from "./ParticleLayer";
import Navbar from "./Navbar";

class App extends Component {
  state = {
    step: 1,
    project: 1,
    numOfProjects: 5
  };

  nextProject = () => {
    this.state.project < this.state.numOfProjects
      ? this.setState({ project: this.state.project + 1 })
      : this.setState({ project: this.state.numOfProjects });
  };

  prevProject = () => {
    this.state.project > 1
      ? this.setState({ project: this.state.project - 1 })
      : this.setState({ project: 1 });
  };

  renderHome = () => {
    this.setState({ step: 1 });
  };

  renderProjects = () => {
    this.setState({ step: 2 });
  };

  renderContacts = () => {
    this.setState({ step: 3 });
  };

  render() {
    return (
      <div id="app">
        <ParticleLayer />
        <Showcase
          id="showcase"
          step={this.state.step}
          project={this.state.project}
          numOfProjects={this.state.numOfProjects}
          renderHome={this.renderHome}
          renderProjects={this.renderProjects}
          renderContacts={this.renderContacts}
          nextProject={this.nextProject}
          prevProject={this.prevProject}
        />

        <Navbar
          renderHome={this.renderHome}
          renderProjects={this.renderProjects}
          renderContacts={this.renderContacts}
        />
      </div>
    );
  }
}

export default App;
