import React from 'react';
import { Button } from 'reactstrap'

const ProjectCard = (props) => {
  const { name, description, tools, repoLink, image, url } = props.project

  const handleClick = () => {
    window.open(url)
  }

  return (
      <div className="project-card">
        <h3>{name}</h3>
        <img className="project-img" src={image}/>
          <div className="overlay">
            <div className="text">
            <h5>{description}</h5>
            <br></br>
            <h6>{tools}</h6>
            <br></br>
            <hr></hr>
            <Button className="btn-circle btn-xl" outline color="info" onClick={handleClick}>View App</Button>
            <br></br>
            <br></br>
            <a className="App-link" style={{fontSize: '16px'}} href={repoLink}>Repo</a>
           </div>
         </div>
      </div>
  );
};

export default ProjectCard;
