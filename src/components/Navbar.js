import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Navbar extends React.Component {
  render(){
    return(
      <Router>
        <nav> 
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><Link to="/Main">Main</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </Router>
    )
  }
}


export default Navbar


{/* <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact /> 
        <SocialLinks />
        <Footer /> */}