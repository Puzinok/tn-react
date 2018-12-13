import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

import Image from './Image';
import Price from './Price';
import CardInput from './CardInput';


class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, price, imageUrl, description} = this.props.product;
    
    return (
      <Card>
        <Image image={{src: imageUrl}} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>
            <Price value={price} />
          </CardSubtitle>
          <CardText>{description}</CardText>
          <CardInput product={this.props}/>
        </CardBody>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired })
};

export default ProductCard;