import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle,  Button } from 'reactstrap';
import batman from '../../../images/batman.jpeg';

const PhotoCard= (props) => {
  return (
    <div >
      <Card id = 'photoCard'>
        <CardImg top src={batman} alt="Photo image cup" id = 'cardImg' />
        <CardBody >
          <CardTitle>Bruce Wayne</CardTitle>
          <CardText>Испытывать страх — это нормально. Когда ты это осознаешь, то сможешь ему сопротивляться &#169; Batman</CardText>
          <a className="btn btn-info" href="https://dc.fandom.com/wiki/Batman_(Bruce_Wayne)" role="button">More about Me</a>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhotoCard;
