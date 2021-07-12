import React, { Component } from 'react';
import { Space } from './ThreeD/Space';
import './Style.css';

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
        <div >
          <h2>Experience</h2>

          

        </div>
        </main>
        </body>
        </html>
    );
  }
}

export default Experience;