import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

import ProductCard from '~/src/components/views/Catalog/ProductCard';
import { addDescription } from '~/src/helpers/AddDescription';

class ProductsCatalog extends Component {
  render() {
    const {products} = this.props;
    return (
      products.map((product) => (
        <Col key={product.id}>
          <ProductCard product={addDescription(product)}/>
        </Col>
      ))   
    );
  }
}

ProductsCatalog.propTypes = {
  products: PropTypes.array
};

export default ProductsCatalog;