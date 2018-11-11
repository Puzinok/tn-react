import React, {Component} from 'react'

class TextBox extends Component {
  render () {
    return (<span>{`Купить лучший ${this.props.description}`}</span>)
  }
}

export default TextBox;