import React, { Component } from 'react';
import { Space } from './ThreeD/Space';
import './Style.css';
import NavbarMenu from '../Components/NavbarMenu';
import ExperienceElement from '../Components/ExperienceElement';
import './Experience.css';

const googleProjects = ['Participated in 6 weekly coding chllaenge aimed to test the participants knowledge and won the challange of the 3rd week'];
const googleSkills = ["Java"];
const googlePictures = [  
<img src="path-to-img"  role="presentation" />,

];



const KBCProjects = ["King’s College Business Club website maintenance","UI/UX design","Website design/ Launch","SEO"];
const KBCSkills = ["WordPress","Firebase","Matlab","R"];
const KBCPictures = [  
  <img src="path-to-img" role="presentation" />,
  
  ];
  
  
  

const UWCProjects = ["Taught Natural Sciences, Mathematics and Computer Science","Student Science Fair","Infinite Mirror Construction",""];
const UWCSkills = ["Teaching","Physics", "Chemistry", "Biology","Programming","Mathematics"];
const UWCPictures = [  
  <img src="path-to-img" role="presentation" />,
 
  ];
  
  
  

const RFGProjects = ["FLL 2016","FLL 2017","WRO 2017","FLL 2018", "WRO 2018", "Robotsumo Competition of Esztár","Robotsumo Competition of Kecskemét","Robotics Education Seminars"];
const RFGSkills = ["C","RobotC","Leadership"];
const RFGPictures = [  
  <img src="path-to-img" role="presentation" />,

  ];
  
  
  

const BaroProjects = ["2013 Budapest Annual Qualifying Disaster Management Exercises", "2014 Budapest Annual Qualifying Disaster Management Exercises","2015 Budapest Annual Qualifying Disaster Management Exercises", "2016 Budapest Annual Qualifying Disaster Management Exercises", "2017 Budapest Annual Qualifying Disaster Management Exercises", "2018 Budapest Annual Qualifying Disaster Management Exercises", "2019 Budapest Annual Qualifying Disaster Management Exercises"];
const BaroSkills = ["High-performance technical rescue vehicle operation","Fire fighting","Rescue of the injured"];
const BaroPictures = [  
  <img src="path-to-img"  role="presentation" />,
  ];
  
  
  

class Experience extends Component {

  


componentDidMount(){

  const scene = Space();

  
}

  render() {
    return (
      <html>
      <head>
      <title>Experience</title>
      </head>
      <body>
      <canvas id="bg"></canvas> 
      <main>
      
        <div align='center' id= "experience">
        <NavbarMenu/>

        <h1> Being updated!</h1>
      <h1> I am really sorry :( things are being updated that's why you can't see everything or may face some issues </h1>
      <h1> Come back later :) </h1>

          <h2>Experience</h2>

         <div class= 'space'>
          <section>
          <ExperienceElement name='Google – Get Ahead ( 2021 July - August )' role='Participant' 
          description='I participated in this 6 weeks program that helped chosen students to improve their coding skills. Moreover, I had the chance to attend presentations and sessions held by Google engineers. Additionaly, it is also helped to see how Google works inside' 
          projects={googleProjects} skills={googleSkills}/>
</section>
</div>

<div class='space'>
         <section>
          <ExperienceElement name="King's Business Club ( October 2020 - June 2021)" 
          role='Technical Associate' description="I joined King's Business Club as a Technical Associate. As a memeber I was responsible for the websites maintenance and update in WordPress as wel as Firebase. Moreover, I worked with R and Matlab to present data to the marketing team in order to improve our marketing strategy. Additionally, I was part of the design team that was working in one better UX design."
           projects={KBCProjects} skills={KBCSkills}/>
         </section>
         </div>

          <h2>Volunteer work</h2>

<div class='space'>
        <section>
          <ExperienceElement name="UWC Mahindra College (August 2018 - May 2020)" role=' Student Teacher' 
          description='I taught mathematics and sciences to secondary school students from less-advantaged background in rural India. The subjects which I taught included biology, chemistry, physics , computer science as well as the required mathematics for the mentioned subjects. Alongside class room teaching we executed relevant experiments and projects that were showcased in a science fair. All of the teeaching was collaborated and communicated with a multicultural team of varying levels of English' 
          projects={UWCProjects} skills={UWCSkills}/>
          </section>
          </div>
          <div class='space'>
          <section>
          <ExperienceElement name="II. Rákóczi Ferenc Secondary School Robotics Team (September 2015 - May 2018)" role='Founder/Leader' 
          description='As a leader I was responsible for the funding of the team in terms of finding sponsors as well as I was trusted with . Moreover, I had to make design decisions in software and hardware parts. I worked closely in my team in order to achieve the maximum efficiency and comfortable work enviorment. ' 
          projects={RFGProjects} skills={RFGSkills}/>
          </section>
          </div>
          <div class='space'>
          <section>
          <ExperienceElement name="Baron Podmaniczky III. János Honvéd Association (May 2013 - Present)" role=' Manager of Search and Rescue' 
          description="Being a part of a searcha dnrescue team comes with great responsibilty. As a manager I am responsible for the organization of trainings and planning of scenarios. Furthermore, I am in charge of operating tow high-performance rescue vehicle when it is needed. Finally, during showcasing events or training I am responsoble for the preparation of team members with the given scenario and plans."
          projects={BaroProjects} skills={BaroSkills}/>
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

export default Experience;