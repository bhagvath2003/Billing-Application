const dayjs = require("dayjs");
const userModel = require("../models/user/userModel");

const currentDate = dayjs();
const userController = async (req, res) => {
  let id = Math.random() * 100;
  const user = Math.floor(Math.random() * 1000);
  const billId = Math.floor(Math.random() * 10000) + 10001;
  const billDate = currentDate.format("DD/MM/YYYY");
  const productPrice = 150;
  const priceGST = productPrice + 0.18;
  const discountPrice = productPrice + priceGST - 0.05;
  const billAmount = productPrice + priceGST + discountPrice;
  const { name, phoneNo, productName, quantity } = req.body;
  if (!name || !phoneNo || !productName || !quantity) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const billingInfo = new userModel({
    userId: user,
    name: name,
    phoneNo: phoneNo,
    billing: [
      {
        billingId: billId,
        billingDate: billDate,
        productId: id,
        productName: productName,
        quantity: quantity,
        price: productPrice,
        priceWithGST: priceGST,
        productDiscount: discountPrice,
      },
    ],
    totalAmount: billAmount,
  });

  

  try {
    await billingInfo.save();
    res.status(201).json(billingInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = userController;
