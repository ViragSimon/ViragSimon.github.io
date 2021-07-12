import React, { Component } from 'react';
import { Space } from './ThreeD/Space';
import ReactTextFormat from 'react-text-format';
import './Style.css';
import './Home.css';

class Contact extends Component {

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
         <h2>You can reach me at these contacts</h2>
         <br/>
         
         <ReactTextFormat>
<h3>Email: <span data-email="email@span.com">  social.simonv@gmail.com</span></h3>
<br />
<h3>(UK) Phone Number +44 7944-141495</h3>
<br />
<h3>(HUN) Phone Number +36 (30) 634-0857</h3>
<br />
<h3>GitHub:<a href="https://github.com/ViragSimon">  https://github.com/ViragSimon</a> </h3>
</ReactTextFormat>


<h2>I usually answer emails and messages in 2-3 days!</h2>
<h2>If I don't pick up my phone immediately then I will call you back as soon as I can</h2>

        
        </div>
        </main>
        <script type="module" src="./Pages/ThreeD/Space.js"></script>
        </body>
        </html>
    );
  }
}

export default Contact;