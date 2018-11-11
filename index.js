import React, { Component } from 'react';
import ReactDom from 'react-dom';
import products from '~/constants/products.js'
import Catalog from '~/src/Catalog'

ReactDom.render(
  <Catalog products = { products } />,
  document.getElementById('root')
);