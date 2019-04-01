let products = require("../data/data.json");

// let myProducts = [];
let cartItems = [];
let id = 0;

module.exports = {
  readProducts: (req, res) => {
    // console.log(products);
    res.status(200).send({ products, cartItems });
  },
  addToCart: (req, res) => {
    const { item, image_path, price, quantity } = req.body;
    const newProduct = {
      id: id,
      item: item,
      image_path: image_path,
      price: price,
      quantity: quantity
    };
    // console.log(newProduct.id);

    let index = cartItems.findIndex(product => product.item === item);
    if (index === -1) {
      id++;
      cartItems.push(newProduct);
    } else {
      cartItems[index].quantity += 1;
    }
    // id++;
    // cartItems.push(newProduct);
    res.status(200).send(cartItems);
  },
  deleteProducts: (req, res) => {
    console.log(req.params);
    //     let index = req.query.index
    //     products.forEach(product, i) => {
    //       if (product.id === Number(index)){
    //         products.splice(index, 1);
    //         res.status(200).send(products);
    //     }
    // }
    let { id } = req.params;
    console.log(req.params.id, cartItems);
    let index = cartItems.findIndex(product => product.id === +id);
    console.log("IDENTIFIEER", index);
    // req.query.index;
    // myCart.forEach((product, i) => {

    if (index !== -1) {
      cartItems.splice(index, 1);
      console.log(cartItems);
      res.status(200).send(cartItems);
    } else {
      // cartItems.splice(newProduct, 1);
      res.status(404).send(cartItems);
    }
  }
};
