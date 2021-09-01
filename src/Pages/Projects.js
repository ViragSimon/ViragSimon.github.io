import React, { Component } from 'react';
import { Space } from './ThreeD/Space';
import ReactTextFormat from 'react-text-format';
import './Style.css';
import './Experience.css';
import ProjectElement from '../Components/ProjectElement';
import NavbarMenu from '../Components/NavbarMenu';


const websiteTech=["Javascript", "React","Three.js","VScode"];
const buttonTech=["Java", "JavaFX","VScode"];
const labTech=["Frontend: Java, JavaFX","Backend: MYSQL","Netbeans"];
const houseTech=["Arduino modules for tasks","Raspberry Pi as a central module","ESP8266 Arduino module for communication with the application", "Application frontend: C / C++","Application backend: MYSQL / C" ];
class Projects extends Component {



  componentDidMount(){

const scene = Space();
  }

  render() {
    return (
      <html>
      <head>
      <title>Projects</title>
      </head>
      <body>
      <canvas id="bg"></canvas> 
      <main>
        
        <div align='center'>
        <NavbarMenu/>
          <h2>Projects</h2>

<div class='space'>
         <section>
         <ProjectElement name="Personal website" technologies={websiteTech} description="" />
         </section>
         </div>

<div class='space'>
         <section>
         <ProjectElement name="JavaFX Button Library" technologies={buttonTech} description="" />
         </section>
         </div>

<div class='sapce'>
          <section>
         <ProjectElement name="Lab Apparatus Management System " technologies={labTech} description="" />
         </section>
         </div>
         
<div class='space'>
<section>
         <ProjectElement name="Automated House Circuit with Application" technologies={houseTech} description="" />
         </section>
         </div>
        
        </div>
        </main>
    
        <script type="module" src="./Pages/ThreeD/Space.js"></script>
        </body>
        </html>
    );
  }
}

export default Projects;