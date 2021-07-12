import React, { Component } from 'react';
import { Space } from './ThreeD/Space';
import ReactTextFormat from 'react-text-format';
import './Style.css';
import './Home.css';

class Projects extends Component {

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
        <div >
         

        
        </div>
        </main>
        <script type="module" src="./Pages/ThreeD/Space.js"></script>
        </body>
        </html>
    );
  }
}

export default Projects;