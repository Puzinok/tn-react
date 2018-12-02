import React, { Component } from 'react';
import ProductCard from '~/src/components/views/ProductCard';
import { Col } from 'reactstrap';

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
        <Col>
          <ProductCard product={this.addDescription(product)} key={product.id}/>
        </Col>
      ))   
    );
  }
}

export default ProductsCatalog;