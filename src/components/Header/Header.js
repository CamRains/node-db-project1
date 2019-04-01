import React, { Component } from "react";
import "./Header.css";
import Logo from "./logo.jpeg";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <div className="logo-container">
            <img
              className="logo-image"
              src={Logo}
              alt="Logo could not display"
            />
          </div>

          <div className="header-link-container">
            <ul className="header-links">
              <input type="text" placeholder="Search My Beautiful Site" />
              &nbsp; &nbsp;
              <button onClick={() => this.props.navigate("store")}>
                STORE
              </button>
              &nbsp; &nbsp;
              <button onClick={() => this.props.navigate("shoppingCart")}>
                CART
              </button>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
