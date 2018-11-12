import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render () {
    const {imageUrl, title, price} = this.props.product;
    return (
      <tr>
        <td><Image imageUrl = {imageUrl}
          alt = {title}
          width = '100'
          height = '100' />
        </td>
        <td><TextBox description = {title} /></td>
        <td><Price price = {price}/></td>
      </tr>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
};

export default ProductCard;