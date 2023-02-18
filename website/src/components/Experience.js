import React from 'react';
import Divider from './Divider';
import "./Experience.css"

const experiences = [
  {
    id: 1,
    companyName: 'ABC Inc.',
    position: 'Frontend Developer',
    time: 'June 2018 - present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies massa velit, ac mattis orci elementum vel. Phasellus sodales vel enim sit amet vestibulum. Sed eu augue auctor, fermentum orci non, dictum nunc. Sed sit amet lorem vel tellus sagittis ultricies. Nam vitae felis a magna lobortis pretium vitae a erat. ',
  },
  {
    id: 2,
    companyName: 'XYZ Company',
    position: 'Software Engineer',
    time: 'March 2016 - May 2018',
    description: 'Ut ac enim mauris. Integer commodo euismod nunc, at iaculis quam commodo in. Vivamus dapibus vitae risus ut molestie. Vivamus id aliquet orci. Sed faucibus enim ut mauris aliquam commodo. Duis tincidunt libero lectus, sed egestas nulla sollicitudin sed. ',
  },
  {
    id: 3,
    companyName: '123 Corporation',
    position: 'Web Developer',
    time: 'January 2014 - February 2016',
    description: 'Fusce in rutrum nibh. Curabitur condimentum mi vel velit mollis tincidunt. Suspendisse bibendum euismod nunc a suscipit. Duis eleifend ante eu turpis bibendum, et posuere metus scelerisque. Etiam hendrerit, est at tincidunt posuere, arcu est bibendum ante, eu ultrices ex augue non dolor. ',
  }
];



const Experience = () => {
  return (
    <div className="experience">
      <h1>My Experience</h1>
      <Divider />
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div key={experience.id} className={`timeline__card ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="timeline__header">
              <h3>{experience.companyName}</h3>
              <h4>{experience.position}</h4>
              <p>{experience.time}</p>
            </div>
            <div className="timeline__details">
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
