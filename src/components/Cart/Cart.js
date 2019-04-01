import React, { Component } from "react";
import "./Cart.css";
// import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: null
    };
  }

  render() {
    console.log("PROPS", this.props.shoppingCart);
    let CartDisplay = this.props.shoppingCart.map((product, index) => {
      return (
        <div className="cart-info" key={index}>
          <br />
          {/* <h4>{product.id}</h4>
            <h4>{index}</h4> */}
          <img src={product.image_path} alt=" cant display " />
          <h2>{product.item}</h2>
          <div className="products-container">
            <h2> {"$" + product.price} </h2>
            &nbsp;
            <div className="quantity">
              <button>Qty.</button>
              &nbsp;
              {product.quantity}
              <select
                onChange={event =>
                  this.props.editQuantity(product.id, event.target.value)
                }
                type="number"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
              &nbsp;
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
