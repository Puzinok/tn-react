import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './Header';
import '~/src/main.css'
import ProductsCatalog from '../../../containers/ProductsCatalog';
import products from '../../../../constants/products.js';


class Catalog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row className='mt-3'>
          <ProductsCatalog products={products}/>
        </Row>
        <Row>
          <Col>
            <footer className='footer mt-3'>
              <p>Pavel Puzin, Thinknetika React 2018</p>
            </footer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Catalog;