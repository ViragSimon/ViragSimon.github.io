import React from "react";
import './UniCard.css';


const styles = {
  card: {
    
    borderRadius: 40,
    padding: '3.5rem',
    height: '60vh',
    margin: '20px'

  },
  cardImage: {
    objectFit: 'cover',
    borderRadius: 30,
    width: '40vh',
    height: '45vh',
  }
}

const UniCard = (props) => {

  function hover(element) {
    element.setAttribute('src', props.logo);
  }
  
  function unhover(element) {
    element.setAttribute('src', props.schoolview);
  }
  
return(
  
<a>
  <div style={styles.card} class="card"> 
    <body>
      <a>
    <img alt={props.alt}  src={props.schoolview} style={styles.cardImage}  />
    
    <img alt={props.alt}  src={props.logo} style={styles.cardImage}  />

    </a>
      <text >
          <h2 >{props.school}</h2>
          <h3>{props.degree}</h3>
      </text>
    </body>
    <footer>
      <small className="text-muted">{props.years}</small>
    </footer>
  </div>
</a>
);
};

export default UniCard;