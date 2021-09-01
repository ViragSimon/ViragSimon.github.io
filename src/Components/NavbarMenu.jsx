import React from "react";
import './Navbar.css';





const NavbarMenu = (props) => {

 
  
return(
  <>
 <nav class="nav">
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/Education">Education</a>
    </li>
    <li>
      <a  href="/Experience">Experience</a>
    </li>
    <li>
      <a href="/Projects">Projects</a>
    </li>
    <li>
      <a href="/Contact">Contact</a>
    </li>
    <li>
      <a href="/About">About</a>
    </li>
  </ul>
</nav>
</>
);
};

export default NavbarMenu;