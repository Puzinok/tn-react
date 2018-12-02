import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Price from '~/src/components/views/ProductCard/Price'

const CartItem = (props) => {
  return (
    <Table size="sm">
      <tbody>
        <tr>
          <td>
            {props.product.title}
          </td>
          <td>
            {props.product.quantity} шт.
          </td>
          <td>
            <Price value={props.product.price} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

CartItem.PropTypes = {
  product: PropTypes.object.isRequired
};

export default CartItem;