import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartItem from '~/src/components/views/Catalog/Header/Cart/CartItem';


class CartItemsList extends Component {

  createProductsList() {
    const { products } = this.props;
    const productList = [];

    for (let product in products) { 
      productList.push(<CartItem product={products[product]} key={product} />);
    }
    return productList;
  }

  render() {
    return this.createProductsList();
  }
}

CartItemsList.propTypes = {
  product: PropTypes.object
};

export default CartItemsList;
