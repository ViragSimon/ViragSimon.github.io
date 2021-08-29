import React from "react";

import './ExperienceElement.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const ExperienceElement = (props) => {
    const projects = props.projects;
    const listProjects = projects.map((project) =>
      <li>{project}</li>
    );

    const skills = props.skills;
    const listSkills = skills.map((skill) =>
      <li>{skill}</li>
    );

return(

<>
<div>
          <h3>{props.name}</h3>


          <AliceCarousel mouseTracking items={props.pictures} />


          <div class="description">
          <h4>Role: &nbsp;</h4>
          <h4>{props.role}</h4>
          </div>

          
          <h4>Description of the role: </h4>
          <h4>{props.description}</h4>


          <h4>Project(s) worked on:</h4>
 
        <ul>{listProjects}</ul>

        <h4>Skills used in:</h4>
 
        <ul>{listSkills}</ul>
 

          </div>
</>
);
};

export default ExperienceElement;