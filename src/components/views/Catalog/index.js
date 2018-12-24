import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import ProductsCatalog from '~/src/containers/ProductsCatalog';
import products from '~/constants/products.js';

class Catalog extends Component {
  render() {
    return (
      <Row className='mt-3'>
        <ProductsCatalog products={products}/>
      </Row>
    );
  }
}

Catalog.propTypes = {
  products: PropTypes.array
};

export default Catalog;