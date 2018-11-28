import React, { Component } from "react";
import Home from "./Home";
import Projects from "./Projects";
import Contacts from "./Contacts";
import { CSSTransitionGroup } from "react-transition-group";

class Showcase extends Component {
  render() {
    const step = this.props.step;

    switch (step) {
      case 1:
        return (
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={10000}
            transitionEnter={false}
            transitionLeave={false}
          >
            <Home key="home" />
          </CSSTransitionGroup>
        );

      case 2:
        return (
          <Projects
            key="projects"
            project={this.props.project}
            prevProject={this.props.prevProject}
            nextProject={this.props.nextProject}
          />
        );
      case 3:
        return <Contacts key="contacts" />;
    }
  }
}

export default Showcase;
