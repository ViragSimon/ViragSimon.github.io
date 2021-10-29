import React, { Component } from 'react';
import UniCard from '../Components/UniCard';
import './Home.css';
import './Style.css';
import KCLbuilding from '../Images/Schools/KCLbuilding.png'
import MUWCIbuilding from '../Images/Schools/MUWCIbuilding.png'
import RFGbuilding from '../Images/Schools/RFGbuilding.png'
import KCLlogo from '../Images/Schools/KCLlogo.png'
import MUWCIlogo from '../Images/Schools/MUWCIlogo.png'
import RFGlogo from '../Images/Schools/RFGlogo.png'
import Simon from '../Images/Me/SimonOne.png'
import {Carousel} from '3d-react-carousal';
import KBC from "../Images/Workplaces/KBC.png"
import HSS from "../Images/Workplaces/HSS.png"
import Baro from "../Images/Workplaces/Baro.png"
import KSC from "../Images/Workplaces/KCL_Rocketry.png"




import Slide from '../Components/Slide';


import TypeWriterEffect from 'react-typewriter-effect';



import { CardView } from 'react-card-with-image';
import 'react-card-with-image/dist/index.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

import * as THREE from 'three';
import { Space } from './ThreeD/Space';

import { SkillBar } from 'react-skills';
import NavbarMenu from '../Components/NavbarMenu';

//import javaButton from '../Images/javabutton.png';
// import lab from '../Images/lab.png';
// import website from '../Images/website.png';
// import datingApp from '../Images/datingapp.png';
// import houseCircuit from '../Images/arduino.png';



// const items = [
//   {
//     id: 1,
//     header: 'Java Buttons',
//     description:
//       'A java library that helps create custome shaped button in javafx',
//     image: javaButton
//   },
//   {
//     id: 2,
//     header: 'Apparatus Management System',
//     description:
//       'An application that helps the laboratory managers keep tracck of their stocks and assign lab usage permissions to people ',
//     image: lab
//   },
//   {
//     id: 3,
//     header: 'Personal Website',
//     description:
//       'This website, that aims to show my passion about computer science and technology',
//     image: website
//   },
//   {
//     id: 4,
//     header: 'University Dating App',
//     description:
//       'An app that helps university students to find their partners based on the search criterias',
//     image: datingApp
//   },
//   {
//   id: 5,
//   header: ' Automated House Curcuit',
//   description:
//     'A small circuit built with arduino and raspberry pi that helps keep track of severeal duties around the house',
//   image: houseCircuit
// }
// ];



let slides = [
  <Slide alt='KBC' title='Technical Associate' place="King's Business Club" certificate={KBC}/>,
  <Slide alt='HSS' title='Student Teacher (Volunteer)' place='UWC Mahindra College' certificate={HSS}/> ,
  <Slide alt='Baro' title='Search and Rescue (Volunteer)' place='Baron Podmaniczky Association' certificate={Baro}/> ,
  <Slide alt='KSC' title='Sub-commitee ' place='KCL Space Society -  Rocketry Commitee' certificate={KSC}/>  ];



  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

class Home extends Component {
  

  componentDidMount(){

    const scene = Space();

    
    
    const simonTexture = new THREE.TextureLoader().load(Simon);

const simon1 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: simonTexture }));
const simon2 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: simonTexture }));





scene.add(simon1);
scene.add(simon2);



simon1.position.z = -5;
simon1.position.x = 5;


