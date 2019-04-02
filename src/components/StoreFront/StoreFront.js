import React, { Component } from "react";
import "./StoreFront.css";
import ProductDisplay from "../ProductDisplay/productDisplay";
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
        <body>
          <div className="products-container" key={index}>
            <ProductDisplay
              item={product.item}
              price={product.price}
              image_path={product.image_path}
            />
            {/* <img src={product.image_path} alt=" cant display " />
            &nbsp;
            <h2>{product.item}</h2>
            &nbsp;
            <h3> {"$" + product.price} </h3>  */}
            &nbsp;
            <div className="storefront-butons">
              <button onClick={() => this.props.addToCart(product)}>
                Add To Cart
              </button>
            </div>
            &nbsp;
          </div>
        </body>
      );
    });
    return (
      <div>
        <div className="storefront-container">{productDisplay}</div>
        <div>
          <footer>
            <h1> Contact</h1>
            <h1> Site Map</h1>
            <h1> About</h1>
          </footer>
        </div>
      </div>
    );
  }
}

export default StoreFront;
