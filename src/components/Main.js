import React from 'react'
import Navbar from "./Navbar.js"
import Particles from 'react-particles-js';

// import Home from "./Home.js"
// import Projects from "./Projects"


class Main extends React.Component {
  render(){
    return(<main>
            <Navbar />
            {/* <Home /> */}
            {/* <Projects /> */}
            {/* <Resume /> */}
            {/* <Contact />  */}
            {/* <SocialLinks /> */}
            {/* <Footer /> */}
            <Particles
                params={{
                  "particles": {
                      "number": {
                          "value": 160,
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
                          "out_mode": "out"
                      },
                      "line_linked": {
                          "enable": false
                      }
                  }
              }} />
          </main>
    )
  }
}

export default Main