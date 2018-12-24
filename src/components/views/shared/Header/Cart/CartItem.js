import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Price from '~/src/components/views/Catalog/ProductCard/Price';

const CartItem = (props) => {
  const { title, quantity, price } = props.product;

  return (
    <Table size="sm">
      <tbody>
        <tr>
          <td>
            {title}
          </td>
          <td>
            {quantity} шт.
          </td>
          <td>
            <Price value={price} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  })
};

export default CartItem;