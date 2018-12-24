import React, { Component } from 'react';
import { CardImg } from 'reactstrap';
import PropTypes from 'prop-types';

class Image extends Component {
  render () {
    const {src, width, height, alt} = this.props.image;
    return (
      <CardImg top width={width} height={height} src={src} alt={alt} />
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
