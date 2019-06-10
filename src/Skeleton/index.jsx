//@format
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import {Navigation} from '../Navigation';
import {Container, Row, Col} from 'reactstrap';
import Home from '../Main/Home';
import About from '../Main/About';
import Projects from '../Main/Projects';
import Contacts from '../Footer/Contacts';
import NavbarBottom from '../Footer/NavbarBottom';
class Skeleton extends Component {
  componentDidMount() {
    // $('#home').backstretch('../images/banner.jpg');
  }
  render() {
    return (
      <Container fluid>
        <Navigation />{' '}
        <Row className="mx-0">
          <Col sm={12} md={12} className="px-0">
            <main>
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="projects" className={'marginTop'}>
                <h2 className="h2"> Projects </h2>
                <p> Click on the image to see the project description.</p>
                <Projects />
              </section>
            </main>
            <footer>
              <section id="contacts" className={'marginTop'}>
                <h2 className="h2">
                  Contact <span>Me</span>{' '}
                </h2>
                <Contacts />
              </section>
              <NavbarBottom />
            </footer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Skeleton;
