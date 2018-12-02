import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

import ProductCard from '~/src/components/views/ProductCard';

class ProductsCatalog extends Component {

  addDescription(product) {
    const description = ['Великолепный', 'Чудный', 'Замечательный', 'Лучший'];
    const randDescription = description[Math.floor(Math.random() * description.length)];
    product['description'] = `${randDescription} ${product.title}`;
    return product;
  }

  render() {
    const {products} = this.props;
    return (
      products.map((product) => (
        <Col key={product.id}>
          <ProductCard product={this.addDescription(product)}/>
        </Col>
      ))   
    );
  }
}

ProductsCatalog.PropTypes = {
  products: PropTypes.object
};

export default ProductsCatalog;