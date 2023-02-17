import React from 'react';
import './Projects.css';


function Projects() {
  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#">View project</a>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a href="#">View project</a>
        </div>
        <div className="project-item">
          <h3>Project 3</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <a href="#">View project</a>
        </div>
      </div>
    </div>
  );
}


export default Projects;
