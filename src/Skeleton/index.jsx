//@format
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import {Navigation} from '../Navigation';
import {Container, Row, Col, Button} from 'reactstrap';
import SectionAbout from '../SectionAbout';
class Skeleton extends Component {
  componentDidMount() {
    // $('#home').backstretch('../images/banner.jpg');
  }
  render() {
    return (
      <Container fluid id="container">
        <header>
          <Navigation />{' '}
        </header>
        <Row className="mx-0">
          <Col sm={12} md={12} className="px-0">
            <main>
              <section id="home">
                <Container fluid>
                  <Row>
                    <Col sm={12} md={12}>
                      <div className="intro">
                        <div className="intro-text">
                          <h1>
                            Hey <span>i'am spuvec </span>
                          </h1>
                          <span>trying to be a web developer...</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section id="about">
                <SectionAbout />
              </section>
              <section id="projects">dfkasf</section>
            </main>
            <footer>
              <section id="contacts">fdsaj</section>
            </footer>

            <Button color="primary">KEKE </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Skeleton;
