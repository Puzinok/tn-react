import React from 'react';
import PropTypes from 'prop-types';

const Price = (props) => { 
  return <strong>{props.value} руб.</strong>;
};

Price.PropTypes = {
  value: PropTypes.number
};

export default Price;