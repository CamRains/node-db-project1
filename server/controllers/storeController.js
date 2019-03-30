const products = require("../data/data.json");

let myProducts = [];
let id = 0;

module.exports = {
  readProducts: (req, res) => {
    console.log(products.products);
    res.status(200).send(products.products);
  },
  createProducts: (req, res) => {
    const { item, image_path, price } = req.body;
    const newProduct = {
      item,
      image_path,
      price
    };
    myProducts.push(newProduct);
    id++;
    res.status(200).send(myProducts);
  }
};
