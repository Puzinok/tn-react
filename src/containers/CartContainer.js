import React, {Component} from 'react'

import CartContext from './CartContext'

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      itemsList: []
    };
    this.addToCart = this.addToCart.bind(this);
  }

  quantity() {
    const { itemsList } = this.state;
    return (Object.values(itemsList)).reduce((s, num) => s + num.quantity, 0);
  }

  sumItems(product, quantity) {
    const { itemsList } = this.state;
    const {id} = product;
    return itemsList[id] ? itemsList[id].quantity + quantity : quantity;
  }

  addToCart(product, quantity = 1) {
    const addProduct = { quantity: this.sumItems(product, quantity), ...product };
    this.setState({
      itemsList: {...this.state.itemsList, [product.id]: addProduct}
    });
  }

  render() {
    return (
      <CartContext.Provider value={{
        addToCart: (product, quantity) => this.addToCart(product, quantity),
        quantity: this.quantity(),
        inCart: this.state.itemsList }
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