import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact /> 
        <SocialLinks />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
