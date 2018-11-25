import React, { Component } from "react";
import "../App.css";
import Showcase from "./Showcase";
import ParticleLayer from "./ParticleLayer";
import Navbar from "./Navbar";

class App extends Component {
  state = {
    step: 1
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
          renderHome={this.renderHome}
          renderProjects={this.renderProjects}
          renderContacts={this.renderContacts}
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
