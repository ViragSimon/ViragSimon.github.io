import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import KBC from "../Images/Workplaces/KBC.png"
import HSS from "../Images/Workplaces/HSS.png"
import Baro from "../Images/Workplaces/Baro.png"
import './Slide.css'

const Slideshow = (props) => {

return(
  
<>
<div class="container">
<img  alt={props.alt} src={props.certificate}  width="500" height="300"/>
  <div class="overlay">
    <div class="text">
    <h3>{props.place}</h3>
    <h4>{props.title}</h4>
    </div>
  </div>
</div>
</>

);
};

export default Slideshow;