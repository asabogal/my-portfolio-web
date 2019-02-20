import React from 'react';
import ProjectCard from '../components/ProjectCard'
import { projectData } from '../projectData'
import Radium from 'radium'
import { portfolio } from '../RadiumStyles'

class Portfolio extends React.Component {

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

        <div style={portfolio.base}>
         {renderProjects}
        </div>
        
    </div>
      
    );
  }
}

export default Radium(Portfolio);