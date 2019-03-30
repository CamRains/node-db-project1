import React, { Component } from "react";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import StoreFront from "./components/StoreFront/StoreFront";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      showCart: false
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.navigate = this.navigate.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    axios.get("/api/products").then(response => {
      console.log(response);
      this.setState({
        products: response.data
      });
    });
  }

  addToCart(item) {
    // console.log(item);
    this.setState({
      cart: [...this.state.cart, item]
    });
  }

  removeFromCart(index) {
    let cartCopy = this.state.cart.slice();
    cartCopy.splice(index, 1);
    this.setState({
      cart: cartCopy
    });
  }

  navigate(location) {
    console.log(location);
    if (location === "cart") {
      this.setState({
        showCart: true
      });
    } else {
      this.setState({
        showCart: false
      });
    }
  }

  // getAllProducts() {
  //   axios.get("/api/products").then(response => {
  //     console.log(response);
  //     this.setState({
  //       productsList: response.data.results
  //     });
  //   });
  // }

  render() {
    console.log(this.state.cart);
    const { products, cart, showCart } = this.state;
    return (
      <div className="App">
        <Header navigate={this.navigate} />
        <div className="main-container">
          {showCart ? (
            <Cart cart={cart} removeFromCart={this.removeFromCart} />
          ) : (
            <StoreFront products={products} addToCart={this.addToCart} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
