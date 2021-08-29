import React, { Component } from 'react';
import { Space } from './ThreeD/Space';
import './Style.css';
import resume from '../Images/Simon_Virag_CV.pdf';
import NavbarMenu from '../Components/NavbarMenu';
import AllPagesPDFViewer from "../Components/PDFshower.jsx";
import { Document, Page, pdfjs } from "react-pdf";


class Resume extends Component {

  componentDidMount(){

    //Space();
  }
  
    render() {
      return (
        <html>
        <head></head>
        <body>
          
        <canvas id="bg"></canvas> 
        <main>
          <div class='home' align='center'>
          <NavbarMenu/>

           <h2>Resume</h2>
    
           <h4>All Pages</h4>
      
        <AllPagesPDFViewer pdf={resume} />
        
      
           

          </div>
          </main>
          </body>
          </html>
      );
    }
}

export default Resume;