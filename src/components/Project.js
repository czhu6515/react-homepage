import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div id="project-wrapper" className="animated fadeIn">
        <img id="project-img" src={this.props.img} alt={this.props.alt} />
        <div id="project-links-wrapper" className="animated fadeInDown">
          <a id="project-url" href={this.props.url}>
            <i className="fa-3x fas fa-link" />
          </a>
          <a id="project-github" href={this.props.git}>
            <i className="fa-3x fab fa-github" />
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
