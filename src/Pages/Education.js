import React, { Component } from 'react';
import Certificate from '../Components/Certificate';
import Gooogle1 from '../Images/Certificates/Google Python 1-1.png';
import Michigan1 from '../Images/Certificates/Michigan 1-1.png';
import Station1 from '../Images/Certificates/Simon - The Complete Cyber Security Course - Volume 1 - Hackers Exposed  Certificate-2-1.png';
import Station2 from '../Images/Certificates/Simon - The Complete Cyber Security Course - Volume 2 - Network Security  Certificate-2-1.png';
import Station3 from '../Images/Certificates/Simon - The Complete Cyber Security Course - Volume 3 - Anonymous Browsing  Certificate-2-1.png';
import Station4 from '../Images/Certificates/Simon - The Complete Cyber Security Course - Volume 4 - End Point Protection  Certificate-2-1.png';

import KCLbuilding from '../Images/Schools/KCLbuilding.png'
import MUWCIbuilding from '../Images/Schools/MUWCIbuilding.png'
import RFGbuilding from '../Images/Schools/RFGbuilding.png'
import KCLlogo from '../Images/Schools/KCLlogo.png'
import MUWCIlogo from '../Images/Schools/MUWCIlogo.png'
import RFGlogo from '../Images/Schools/RFGlogo.png'


import { Space } from './ThreeD/Space';
import './Style.css';
import './Education.css';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import NavbarMenu from '../Components/NavbarMenu';


class Education extends Component {

    componentDidMount(){

    const scene = Space();
      }

  render() {
    return (
      <html>
      <head>
      <title>Education</title>
      </head>
      <body>
      <canvas id="bg"></canvas> 
  <main>
    
    
        <div class="education">
        <NavbarMenu/>
       

        <h2>Education</h2>
          <h3>Education has been my fuel and motivation</h3>
        <p>I always loved school and enjoyed learning new things about our world. </p>

<h3> My educational journey</h3>
<div class='space'>
<section>
<h1> 2020 – 2024: King's College London</h1>

<h2>Certification/ Degree: MSci Computer Science </h2>

<div id="wrapper">
<div id="first">
<h2>Modules taken: </h2>
<ul> 
<h4>Year 1</h4>
  <li>Data Structures</li>
  <li>Database Systems</li>
  <li>Introduction to Software Engineering</li>
  <li>Mathematics for Engineers</li>
  <li>Computer Systems</li>
  <li>Foundations of Computing</li>
  <li>Programming Practice and Applications</li>
</ul>

<ul> <h2>Societies</h2>
  <li>King's Business Club: Technical Associate</li>
</ul>
</div>
<div id="second">

<img src={KCLbuilding} alt="KCL Strand Campus" />
   
</div>
</div>
</section>
</div>


<div class='space'>
<section>
<h1> 2018 – 2020: Mahindra United World College of India</h1>
<h2>Certification/ Degree: International Baccelurate</h2>
<div id="wrapper">
<div id="first">
<ul> <h2>Subjects</h2>
  <li>Mathematics:  Higher Level</li>
  <li>Physics:  Higher Level</li>
  <li>Computer Science:  Higher Level</li>
  <li>English B: Higher Level</li>
  <li>Economics: Standard Level</li>
  <li>Hungarian Literature:  Standard Level</li>
</ul>

<ul> <h2>Societies</h2>
  <li>Robotics</li>
  <li>High School Science</li>
  <li>MUWCI Merchandise</li>
  <li>Table Tenis </li>
  <li>Stock Trading</li>
</ul>
</div>

<div id="second">
<img src={MUWCIbuilding} alt="MUWCI Campus" />

</div>
</div>
</section>
</div>

<div class='space'>
<section>
<h1> 2013 – 2018: II. Rákóczi Ferenc Secondary School</h1>
<h2>Certification/ Degree: Hungarian Baccelurate</h2>

<div id="wrapper">
<div id="first">
<ul> <h2>Subjects</h2>

<h4>Higher Level Subjects:</h4>

  <li>Mathematics</li>
  <li>Physics</li>
  <li>Computer Science</li>
  <li>Biology</li>

  <h4>Standard Level Subjects:</h4>

  <li>Hungarian Literature</li>
  <li>Hungarian Language</li>
  <li>English</li>
  <li>Spanish</li>
  <li>Chemistry</li>
  <li>History</li>
  <li>Arts</li>
  <li>P.E.</li>
  <li>Arts</li>
</ul>

<ul> <h2>Societies</h2>
  <li>Robotics</li>
</ul>
</div>
<div id="second">
<img src={RFGbuilding} alt="RFG School Building" width='' height=''/>
</div>

</div>
</section>
<h1>I hope this journey never ends!</h1>
</div>



<div class='space'>
<h2>Honours and Awards</h2>
<section>
<ul> 
  <li> <h4>Google Europe Scholarship for Students with Disabilities 2021</h4></li>
  <li><h4>FIRST Tech Challenge 2019 India – Winning Team Alliance Award</h4></li>
  <li><h4>Robotsumo Competition of Esztár - National 2nd Place Prize</h4></li>
  <li><h4>Robotsumo Competition of Kecskemét - 1st Prize Award</h4></li>
  <li> <h4>Infósok viadala - International 3rd place</h4></li>
  <li> <h4>Infósok viadala – International  4th place + Best Video Prize</h4> </li>
  <li> <h4>FIRST Lego League 2016 Hungary – 2nd Prize award</h4></li>
</ul>
</section>
</div>


          <h2>Certificates</h2>

          <h3></h3>
          
<div class="grid">
<Certificate alt='Google – Crash Course on Python' src = {Gooogle1}/>
<Certificate alt='Michingan' src = {Michigan1}/>
<Certificate alt='StationX 1' src = {Station1}/>
<Certificate alt='StationX 2' src = {Station2}/>
<Certificate alt='StationX 3' src = {Station3}/>
<Certificate alt='StationX 4' src = {Station4}/>
</div>



        </div>
        </main>
        </body>
        </html>
    );
  }
}

export default Education;