import React, { Component } from 'react';
import { Space } from './ThreeD/Space';
import './Style.css';
import resume from '../Images/Simon Virag CV.pdf';
import NavbarMenu from '../Components/NavbarMenu';


class Resume extends Component {

  componentDidMount(){

    Space();
  }
  
    render() {
      return (
        <html>
        <head></head>
        <body>
          
        <canvas id="bg"></canvas> 
        <main>
          <div align='center'>
          <NavbarMenu/>

           <h2>Resume</h2>
    
           

          </div>
          </main>
          </body>
          </html>
      );
    }
}

export default Resume;