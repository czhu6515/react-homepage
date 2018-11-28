import React, { Component } from "react";

class Project extends Component {
  render() {
    return(
      <div id="project-wrapper">
        <img id="project-img" src={this.props.img} alt={this.props.alt} />
        <div id="project-links-wrapper" class="animated fadeInDown">
          <a id="project-url" href={this.props.url}>
            <i className="fa-3x fas fa-link"></i>
          </a>
          <a id="project-github" href={this.props.git}>
            <i className="fa-3x fab fa-github"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Project 
