import React, {Component} from 'react'
import Particles from 'react-particles-js';
import Navbar from './Navbar.js'

// courtesy of Vincent Garreau

class ParticleLayer extends Component {
  render() {
    return(
      <div>
        <Navbar />
      <Particles height='100vh' width='100vw'
        params={{
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            }
          },
          "particles": {
            "number": {
              "value": 150  ,
              "density": {
                "enable": false
              }
            },
            "size": {
              "value": 10,
              "random": true
            },
            "move": {
              "direction": "top",
              "out_mode": "in"
            },
            "line_linked": {
              "enable": false
            }
          }
        }} />
        </div>
    )
  }
}

export default ParticleLayer