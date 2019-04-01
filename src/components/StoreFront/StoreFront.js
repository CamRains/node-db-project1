import React, { Component } from "react";
import "./StoreFront.css";
// import bob from "../../../server/data/media";

class StoreFront extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    console.log("PROPS", this.props.products);
    let productDisplay = this.props.products.map((product, index) => {
      // console.log(element);
      return (
        <div className="products-container" key={index}>
          <img src={product.image_path} alt=" cant display " />
          &nbsp;
          <h2>{product.item}</h2>
          &nbsp;
          <h3> {"$" + product.price} </h3>
          &nbsp;
          <div className="storefront-butons">
            <button onClick={() => this.props.addToCart(product)}>
              Add To Cart
              
            </button>
          </div>
          &nbsp;
        </div>
      );
    });
    return <div className="storefront-container">{productDisplay}</div>;
  }
}

export default StoreFront;
