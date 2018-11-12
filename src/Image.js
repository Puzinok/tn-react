import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render () {
    const {imageUrl, width, height, alt} = this.props;
    return (
      <img
        src = { imageUrl }
        width = { width }
        height = { height }
        alt = { alt }
      ></img>
    );
  }
}

Image.propTypes = {
  imageUrl: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
};

export default Image;
