import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './index.scss';
import {
  Card,
  CardImg,
  CardFooter,
  Col,
} from 'reactstrap';

const ProjectsCard = props => {
  return (
    <Col md={3} lg={3} sm={6}>
      <Card className="projects__card">
        <Link to={props.href}>
          {' '}
          <CardImg top width="100%" src={props.src} alt="weather image cap" />
          <CardFooter className = 'projects__card__footer'>
            <p>{props.name} </p>
          </CardFooter>
        </Link>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
