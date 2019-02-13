import React from 'react';
import ProjectCard from '../components/ProjectCard'
import { projectData } from '../projectData'

class Projects extends React.Component {

  state = {  }

  render() {

    let sorted = projectData.sort((a, b) => (a.id > b.id) ? -1 : 1)
  
    const renderProjects = sorted.map(project => {
      return (
        <ProjectCard key={project.id} project={project}/>
      )
    })
      
    return (
     <div>
    
      <header className="portfolio-header">
        <div className="caption-text">
          portfolio
        </div>
      </header>

      <br></br>
        
      <div className="portfolio">
       {renderProjects}
      </div>
       
    </div>
      
    );
  }
}

export default Projects;