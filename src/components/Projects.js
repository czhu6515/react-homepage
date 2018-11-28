import React, { Component } from "react";
import Project from "./Project";
import img1 from "../imgs/mock-up.png";
import img2 from "../imgs/meet-n-eat.png";
import img3 from "../imgs/syndeseed.png";

class Projects extends Component {
  render() {
    return (
      <div id="gallery" className="animated fadeIn">
        <div id="project-carousel">
          <i
            className="fa-3x fas fa-angle-left"
            onClick={this.props.prevProject}
          />
          <i
            className="fa-3x fas fa-angle-right"
            onClick={this.props.nextProject}
          />
        </div>
        {this.props.project === 1 ? (
          <div className="animated fadeIn">
            <Project
              project={this.props.project}
              img={img1}
              alt={"Mock-Up"}
              url={
                "https://czhu6515.github.io/projects/week1project-master/index.html"
              }
              git={"https://github.com/czhu6515/week1project"}
            />
          </div>
        ) : this.props.project === 2 ? (
          <Project
            project={this.props.project}
            img={img2}
            alt={"Meet-n-Eat"}
            url={
              "https://czhu6515.github.io/projects/week1project-master/index.html"
            }
            git={"https://github.com/czhu6515/week1project"}
          />
        ) : (
          <div className="animated fadeIn">
            <Project
              project={this.props.project}
              img={img3}
              alt={"SyndeSeed"}
              url={"https://syndeseed.herokuapp.com"}
              git={"https://github.com/wyncode/angel"}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Projects;
