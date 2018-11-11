import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox'
import Price from './Price'

class ProductCard extends Component {
  render () {
    const { product } = this.props
    return (
      <tr>
        <td><Image imageUrl = { product.imageUrl }
        alt = { product.title }
        width = '100'
        height = '100' /></td>
        <td><TextBox description = { product.title } /></td>
        <td><Price price = '10'/></td>
      </tr>
    );
  }
}

export default ProductCard;