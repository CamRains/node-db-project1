import React, { Component } from "react";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import StoreFront from "./components/StoreFront/StoreFront";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      shoppingCart: [],
      showCart: false
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.navigate = this.navigate.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.editQuantity = this.editQuantity.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/products")
      .then(response => {
        console.log("label--->", response);
        this.setState({
          products: response.data.products.products,
          shoppingCart: response.data.cartItems
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addToCart = product => {
    const newProduct = {
      id: product.id,
      item: product.item,
      image_path: product.image_path,
      price: product.price,
      quantity: 1
    };
    console.log(newProduct);
    axios.post("/api/products", newProduct).then(response => {
      this.setState({
        shoppingCart: response.data
      });
    });
  };

  // (item, image_path, price) => {
  //   axios.post("/api/products", { item, image_path, price }).then(response => {
  //     console.log(response.data);
  //     this.setState({
  //       products: response.data,
  //       item: "",
  //       image_path: "",
  //       price: ""
  //       // updateItem: "",
  //       // updateimage_path: "",
  //       // updatePrice: ""
  //     });
  //   });
  // };

  removeFromCart(id) {
    // console.log(product);
    axios.delete(`/api/products/${id}`).then(response => {
      console.log(response);
      this.setState({
        shoppingCart: response.data
      });
    });
  }
  editQuantity = (item, quantity) => {
    // let { quantity } = this.state;
    axios.put(`/api/products/${item}`, { quantity }).then(response => {
      this.setState({
        shoppingCart: response.data
      });
    });
  };

  // (index) {
  //   let cartCopy = this.state.cart.slice();
  //   cartCopy.splice(index, 1);
  //   this.setState({
  //     cart: cartCopy
  //   });
  // }

  navigate(location) {
    console.log(location);
    if (location === "shoppingCart") {
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
    // console.log(this.state.shoppingCart);
    const { products, showCart } = this.state;
    return (
      <div className="App">
        <Header navigate={this.navigate} />
        <div className="main-container">
          {showCart ? (
            <Cart
              shoppingCart={this.state.shoppingCart}
              removeFromCart={this.removeFromCart}
              editQuantity={this.editQuantity}
            />
          ) : (
            <StoreFront products={products} addToCart={this.addToCart} />
          )}
        </div>
      </div>
    );
  }
}

export default App;

// cant map over an undefined object in cart not getting passed down info properly
