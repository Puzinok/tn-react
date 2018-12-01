import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ProductCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="{props.image}" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.price}</CardSubtitle>
          <CardText>{props.description}</CardText>
          <Button>Купить</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;