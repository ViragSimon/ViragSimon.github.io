import React from "react";

import './Certificate.css';



const Certificate = (props) => {
  

return(

<>
<div class="container">
<img  alt={props.alt} src={props.certificate}  width="400vw" height="300vw"/>
</div>
</>
);
};

export default Certificate;