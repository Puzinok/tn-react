import React, { Component } from 'react';
import { ShoppingCart } from '@material-ui/icons';
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Badge } from 'reactstrap';
import CartItem from './CartItem';

class Cart extends Component {
  render() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <ShoppingCart />
          <Badge color="primary">4</Badge>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <CartItem />
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            Всего
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default Cart;