import React, { Component } from "react";
import "../App.css";
import Home from "./Home";
import Projects from "./Projects";
import Contacts from "./Contacts";
import ParticleLayer from "./ParticleLayer";
import Navbar from "./Navbar";

class App extends Component {
  state = {
    home: true,
    projects: false,
    contacts: false
  };

  renderHome = () => {
    this.setState({ home: true, projects: false, contacts: false });
    console.log("home", this.state);
  };

  renderProjects = () => {
    this.setState({ home: false, projects: true, contacts: false });
    console.log("projects", this.state);
  };

  renderContacts = () => {
    this.setState({ home: false, projects: false, contacts: true });
    console.log("projects", this.state);
  };

  render() {
    return (
      <div id="app">
        <ParticleLayer />
        <div id="showcase">
          {this.state.home && <Home />}
          {this.state.contacts && <Contacts />}
          {this.state.projects && <Projects />}
        </div>
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
