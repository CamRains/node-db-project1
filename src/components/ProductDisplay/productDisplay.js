import React from "react";

function productDisplay(props) {
  return (
    <div className="products-container">
      <img src={props.image_path} alt=" cant display " />
      <h2> {"$" + props.price} </h2>
      <h2>{props.item}</h2>
    </div>
  );
}

export default productDisplay;
