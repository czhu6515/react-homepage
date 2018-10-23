import React from "react";
import Button from "@material-ui/core/Button";

class Navbar extends React.Component {

  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <li>
            <Button variant="outlined" onClick={this.props.renderHome}>
              Home
            </Button>
          </li>
          <li>
            <Button variant="outlined" onClick={this.props.renderProjects}>
              Projects
            </Button>
          </li>
          <li>
            <Button variant="outlined" onClick={this.props.renderContacts}>
              Contacts
            </Button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

{
  /* <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact /> 
        <SocialLinks />
        <Footer /> */
}
