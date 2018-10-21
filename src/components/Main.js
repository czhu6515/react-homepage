import React from 'react'
import Navbar from "./Navbar.js"
import ParticleLayer from './ParticleLayer'
import $ from "jquery"
import Home from './Home.js'

// import Home from "./Home.js"
// import Projects from "./Projects"


class Main extends React.Component {
  render(){
    return(<main>
            <Navbar />
            <ParticleLayer />
            <Home />
            {/* <Projects /> */}
            {/* <Resume /> */}
            {/* <Contact />  */}
            {/* <SocialLinks /> */}
            {/* <Footer /> */}
            
            
          </main>
    )
  }
}


export default Main