import React from 'react';
import ProjectCard from '../components/ProjectCard'
import { Container, Row, Col } from 'reactstrap'
import { projectData } from '../projectData'

class Projects extends React.Component {

  state = {  }

  render() {

    let sorted = projectData.sort((a, b) => (a.id > b.id) ? -1 : 1)
  
    const renderProjects = sorted.map(project => {
      return (
        <Col sm="6">
          <ProjectCard key={project.id} project={project}/>
        </Col>
      )
    })
      
    return (
     <div>
        <header className="App-header">
          <div className="caption-text">
            portfolio
          </div>
        </header>
        <br></br>
        
      <Container>
        <Row>
          {renderProjects}
        </Row>
      </Container>
      </div>
      
    );
  }
}

export default Projects;