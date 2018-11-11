import React, { Component } from 'react';

class Image extends Component{
  render () {
    const { imageUrl, width, height, alt } = this.props
    return(
      <img
        src = { imageUrl }
        width = { width }
        height = { height }
        alt = { alt }
      ></img>
    );
  }
}

export default Image