simon2.position.z = -5;
simon2.position.x = -6;


  }

  render() {
    return (
      
      <html>
      <head>
     <title>Home</title>
     </head>
      <body>
      <canvas id="bg"></canvas>  
      <main>
        <div class='home' align='center'>
        <NavbarMenu/>
<section class='left'>
        <TypeWriterEffect
        textStyle={{
          color: '#FFFFFF',
          fontWeight: 500,
          fontSize: '1.5em',

        }}
        startDelay={2000}
        cursorColor="#FFFFFF"
        multiText={[
          'Thank you for coming by! I hope you like my website!',
          '来てくれてありがとう！ 私のウェブサイトが気に入っていただければ幸いです。',
          'Danke, dass Sie vorbeigekommen sind! Ich hoffe, Ihnen gefällt meine Website!',
          'Köszönöm, hogy eljöttél! Remélem tetszik a weboldalam!',
          'Спасибо, что зашли! Надеюсь, вам понравился мой сайт!',
          '¡Gracias por venir! ¡Espero que les guste mi sitio web!',
          '谢谢你的光临！ 我希望你喜欢我的网站！',
          'Geldiğiniz için teşekkürler! Umarım web sitemi beğenirsiniz!',
          'आपके आने के लिए धन्यवाद! मुझे आशा है कि आपको मेरी वेबसाइट पसंद आएगी!',
          'Thank you for coming by! I hope you like my website!'
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={30}
        hideCursorAfterText = 'true'
      />


</section>

<div class='space'>
<h2>Details</h2>
  
  <section class='left' >
  <TypeWriterEffect
           textStyle={{
            fontWeight: 500,
            fontSize: '1.5em',
          }}
            startDelay={100}
            cursorColor="black"
            text="Age: 19"
            typeSpeed={100}
            hideCursorAfterText = 'true'
          
          />
       

<br/>
<TypeWriterEffect
           textStyle={{
            fontWeight: 500,
            fontSize: '1.5em',
          }}
           startDelay={100}
           cursorColor="black"
           text="Nationality: Hungarian"
           typeSpeed={100}
           hideCursorAfterText = 'true'
         
         />
         <br/>

<TypeWriterEffect
           textStyle={{
            fontWeight: 500,
            fontSize: '1.5em',
          }}
           startDelay={100}
           cursorColor="black"
           text="Location: London, UK"
           typeSpeed={100}
           hideCursorAfterText = 'true'
         
         />
<br/>
<TypeWriterEffect
           textStyle={{
            fontWeight: 500,
            fontSize: '1.5em',
          }}
           startDelay={100}
           cursorColor="black"
           text="Occupation: Student @ King's College London"
           typeSpeed={100}
           hideCursorAfterText = 'true'
         
         />

</section>

<h2>Feel free to contact me!</h2>

</div>


<div class='space'>
<h2>Skills</h2>
<SkillBar name="Java" level={100} color="orange" duration={30}/>
<br/>
<SkillBar name="Python" level={80} color="green" duration={30}/>
<br/>
<SkillBar name="Javascript" level={55} color="pink" duration={30} />
<br/>
<SkillBar name="ReactJS" level={60} color="blue" duration={30}/>
<br/>
<SkillBar name="Flutter" level={80} color="lightblue" duration={30}/>
<br/>
<SkillBar name="C++" level={70} color="purple" duration={30}/>
<br/>
<SkillBar name="SQL" level={100} color="grey" duration={30} labelWidth={100}/>
</div>



          
          <h2>Education</h2>

<div id="schools" class='space'>
<ul>
<li><UniCard alt='KCL picture' school="King's College London" degree='MSci Computer Science' years='2020 – 2024' schoolview={KCLbuilding} logo={KCLlogo}/></li>
<li><UniCard alt='UWC picture' school="UWC Mahindra College" degree='International Baccelurate Diploma' years='2018 – 2020' schoolview={MUWCIbuilding} logo={MUWCIlogo}/></li>
<li><UniCard alt='RFG picture' school="II. Rákóczi Ferenc Secondary School" degree='Hungarian Baccelurate' years='2013 – 2018' schoolview={RFGbuilding} logo={RFGlogo}/></li>
</ul>
</div>

<h2>Experience</h2>
<div align='left' class='space'>
<Carousel slides={slides} autoplay={true} interval={5000}/>
</div>


{/* <h2>Projects</h2>

<div class='space'> 
<CardView
    items={items}
    activeColor='#345789'
    imageHeight='500px'
    imageWidth='600px'
    
  />
  </div> */}
  

        </div>
        </main>

        <script type="module" src="./Pages/ThreeD/Space.js"></script>
        </body>
        </html>
    );
  }
}

export default Home;