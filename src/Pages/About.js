import React, { Component } from 'react';
import { Space } from './ThreeD/Space';
import './Style.css';
import './About.css';

import NavbarMenu from '../Components/NavbarMenu';

class About extends Component {

componentDidMount(){

  const  scene = Space();
}

  render() {
    return (
      <html>
      <head>
      <title>About</title>
   
      </head>
      <body>
        
      <canvas id="bg"></canvas> 
      <main>
      
        <div class='about' align='center' >
        <NavbarMenu/>

         <h2>About</h2>
  
<h3>My name is Simon Istvan Virag</h3>

  <p>I am first years student at Kin's College London studying MSci computer Science
<br/>


<section>
I grew up surrounded by technology; it is fundamental to my childhood and who I am today. My fondest early memories involve sitting with my father, a tank engineer, helping him assemble an JVBT-55A tank from mere nuts and bolts. As we worked, he would explain different parts to me, the mechanics behind the vehicle’s movement, its strengths, flaws, and particularities, all with a reverence for the research and design which led to its being. After years of assembly, from the ground up, our tank went on to be used by the local county’s Search and Rescue for particularly difficult operations. This early experience, so full of hands-on learning and challenge, left me with an immense curiosity about science and technology, as well as a deep appreciation for their power for positive change. 
</section>
  <br/>
  <section>
As I became older, robotics and computers began to interest me more. My secondary school’s robotics team was a particular passion. I was energized by the innovation of the design process, as a younger team member and then later as the leader of my school’s team. Combining software and hardware in efficient, complementary ways also gave me a uniquely comprehensive understanding of robotic technology and brought together my passions for computers and mechanics. 
</section>
<br/>
<section>
Solving robotics problems also provided a much-needed outlet to challenge myself and solve complex problems. This was something I valued throughout my life, but did not appreciate fully until robotics. Through years of creating for competitions (and sometimes just for fun!), I began to truly appreciate the learning and joy of confronting a difficult problem, failing, learning from my mistakes, and trying, better, again. 
</section>
<br/>
<section>
Meanwhile, in the Computer Science course I took during my last two years of secondary school, I realized how much I loved the creativity and problem-solving of programming. It felt like falling in love. The more I learned, the hungrier I became to learn more, to dig deeper into the new world before me. I wanted to understand technologies, to learn the intricacies of how they worked, and how to modify and upgrade them. After a lifetime of dyslexia and dysgraphia, where written communication was a constant struggle, reading and writing syntax felt like slipping into a pair of well-worn boots. For the first time, I understood the joy that others talked about when they wrote a good essay or read an interesting book. It was intoxicating. 
</section>
<br/>
<section>
From this foundation of experience and passion, applying to university for a Computer Science degree felt obvious. I am now in my first year at King’s College London. Despite the strangeness of online teaching and the loneliness of moving to a foreign country during a pandemic, my enthusiasm for learning and programming has continued unabated. 
</section>
<br/>
<section>
This is only the beginning of my university education, and I am still figuring out where I want to focus my attention. AI and software engineering both look interesting, but I want to explore all options before deciding.  Ultimately, what I want most from my degree is not a particular specialization or skillset. I want the next three and a half years to be filled with challenge. I want to push how deep I can learn, and how good I can become. I want my learning to be applicable to the real world, to work towards being able to solve large problems and help people. I want to gain research and design experience, and both technical and practical knowledge. I want to gain the skills to make my ideas feasible, and to work towards being able to effectively use technology as a force for change.
</section>
<br/>

<section>
In my free time I love travel but more importantly I love to learn. Whenever I have some time that I can spend freely, I love to learn a new skill that I can use.
</section>
</p>



        </div>
        </main>
        </body>
        </html>
    );
  }
}

export default About;