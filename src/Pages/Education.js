import React, { Component } from 'react';
import Certificate from '../Components/Certificate';
import Gooogle1 from '../Images/Certificates/Google Python 1-1.png';
import Michigan1 from '../Images/Certificates/Michigan 1-1.png';
import Station1 from '../Images/Certificates/Simon - The Complete Cyber Security Course - Volume 1 - Hackers Exposed  Certificate-2-1.png';
import Station2 from '../Images/Certificates/Simon - The Complete Cyber Security Course - Volume 2 - Network Security  Certificate-2-1.png';
import Station3 from '../Images/Certificates/Simon - The Complete Cyber Security Course - Volume 3 - Anonymous Browsing  Certificate-2-1.png';
import Station4 from '../Images/Certificates/Simon - The Complete Cyber Security Course - Volume 4 - End Point Protection  Certificate-2-1.png';
import { Space } from './ThreeD/Space';
import './Style.css';

class Education extends Component {

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
          <h2>Education</h2>
<h3>Education has been my fuel and motivation</h3>
<p>I always loved school and enjoyed learning new things about our world. </p>

<h3> My educational journey</h3>


<h3>I hope this journey never ends!</h3>

          <h2>Certificates</h2>

          <h3></h3>
          
<div>
<Certificate alt='Google – Crash Course on Python' src = {Gooogle1}/>
<Certificate alt='Google – Crash Course on Python' src = {Michigan1}/>
<Certificate alt='Google – Crash Course on Python' src = {Station1}/>
<Certificate alt='Google – Crash Course on Python' src = {Station2}/>
<Certificate alt='Google – Crash Course on Python' src = {Station3}/>
<Certificate alt='Google – Crash Course on Python' src = {Station4}/>



</div>
        </div>
        </main>
        </body>
        </html>
    );
  }
}

export default Education;