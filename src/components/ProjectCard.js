import React from 'react';
import Radium from 'radium'

const ProjectCard = (props) => {
  const { name, description, tools, repoLink, image, url } = props.project

  const handleClick = () => {
    window.open(url)
  }

  return (
      <div className="project-card">
        <h3>{name}</h3>
        <img className="project-img" src={image}/>
          <div className="overlay" onClick={handleClick}>
            <div className="text">
            <h5>{description}</h5>
            <br></br>
            <h6>{tools}</h6>
            <br></br>
            <hr></hr>
            <a style={{fontSize: '16px'}} href={url}>Demo</a>
            <br></br>
            <a style={{fontSize: '16px'}} href={repoLink}>Repo Link</a>
           </div>
         </div>
      </div>
  );
};

export default Radium(ProjectCard);
