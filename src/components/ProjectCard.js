import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardLink } from 'reactstrap';

const ProjectCard = (props) => {

  const handleClick = () => {
    alert("clicked!")
  }

  return (
    <div>
      <Card>
      <CardBody>
          <CardTitle>Project Name</CardTitle>
          <CardImg onClick={handleClick} top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Project Image" />
          
          <CardText>Project description / built on ...</CardText>
          <CardLink href="#">GitHub Repo</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard;
