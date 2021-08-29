import React, { Component } from 'react';
import { Space } from './ThreeD/Space';
import ReactTextFormat from 'react-text-format';
import './Style.css';
import './Experience.css';
import ProjectElement from '../Components/ProjectElement';



const websiteTech=["Javascript", "React","Three.js","VScode"];
const buttonTech=["Java", "JavaFX","VScode"];
const labTech=["Frontend: Java, JavaFX","Backend: MYSQL","Netbeans"];
const houseTech=["Arduino modules for tasks","Raspberry Pi as a central module","ESP8266 Arduino module for communication with the application", "Application frontend: C / C++","Application backend: MYSQL / C" ];
class Projects extends Component {



  componentDidMount(){

    //Space();
  }

  render() {
    return (
      <html>
      <head></head>
      <body>
      <canvas id="bg"></canvas> 
    
        <div align='center'>
          <h2>Projects</h2>
         
         <ProjectElement name="Personal website" technologies={websiteTech} description="" />

         <ProjectElement name="JavaFX Button Library" technologies={buttonTech} description="" />

         <ProjectElement name="Lab Apparatus Management System " technologies={labTech} description="" />

         <ProjectElement name="Automated House Circuit with Application" technologies={houseTech} description="" />

        
        </div>
       
        <script type="module" src="./Pages/ThreeD/Space.js"></script>
        </body>
        </html>
    );
  }
}

export default Projects;