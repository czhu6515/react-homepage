import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home.js'
import Projects from './Projects.js'
import Resume from './Resume.js'
import Contacts from './Contacts.js'

class Navbar extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <nav className='nav-bar'> 
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Projects">Projects</Link></li>
              <li><Link to="/Resume">Resume</Link></li>
              <li><Link to="/Contacts">Contacts</Link></li>
            </ul>
          </nav>

        <Route exact path='/' component={Home}/>
        <Route exact path='/Projects' component={Projects}/>
        <Route exact path='/Resume' component={Resume}/>
        <Route exact path='/Contacts' component={Contacts}/>

        </div>
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