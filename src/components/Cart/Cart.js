import React, { Component } from "react";
import "./Cart.css";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: null
    };
  }

  editQuantity = item => {
    let { quantity } = this.state;
    axios.put(`/api/products/${item}`, { quantity }).then(response => {});
  };

  render() {
    var plus = "+";
    var minus = "-";
    console.log("PROPS", this.props.shoppingCart);
    let CartDisplay = this.props.shoppingCart.map((product, index) => {
      return (
        <div className="cart-info" key={index}>
          <br />
          <h2>{product.item}</h2>
          {/* <h4>{product.id}</h4>
            <h4>{index}</h4> */}
          <img src={product.image_path} alt=" cant display " />
          <div className="products-container">
            <h2> {"$" + product.price} </h2>
            <div className="quantity">
              <button>{minus}</button>
              {product.quantity}
              <button>{plus}</button>
            </div>
          </div>
          <div className="cart-button-container">
            <button
              className="cart-button"
              onClick={() => this.props.removeFromCart(product.id)}
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
            &nbsp;
            <h4> YOUR CART IS EMPTY PEASANT! </h4>
            &nbsp; &nbsp;
            <div>
              <img src="https://i.imgflip.com/20y2ag.jpg" alt="" />
            </div>
            &nbsp;
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
