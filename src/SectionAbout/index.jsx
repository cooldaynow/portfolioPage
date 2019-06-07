import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import './index.scss';
import {AboutText} from './AboutRow1/AboutText';
import PhotoCard from './AboutRow1/PhotoCard';
import AboutIcon from './AboutRow1/AboutIcon';

class SectionAbout extends Component {
  render() {
    return (
      <Container className={'about__section'}>
        <h1>
          About <span>Me</span>{' '}
        </h1>
        <Row>
          <Col md={4}>
            <PhotoCard />
          </Col>
          <Col md={8}>
            <AboutText />
            <AboutIcon />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SectionAbout;
