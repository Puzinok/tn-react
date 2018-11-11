import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Catalog extends Component{
  render() {
    return (
      <table>
          <tbody>
            { this.props.products.map((product) => (
                  <ProductCard product = {product} key = { product.id }/>
            )) }
          </tbody>
      </table>
    );
  }
}

export default Catalog;