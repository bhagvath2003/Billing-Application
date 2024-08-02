const express = require("express");
const authRouter = require("./authRouter");
const productRouter = require("./productRouter");

const adminRouter = express.Router();

adminRouter.use("/auth", authRouter);
adminRouter.use("/product", productRouter);

module.exports = adminRouter;
