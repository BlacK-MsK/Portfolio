import React from 'react';
import './Projects.css';

const project = {
  image: "https://imageio.forbes.com/specials-images/imageserve/614d55107441e2d9ba4238f6/The-7-Biggest-Artificial-Intelligence--AI--Trends-In-2022/960x0.jpg?format=jpg&width=960",
  title: "AI",
  description: "THis is my project",
  liveDemo: "https://github.com/BlacK-MsK/movie_rating",
  sourceCode: "https://github.com/BlacK-MsK/movie_rating"
}


function Projects() {
  return (
    <div className="project-card">
  <img src={project.image} alt={project.title} />
  <div className="project-details">
    <h2>{project.title}</h2>
    <p>{project.description}</p>
    <div className="project-links">
      {project.liveDemo && (
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      )}
      {project.sourceCode && (
        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      )}
    </div>
  </div>
</div>
  );
}


export default Projects;
