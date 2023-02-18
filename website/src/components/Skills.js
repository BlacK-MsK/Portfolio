import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faServer, faCloud, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';
import Divider from './Divider';

const skillsList = [
  {
    name: 'HTML',
    icon: faHtml5,
    color: '#E44D26',
    details: 'Proficient in writing semantic and accessible HTML5.'
  },
  {
    name: 'CSS',
    icon: faCss3Alt,
    color: '#264DE4',
    details: 'Expertise in styling with CSS and preprocessors like Sass.'
  },
  {
    name: 'JavaScript',
    icon: faJsSquare,
    color: '#F7DF1E',
    details: 'In-depth knowledge of vanilla JS and popular frameworks like React and Angular.'
  },
  {
    name: 'React',
    icon: faReact,
    color: '#61DBFB',
    details: 'Expertise in building scalable and performant React applications.'
  },
  {
    name: 'Node.js',
    icon: faNodeJs,
    color: '#339933',
    details: 'Familiarity with building backends with Node.js and popular frameworks like Express.'
  },
  {
    name: 'Backend',
    icon: faServer,
    color: '#F7DF1E',
    details: 'In-depth knowledge of building and deploying RESTful APIs and Microservices.'
  },
  {
    name: 'Databases',
    icon: faDatabase,
    color: '#00758F',
    details: 'Expertise in working with databases like MySQL, PostgreSQL, MongoDB and Firebase.'
  },
  {
    name: 'Coding',
    icon: faCode,
    color: '#00CCCC',
    details: 'Passion for coding and building innovative solutions to real-world problems.'
  },
];

function Skills() {
  return (
    <>
    <h1>My Skills</h1>
    <Divider />
    <div className="skills-container">
      {skillsList.map(skill => (
        <div className="skill-card" key={skill.name}>
          <div className="skill-icon-container">
            <FontAwesomeIcon icon={skill.icon} size="2x" color={skill.color} />
          </div>
          <div className="skill-name">
            {skill.name}
          </div>
          <div className="skill-details">
            {skill.details}
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Skills;
