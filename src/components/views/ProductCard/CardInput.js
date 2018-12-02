import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class CardInput extends Component {
  render() {
    return (
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="secondary">Купить</Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

export default CardInput;