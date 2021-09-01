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
         <ProjectElement name="Personal website" technologies={websiteTech} 
         description="This website was created in order to show who I am and things that I love to do. Additionally, to show my background and journey so far " />
         </section>
         </div>

<div class='space'>
         <section>
         <ProjectElement name="JavaFX Button Library" technologies={buttonTech} 
         description="I developed a Java Class Library (JCL) for javafx to create polygon shaped buttons for application. This included calculation of coordinates for the polygon, creation of shape of the polygon based on its corner points and rotation of the polygon. Moreover, based on given corner coordinates a unique shaped button can be created and rotated." />
         </section>
         </div>

<div class='space'>
          <section>
         <ProjectElement name="Lab Apparatus Management System " technologies={labTech} 
         description="As a part of my IB diploma, I was asked to create a system for a chosen client. I did a system for the laboratory manager at my school, so he looks after the chemicals and apparatus for natural sciences. The application/system achived the highest grade in IB." />
         </section>
         </div>
         

<div class='space'>
<section>
         <ProjectElement name="Automated House Circuit with Application" technologies={houseTech} 
         description="I built a smart house circuit with Arduinos and a Raspberry Pi. The house circuit was bale to work as smoke detector, water plants, adjust tmpreture, close shades based on the amount of sunlight, turn on/off lights and close/open doors on command. For the system I also built a simple application to control it and read particular values with it." />
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