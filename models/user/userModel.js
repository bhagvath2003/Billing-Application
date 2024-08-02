const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  billing: [
    {
      billingId: {
        type: String,
        required: true,
      },
      billingDate: {
        type: String,
        required: true,
      },
      productId: {
        type: String,
        required: true,
      },
      productName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        default: 0,
        required: true,
      },
      price: {
        type: Number,
        default: 0,
        required: true,
      },
      priceWithGST: {
        type: Number,
        default: 0,
        required: true,
      },
      productDiscount: {
        type: Number,
        default: 0,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
