import React, {Component} from 'react'

class Price extends Component{
  render() {
    return(<strong>{ `${this.props.price} руб.`}</strong>)
  }
}

export default Price;