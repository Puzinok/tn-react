import React, {Component} from 'react'

import CartContext from './CartContext'
import products from '~/constants/products.js'

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      itemsList: {}
    };
    this.addToCart = this.addToCart.bind(this);
  }

  quantity() {
    const { itemsList } = this.state;
    return (Object.values(itemsList)).reduce((s, num) => s + num, 0);
  }

  sumItems(id, quantity) {
    const { itemsList } = this.state;
    return itemsList[id] ? itemsList[id] + quantity : quantity
  }

  inCartList(){
    const { itemsList } = this.state;
    const itemDetails = []
    for (let key in itemsList) {
        itemDetails.push({
          id: products[key-1].id,
          title: products[key-1].title,
          price: products[key-1].price,
          quantity: itemsList[key]
      })
    }

    return itemDetails;
  }

  addToCart(id, quantity = 1) {
    const { itemsList } = this.state;
    this.setState({
      itemsList: {
        ...itemsList,
        [id]: this.sumItems(id, quantity)
      }
    });
  }

  render() {
    return (
      <CartContext.Provider value={{
        addToCart: (id, quantity) => this.addToCart(id, quantity),
        quantity: this.quantity(),
        inCart: this.inCartList() }
        }>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

CartContainer.defaultProps = {
  quantity: 0
};

export default CartContainer;