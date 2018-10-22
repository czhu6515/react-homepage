import React from "react";
import Button from "@material-ui/core/Button";

class Navbar extends React.Component {
  renderHome = () => {
    this.props.renderHome();
  };

  renderProjects = () => {
    this.props.renderProjects();
  };

  renderContacts = () => {
    this.props.renderContacts();
  };

  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <li>
            <Button variant="outlined" onClick={this.renderHome}>
              Home
            </Button>
          </li>
          <li>
            <Button variant="outlined" onClick={this.renderProjects}>
              Projects
            </Button>
          </li>
          <li>
            <Button variant="outlined" onClick={this.renderContacts}>
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
