import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div id="project-wrapper" className="animated fadeIn">
        <img id="project-img" src={this.props.img} alt={this.props.alt} />
        <div id="project-links-wrapper" className="animated fadeInDown">
          <a
            id="project-url"
            href={this.props.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-3x fas fa-link" />
          </a>
          <a
            id="project-github"
            href={this.props.git}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-3x fab fa-github" />
          </a>
        </div>
        <h2 id="project-title">{this.props.title}</h2>
        <p id="project-description">{this.props.description}</p>
      </div>
    );
  }
}

export default Project;
