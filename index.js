const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routers");
const Port = 3000;

app.use(express.json());

app.use(router);
mongoose
  .connect(
    "mongodb"
  )
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server started on the PORT Number ${Port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
