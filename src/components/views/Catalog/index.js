import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import '~/src/main.css'

import Header from './Header';
import ProductsCatalog from '~/src/containers/ProductsCatalog';
import products from '~/constants/products.js';
import CartContainer from '~/src/containers/CartContainer';

class Catalog extends Component {
  render() {
    return (
      <CartContainer>
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
      </CartContainer>
    );
  }
}

Catalog.propTypes = {
  products: PropTypes.array
};

export default Catalog;