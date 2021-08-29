import React from "react";

import './ProjectElement.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const ProjectElement = (props) => {
    
    const technologies = props.technologies;
    const listTech = technologies.map((tech) =>
      <li>{tech}</li>
    );

return(

<>
<div>

<h3>{props.name}</h3>


          

<div id="wrapper">
        <div id="first">
        <h4>Description of the project: </h4>
          <h4>{props.description}</h4>
          </div>
          <div id="second">
          <AliceCarousel mouseTracking items={props.pictures} />
          </div>
          </div>

          <h4>Technologies used:</h4>
            <ul>{listTech}</ul>
          

          </div>
</>
);
};

export default ProjectElement;