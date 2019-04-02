import React, { Component } from "react";
import "./Header.css";
import Logo from "./logo.jpeg";

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <div className="header-container">
            <div className="logo-container">
              <img
                className="logo-image"
                src={Logo}
                alt="Logo could not display"
              />
            </div>

            {/* <div className="header-link-container"> */}
            <div className="header-links">
              <div className="store_and_cart">
                <input type="text" placeholder="Search My Beautiful Site" />
                &nbsp; &nbsp;
                <button onClick={() => this.props.navigate("store")}>
                  STORE
                </button>
                &nbsp; &nbsp;
                <button onClick={() => this.props.navigate("shoppingCart")}>
                  CART
                </button>
              </div>
              &nbsp;
              <div className="total">
                <h1>Total= 349.99</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
