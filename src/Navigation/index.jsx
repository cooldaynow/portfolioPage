import React, {Component} from 'react';
import './index.scss';
import Scrollspy from 'react-scrollspy';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap';

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      activeClass: '',
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  componentDidMount() {
    let classNavBar;
    window.addEventListener('scroll', event => {
      if (window.pageYOffset > 0) {
        classNavBar = 'move';
      } else {
        classNavBar = '';
      }
      this.setState({
        activeClass: classNavBar,
      });
    });
  }
  render() {
    return (
      <header>
        <Navbar
          color="dark"
          dark
          expand="md"
          fixed={'top'}
          className={'navigation '  + this.state.activeClass}>
          <NavbarBrand href="#">Portfolio Page</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar right ={'true'}>
            <Scrollspy
              items={['home', 'about', 'projects', 'contacts']}
							offset = {-90}
              currentClassName="current"
              className="nav ml-auto">
              <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about" className = 'a'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contacts">Contacts</NavLink>
              </NavItem>
            </Scrollspy>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
