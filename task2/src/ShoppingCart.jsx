import React, { Component } from 'react';
import ProductsList from './ProductsList';
import CartTitle from './CartTitle';

class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },

      {
        id: '2',
        name: 'iPhone Pro',
        price: 799,
      },
      {
        id: '3',
        name: 'iPhone Pro Max',
        price: 1200,
      },
    ],
  };
  render() {
    const count = this.state.cartItems.length;
    return (
      <div className="column">
        <CartTitle count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
