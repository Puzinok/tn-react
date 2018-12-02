import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartItem from '~/src/components/views/Catalog/Header/Cart/CartItem';

const CartItemsList = (props) => {
  return (
    props.products.map((product) => (
      <CartItem product={product} key={product.id} />
    ))
  );
};

CartItemsList.PropTypes = {
  product: PropTypes.object
};


export default CartItemsList;