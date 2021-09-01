import React from "react";





const NavbarMenu = (props) => {

 
  
return(
  <>
 <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/Education">Education</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/Experience">Experience</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="/Projects">Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="/Contact">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="/About">About</a>
    </li>
  </ul>
</nav>
</>
);
};

export default NavbarMenu;