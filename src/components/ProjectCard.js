import React from 'react';
import Radium from 'radium'
import { card } from '../RadiumStyles'

const ProjectCard = (props) => {
  const { name, description, tools, repoLink, image, url } = props.project

  const handleClick = () => {
    window.open(url)
  }

  return (
      <div style={card.base} onClick={handleClick}>
        <h3 style={card.title}><u>{name}</u></h3>
        <br></br>
          <img className="project-img" style={card.image} src={image}/>  
          <h5>{description}</h5>
          <br></br>
          <br></br>
          <h6>{tools}</h6>
          <br></br>
          <a className="App-link" style={{fontSize: '16px'}} href={repoLink}>Repo</a>
      </div>
  );
};

export default Radium(ProjectCard);
