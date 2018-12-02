import React, { Component, Fragment } from 'react';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';

const CartIcon = (props) => {
  return (
    <Fragment>
      <ShoppingCart />
      <Badge color="primary">{props.quantity}</Badge>
    </Fragment>
  );
};

CartIcon.propTypes = {
  quantity: PropTypes.number
};

export default CartIcon;
