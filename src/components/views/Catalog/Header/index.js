import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import Cart from './Cart';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm">
          <NavbarBrand href="/">Brewers shop 🍺</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Доставка</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Контакты</NavLink>
              </NavItem>
              <Cart />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

