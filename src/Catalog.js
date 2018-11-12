import React, { Component } from 'react';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';

class Catalog extends Component {
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

Catalog.propTypes = {
  products: PropTypes.array.isRequired
};

export default Catalog;