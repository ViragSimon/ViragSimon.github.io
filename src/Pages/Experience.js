import React, { Component } from 'react';
import { Space } from './ThreeD/Space';
import './Style.css';
import NavbarMenu from '../Components/NavbarMenu';
import ExperienceElement from '../Components/ExperienceElement';


const googleProjects = ['Participated in 6 weekly coding chllaenge aimed to test the participants knowledge and won the challange of the 3rd week'];
const googleSkills = ["Java"];
const googlePictures = [  
<img src="path-to-img"  role="presentation" />,

];



const KBCProjects = ["King’s College Business Club website maintenance","UI/UX design","Website design/ Launch"];
const KBCSkills = ["Java"];
const KBCPictures = [  
  <img src="path-to-img" role="presentation" />,
  
  ];
  
  
  

const UWCProjects = ['Participated in 6 weekly coding chllaenge aimed to test the participants knowledge and won the challange of the 3rd week'];
const UWCSkills = ["Java"];
const UWCPictures = [  
  <img src="path-to-img" role="presentation" />,
 
  ];
  
  
  

const RFGProjects = ['Participated in 6 weekly coding chllaenge aimed to test the participants knowledge and won the challange of the 3rd week'];
const RFGSkills = ["Java"];
const RFGPictures = [  
  <img src="path-to-img" role="presentation" />,

  ];
  
  
  

const BaroProjects = ['Participated in 6 weekly coding chllaenge aimed to test the participants knowledge and won the challange of the 3rd week'];
const BaroSkills = ["Java"];
const BaroPictures = [  
  <img src="path-to-img"  role="presentation" />,
  ];
  
  
  

class Experience extends Component {

  


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


          <h2>Experience</h2>

         

          <ExperienceElement name='Google – Get Ahead ( 2021 July - August )' role='Participant' 
          description='I participated in this 6 weeks program that helped chosen students to improve their coding skills. Additionaly, it is also helped to see how Google workds inside' 
          projects={googleProjects} skills={googleSkills}/>


         
          <ExperienceElement name="King's Business Club ( October 2020 - June 2021)" role='Technical Associate' description='' projects={KBCProjects} skills={KBCSkills}/>
          

          <h2>Volunteer work</h2>

        
          <ExperienceElement name="UWC Mahindra College (August 2018 - May 2020)" role=' Student Teacher' description='' projects={UWCProjects} skills={UWCSkills}/>

          <ExperienceElement name="II. Rákóczi Ferenc Secondary School Robotics Team (September 2015 - May 2018)" role='Founder/Leader' description='' projects={RFGProjects} skills={RFGSkills}/>

          <ExperienceElement name="Baron Podmaniczky III. János Honvéd Association (May 2013 - Present)" role=' Manager of Search and Rescue' description='' projects={BaroProjects} skills={BaroSkills}/>

        </div>
        
        </body>
        </html>
    );
  }
}

export default Experience;