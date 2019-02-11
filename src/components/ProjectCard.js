import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardLink } from 'reactstrap';

const ProjectCard = (props) => {
  const { id, name, description, tools, repoLink, image, url} = props.project

  const handleClick = () => {
    window.open(url)
  }

  return (
    <div>
      <Card>
      <CardBody>
          <CardTitle><h1>{name}</h1></CardTitle>
          <CardImg onClick={handleClick} top width="100%" src={image} alt="Project Image" />
          
          <CardText>{description}</CardText>
          <CardLink href={repoLink}>GitHub Repo</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard;
