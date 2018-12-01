import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './Header';
import ProductCard from '~/src/components/views/ProductCard';
import '~/src/main.css'

class MainPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row className='mt-3'>
          <Col><ProductCard /></Col>
          <Col><ProductCard /></Col>
          <Col><ProductCard /></Col>
        </Row>
        <Row>
          <Col>
            <div className='footer mt-3'>
              <p>Pavel Puzin, Thinknetika React 2018</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;