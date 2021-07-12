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




import Slide from '../Components/Slide';


import TypeWriterEffect from 'react-typewriter-effect';



import { CardView } from 'react-card-with-image';
import 'react-card-with-image/dist/index.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

import * as THREE from 'three';
import { Space } from './ThreeD/Space';

import { SkillBar } from 'react-skills';
import NavbarManu from '../Components/NavbarMenu';
import NavbarMenu from '../Components/NavbarMenu';

const works = [
  {
src: KBC,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
src: Baro,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
src: HSS,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];



const items = [
  {
    id: 1,
    header: 'Java Buttons',
    description:
      'dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis. Aliquam placerat, justo sit amet mattis molestie, ipsum nisi congue turpis, in imperdiet nisi nisl sit amet arcu. Donec euismod eu ante quis elementum. Maecenas commodo erat',
    image: KBC
  },
  {
    id: 2,
    header: 'Apparatus Management System',
    description:
      'in metus quis tempor. Donec at venenatis magna, vel fringilla dui. Curabitur id gravida ipsum. Donec at mollis massa. Nullam metus elit, pret',
    image: HSS
  },
  {
    id: 3,
    header: 'Personal Website',
    description:
      'condimentum purus, non sagittis massa faucibus id. Sed finibus convallis lectus eu fringilla. Proin lacinia sem vitae nunc consectetur, a faucibus orci ultricie',
    image: Baro
  },
  {
    id: 4,
    header: 'University Dating App',
    description:
      'condimentum purus, non sagittis massa faucibus id. Sed finibus convallis lectus eu fringilla. Proin lacinia sem vitae nunc consectetur, a faucibus orci ultricie',
    image: Baro
  },
  {
  id: 5,
  header: ' Automated House Curcuit',
  description:
    'condimentum purus, non sagittis massa faucibus id. Sed finibus convallis lectus eu fringilla. Proin lacinia sem vitae nunc consectetur, a faucibus orci ultricie',
  image: Baro
},
{
  id: 6,
  header: 'Compressed Plasma Gas Gun',
  description:
    'condimentum purus, non sagittis massa faucibus id. Sed finibus convallis lectus eu fringilla. Proin lacinia sem vitae nunc consectetur, a faucibus orci ultricie',
  image: Baro
}

];



let slides = [
  <Slide alt='KBC' title='Technical Associate' place="King's Business Club" certificate={KBC}/>,
  <Slide alt='HSS' title='Student Teacher (Volunteer)' place='UWC Mahindra College' certificate={HSS}/> ,
  <Slide alt='Baro' title='Search and Rescue (Volunteer)' place='Baron Podmaniczky Association' certificate={Baro}/>  ];

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

class Home extends Component {
  

  componentDidMount(){

    const scene = Space();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const simonTexture = new THREE.TextureLoader().load(Simon);

const simon1 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: simonTexture }));
const simon2 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: simonTexture }));



scene.add(simon1);
scene.add(simon2);

simon1.position.z = -5;
simon1.position.x = 5;


simon2.position.z = -5;
simon2.position.x = -6;


/*function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;

  simon.rotation.y += 0.01;
  simon.rotation.z += 0.01;
 
}

document.body.onscroll = moveCamera;
moveCamera();*/

  }

  render() {
    return (
      
      <html>
      <head>
     
     </head>
      <body>
      <canvas id="bg"></canvas>  
      <main>
         <NavbarMenu/>

        <div class='home' align='center'>
       
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
           text="Height: 1,85 m"
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
<SkillBar name="Python" level={60} color="green" duration={30}/>
<br/>
<SkillBar name="Javascript" level={55} color="pink" duration={30} />
<br/>
<SkillBar name="ReactJS" level={60} color="blue" duration={30}/>
<br/>
<SkillBar name="Flutter" level={80} color="lightblue" duration={30}/>
<br/>
<SkillBar name="C++" level={50} color="purple" duration={30}/>
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


<h2>Projects</h2>

<div class='space'> 
<CardView
    items={items}
    activeColor='#345789'
    imageHeight='500px'
    imageWidth='600px'
    
  />
  </div>
  

        </div>
        </main>

        <script type="module" src="./Pages/ThreeD/Space.js"></script>
        </body>
        </html>
    );
  }
}

export default Home;