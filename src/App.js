import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from 'reactstrap';
import {Navigation} from './Navigation';
import Skeleton from './Skeleton';
import TicTacToe from './Tic/TicTacToe';

function App() {
  return (
    <Router>
      <Container fluid>
        <Navigation />
        <Route exact path="/" component={Skeleton} />
        <Route path="/TicTacToe" component={TicTacToe} />
      </Container>
    </Router>
  );
}
export default App;
