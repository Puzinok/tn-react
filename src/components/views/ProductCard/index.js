import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Image from './Image';
import Price from './Price';
import CardInput from './CardInput';
import PropTypes from 'prop-types';

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
            <Price price={price} />
          </CardSubtitle>
          <CardText>{description}</CardText>
          <CardInput />
        </CardBody>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};


export default ProductCard;