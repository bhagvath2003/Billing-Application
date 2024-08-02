const express = require("express");
const addProduct = require("../../controllers/productController");
const productRouter = express.Router();

productRouter.post("/add", addProduct);

module.exports = productRouter;
