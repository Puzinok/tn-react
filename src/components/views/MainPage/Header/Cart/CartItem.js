import React, { Component } from 'react';
import { Table } from 'reactstrap';

const CartItem = (props) => {
  return (
    <Table size="sm">
      <tbody>
        <tr>
          <td>
            Наименование
          </td>
          <td>
            10 шт.
          </td>
          <td>
            300 руб.
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartItem;