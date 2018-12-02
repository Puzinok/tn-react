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
    const { id, title, price, imageUrl, description} = this.props.product;
    
    return (
      <Card>
        <Image image={{src: imageUrl}} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>
            <Price value={price} />
          </CardSubtitle>
          <CardText>{description}</CardText>
          <CardInput id={id}/>
        </CardBody>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;