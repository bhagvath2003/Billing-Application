const express = require("express");
const billingRouter = express.Router();
const userController = require("../../controllers/userController");

billingRouter.post("/billing", userController);


module.exports = billingRouter;
