const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");
const billingRouter = require("./user/billing");

router.use("/admin", adminRouter);
router.use("/user", billingRouter);

module.exports = router;
