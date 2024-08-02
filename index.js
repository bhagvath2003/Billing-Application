const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routers");
const Port = 3000;

app.use(express.json());

app.use(router);
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.nk7fe2u.mongodb.net/billing?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server started on the PORT Number ${Port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
