const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    productId: {
      type: Number,
      default: 0,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    productStock: {
      type: Number,
      default: 0,
      required: true,
    },
    perProductPrice: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
