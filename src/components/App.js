import React, { Component } from "react";
import "../App.css";
import Introduction from "./Introduction";
import ParticleLayer from "./ParticleLayer";

class App extends Component {
  render() {
    return (
      <div id="app">
        <ParticleLayer />
        <Introduction />
      </div>
    );
  }
}

export default App;
