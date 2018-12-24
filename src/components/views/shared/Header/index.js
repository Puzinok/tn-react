import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { NavLink as RRNavLink}  from 'react-router-dom';

import {
  mainPath, catalogPath, aboutPath, 
} from '~/src/helpers/routes';

import Cart from './Cart';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar color="light" light expand="sm">
        <NavbarBrand href="/">Brewers shop 🍺</NavbarBrand>
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink exact to={mainPath() }
                activeClassName="active"  
                tag={RRNavLink}>Главная</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to={catalogPath()}
                activeClassName="active"  
                tag={RRNavLink}>Каталог</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to={aboutPath()}
                activeClassName="active"  
                tag={RRNavLink}>Контакты</NavLink>
            </NavItem>
            <Cart />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;

