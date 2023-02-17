import React from 'react';
import './Experience.css'

function Experience() {
  return (
    <div id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Software Engineer</h3>
          <p>ABC Company</p>
          <p>2019 - Present</p>
          <ul>
            <li>Developed and maintained web applications using React and Node.js</li>
            <li>Implemented RESTful APIs using Express and MongoDB</li>
            <li>Collaborated with cross-functional teams to design and deliver quality software solutions</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Frontend Developer</h3>
          <p>XYZ Company</p>
          <p>2017 - 2019</p>
          <ul>
            <li>Developed user interfaces for web applications using React and Redux</li>
            <li>Worked with designers to implement responsive designs</li>
            <li>Implemented automated testing using Jest and Enzyme</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Experience;
