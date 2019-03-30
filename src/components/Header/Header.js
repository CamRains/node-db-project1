import React, { Component } from "react";
import "./Header.css";
import Logo from "./nockon.jpeg";

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
              <button onClick={() => this.props.navigate("store")}>
                STORE
              </button>
              <button onClick={() => this.props.navigate("cart")}>Cart</button>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
