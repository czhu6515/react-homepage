import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <li onClick={this.props.renderHome}>Home</li>
          <li onClick={this.props.renderProjects}>Projects</li>
          <li onClick={this.props.renderContacts}> Contacts</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
