import React from 'react';
import ProjectCard from '../components/ProjectCard'
import { Container, Row, Col } from 'reactstrap'

class Projects extends React.Component {
  state = {  }
  render() {

    return (
     <div>
      <Container>
        <header className="App-header">
          <div className="caption-text">
            portfolio
          </div>
        </header>
      </Container>
        <br></br>
      <Container>
        <Row>
        <Col sm="6">
          <ProjectCard/>
        </Col>
        <Col sm="6">
          <ProjectCard/>
        </Col>
        <Col sm="6">
          <ProjectCard/>
        </Col>
        </Row>
      </Container>
     
       
      
      </div>
      
    );
  }
}

export default Projects;