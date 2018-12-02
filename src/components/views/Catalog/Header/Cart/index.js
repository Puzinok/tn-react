import React, { Component } from 'react';
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle} from 'reactstrap';

import CartContext from '~/src/containers/CartContext'
import CartItemsList from '~/src/containers/CartItemsList';
import CartIcon from './CartIcon';


class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <CartContext.Consumer>
            {(context) => (
              <CartIcon quantity={context.quantity} />
            )}
          </CartContext.Consumer>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <CartContext.Consumer>
              {(context) => (
                <React.Fragment>
                  <CartItemsList products={context.inCart} />
                </React.Fragment>
              )}
            </CartContext.Consumer>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default Cart;