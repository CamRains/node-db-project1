import React, { Component } from "react";
import "./StoreFront.css";
// import bob from "../../../server/data/media";

class StoreFront extends Component {
  render() {
    console.log(this.props.products);

    let productDisplay = this.props.products.map((element, index) => {
      return (
        <div className="products-container" key={index}>
          <h2>{element.item}</h2>
          <img src={element.image_path} alt=" cant display " />
          <h2> {"$" + element.price} </h2>
          <button onClick={() => this.props.addToCart(element)}>
            Add To Cart
          </button>
        </div>
      );
    });
    return <div className="storefront-container">{productDisplay}</div>;
  }
}

export default StoreFront;
