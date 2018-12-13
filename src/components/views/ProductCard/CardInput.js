import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import CartContext from '~/src/containers/CartContext';

class CardInput extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({quantity: Number(e.target.value) ? Number(e.target.value) : 0});
  }

  render() {
    const {product} = this.props.product;
    return (
      <InputGroup>
        <Input value={this.state.quantity} onChange={this.handleChange} />
        <InputGroupAddon addonType="append">
          <CartContext.Consumer>
            {(context) => (
              <Button color="secondary" onClick={() => (
                context.addToCart(product, this.state.quantity)
              )}>Купить</Button>
            )}
          </CartContext.Consumer>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

CardInput.propTypes = {
  product: PropTypes.object
};

export default CardInput;