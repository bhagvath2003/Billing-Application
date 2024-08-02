const productModel = require("../models/admin/productModel");

const addProduct = async (req, res) => {
  let id = Math.random() * 100;
  const { productName, productImage, productStock, perProductPrice } = req.body;
  const newProduct = new productModel({
    productId: id,
    productName: productName,
    productImage: productImage,
    productStock: productStock,
    perProductPrice: perProductPrice,
  });
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = addProduct;
