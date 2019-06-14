import React, {Component} from 'react';
import {
  Container,
  Row,
} from 'reactstrap';
import ProjectsCard from '../Projects/ProjectsCard/index.jsx';
import weather from '../../images/Weather.png';
import ticTacToe from  '../../images/tic-tac-toe.png';

import './index.scss';

class Projects extends Component {
  state = {
    cards: [
      {src: weather, href: '/', name: 'Simple Weather Viewer'},
      {src: ticTacToe, href: '/TicTacToe', name: 'Simple Tic-Tac-Toe'},
      {src: weather, href: '/#about', name: 'Simple Weather Viewer'},
      {src: weather, href: '/#about', name: 'Simple Weather Viewer'},
    ],
  };
  renderProjects = () => {
    return this.state.cards.map((card, index) => {
      return (
        <ProjectsCard
          key={index}
          src={card.src}
          href={card.href}
          name={card.name}
        />
      );
    });
  };
  render() {
    return (
      <Container className="projects__container">
        <Row>{this.renderProjects()}</Row>
      </Container>
    );
  }
}

export default Projects;
