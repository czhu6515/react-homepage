import React, { Component } from "react";

class ProjectIndicator extends Component {
  render() {
    return (
      <div id="project-indicator">
        {this.props.project === 1 ? (
          <i className="fas fa-circle" />
        ) : (
          <i className="far fa-circle" />
        )}
        {this.props.project === 2 ? (
          <i className="fas fa-circle" />
        ) : (
          <i className="far fa-circle" />
        )}
        {this.props.project === 3 ? (
          <i className="fas fa-circle" />
        ) : (
          <i className="far fa-circle" />
        )}
        {this.props.project === 4 ? (
          <i className="fas fa-circle" />
        ) : (
          <i className="far fa-circle" />
        )}
        {this.props.project === 5 ? (
          <i className="fas fa-circle" />
        ) : (
          <i className="far fa-circle" />
        )}
      </div>
    );
  }
}

export default ProjectIndicator;
