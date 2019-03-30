import React, { Component } from "react";
import "./Cart.css";

class Cart extends Component {
  render() {
    let CartDisplay = this.props.cart.map((element, index) => {
      console.log(this.props.cart);
      return (
        <div className="cart info">
          <div className="products-container" key={index}>
            <h2>{element.item}</h2>
            <img src={element.image_path} alt=" cant display " />
            <h2> {"$" + element.price} </h2>
          </div>
          <div className="cart-button-container">
            <button
              className="cart-button"
              onClick={() => this.props.removeFromCart(index)}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="cart-container">
        {CartDisplay[0] ? (
          CartDisplay
        ) : (
          <div className="go-buy-something">
            <h4> YOUR CART IS EMPTY PEASANT! </h4>
            <img src="https://i.imgflip.com/20y2ag.jpg" />
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
