import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import html from '../../../images/html.png';
import js from '../../../images/js.png';
import css from '../../../images/css.png';
import ubuntu from '../../../images/ubuntu.png';
import gitHub from '../../../images/GitHub-Mark-64px.png';

export default class SkillsList extends React.Component {
  state = {
    mobile: 'row',
    widthMobile: '',
  };
  /*componentDidMount() {
    let mobile;
    let widthMobile,test;
    window.addEventListener('resize', event => {
      if (document.documentElement.clientWidth < 700) {
       // mobile = 'column';
        //widthMobile = '100px';
				//test = 'test'
      } else {
        mobile = 'row';
        widthMobile = '100%';
				test = '';
      }
      this.setState({
        mobile: mobile,
        widthMobile: widthMobile,
				test:test
      });
    });
  }*/
  render() {
    return (
      <div>
        <ListGroup id="iconList">
          <ListGroupItem
            tag="a"
            href="https://www.w3.org/html/"
            className={this.state.test}
            action>
            <img src={html} />
          </ListGroupItem>
          <ListGroupItem
            tag="a"
            href="https://www.w3.org/Style/CSS/Overview.en.html"
            action>
            <img src={css} />
          </ListGroupItem>
          <ListGroupItem tag="a" href="https://www.javascript.com/" action>
            <img src={js} />
          </ListGroupItem>
          <ListGroupItem tag="a" href="https://www.ubuntu.com/" action>
            <img src={ubuntu} />
          </ListGroupItem>
          <ListGroupItem tag="a" href="https://github.com/" action>
            <img src={gitHub} />
          </ListGroupItem>
        </ListGroup>
        <p />
      </div>
    );
  }
}
