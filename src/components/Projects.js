import React from 'react'
import projects from '../data/projects.json';
import Project from './Project'

class Projects extends React.Component {
  render() {
    return(
      <div>
        <h1>Projects</h1>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    )
  }
}


export default Projects