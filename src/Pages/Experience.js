import React, { Component } from 'react';
import { Space } from './ThreeD/Space';
import './Style.css';
import NavbarMenu from '../Components/NavbarMenu';

class Experience extends Component {

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
        <div align='right'>

        <NavbarMenu/>

          <h2>Experience</h2>

          

        </div>
        </main>
        </body>
        </html>
    );
  }
}

export default Experience;