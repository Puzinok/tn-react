import './src/main.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import routes from './src/routes';
import {
  BrowserRouter as Router, Route, Switch, NavLink
} from 'react-router-dom';

import Header from './src/components/views/shared/Header';
import Footer from './src/components/views/shared/Footer';

import CartContainer from '~/src/containers/CartContainer';
import { Container } from 'reactstrap';

const RoutesWithSubroutes = (route) => (
  <Route {...route} />
);

const App = () => (
  <Router>
    <Fragment>
      <Container>
        <CartContainer>
          <Header />
          <Switch> 
            { routes.map((route) => RoutesWithSubroutes(route)) }
          </Switch> 
        </CartContainer>
      </Container>
      <Footer />
    </Fragment> 
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);