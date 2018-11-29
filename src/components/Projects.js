import React, { Component } from "react";
import Project from "./Project";
import ProjectIndicator from "./ProjectIndicator";

import img1 from "../imgs/mock-up.png";
import img2 from "../imgs/meet-n-eat.png";
import img3 from "../imgs/syndeseed.png";
import img4 from "../imgs/static-home.png";
import img5 from "../imgs/customer-segments.png";

class Projects extends Component {
  render() {
    return (
      <div id="gallery" className="animated fadeIn">
        <div id="project-carousel">
          {this.props.project === 1 ? (
            <div />
          ) : (
            <i
              className="fa-3x fas fa-angle-left"
              onClick={this.props.prevProject}
            />
          )}

          {this.props.project === this.props.numOfProjects ? (
            <div />
          ) : (
            <i
              className="fa-3x fas fa-angle-right"
              onClick={this.props.nextProject}
            />
          )}
        </div>

        {this.props.project === 1 ? (
          <div className="animated fadeIn">
            <Project
              project={this.props.project}
              img={img4}
              alt={"Static-Home"}
              url={"https://czhu6515.github.io"}
              git={"https://github.com/czhu6515/czhu6515.github.io"}
              title={"Github Pages Portfolio"}
              description={
                "Static portfolio made with only HTML and CSS hosted by GitHub pages"
              }
            />
          </div>
        ) : this.props.project === 2 ? (
          <Project
            project={this.props.project}
            img={img1}
            alt={"Mock-Up"}
            url={
              "https://czhu6515.github.io/projects/week1project-master/index.html"
            }
            git={"https://github.com/czhu6515/week1project"}
            title={"Mock-up"}
            description={
              "First week mock-up project designed to be mobile responsive"
            }
          />
        ) : this.props.project === 3 ? (
          <div className="animated fadeIn">
            <Project
              project={this.props.project}
              img={img2}
              alt={"Meet-n-Eat"}
              url={
                "https://czhu6515.github.io/projects/week1project-master/index.html"
              }
              git={"https://github.com/czhu6515/week1project"}
              title={"Meet 'n Eat"}
              description={
                "Front-end design for a service which allowed strangers to meet and eat together. First project using React and Google Places API."
              }
            />
          </div>
        ) : this.props.project === 4 ? (
          <Project
            project={this.props.project}
            img={img3}
            alt={"SyndeSeed"}
            url={"https://syndeseed.herokuapp.com"}
            git={"https://github.com/wyncode/angel"}
            title={"SyndeSeed"}
            description={
              "Full-stack web app using Ruby on Rails with a React on Rails front-end. Users can sign up as either an Entrepreneur or an Investor and be matched based on custom matching parameters and custom matching algorithm"
            }
          />
        ) : this.props.project === 5 ? (
          <div className="animated fadeIn">
            <Project
              project={this.props.project}
              img={img5}
              alt={"customer-segments"}
              url={
                "https://github.com/czhu6515/Udacity-Nanodegree/blob/master/customer_segments/customer_segments.ipynb"
              }
              git={
                "https://github.com/czhu6515/Udacity-Nanodegree/tree/master/customer_segments"
              }
              title={"Customer Segments Analysis"}
              description={
                "Jupyter Notebook detailing analysis of customer segments using"
              }
            />
          </div>
        ) : (
          <div />
        )}

        <ProjectIndicator
          project={this.props.project}
          numOfProjects={this.props.numOfProjects}
        />
      </div>
    );
  }
}

export default Projects;
