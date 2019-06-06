import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import './index.scss';
import {AboutText} from './AboutRow1/AboutText';
import PhotoCard from './AboutRow1/PhotoCard';
import SkillsList from './AboutRow1/SkillsList';

class SectionAbout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container id={'sectionAbout'}>
        <h1>
          About <span>Me</span>{' '}
        </h1>
        <Row>
          <Col md={4}>
            <PhotoCard />
          </Col>
          <Col md={8} >
            <AboutText />
						<SkillsList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SectionAbout;
