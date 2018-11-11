import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Image from '~/src/Image.js';
import products from '~/constants/products.js'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      products.map((product) => (
      <Image imageUrl = { product.imageUrl }
             alt = { product.title }
             width = '100'
             height = '100'
             />
      ))
    );
  }
}

ReactDom.render(
  <App products={products} />,
  document.getElementById('root')
);