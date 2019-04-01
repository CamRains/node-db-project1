const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const storeController = require("./controllers/storeController");
app.use(bodyParser.json());

app.get("/api/products", storeController.readProducts);
app.post("/api/products", storeController.addToCart);
app.put("/api/products/:id", storeController.updateCartQuantity);
app.delete("/api/products/:id", storeController.deleteProducts);

const PORT = 4420;
app.listen(PORT, () =>
  console.log(
    `server reving up on the most gnarly ported block at ${PORT} rpms`
  )
);
