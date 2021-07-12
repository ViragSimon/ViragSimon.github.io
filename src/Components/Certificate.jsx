import React from "react";

import './Certificate.css';



const Certificate = (props) => {
  

return(

<>
<div class="container">
<img  alt={props.alt} src={props.certificate}  width="350" height="250"/>
</div>
</>
);
};

export default Certificate;