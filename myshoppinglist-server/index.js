const express = require("express");

const bodyPaser = require("body-parser");
const cors = require("cors");

const { mysql } = require("./db.js");
var itemController = require("./controllers/itemController.js");
var authController = require("./controllers/auth.js");
const Item = require("./models/item");
var app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyPaser.json());

var hostName = "localhost";
//var port = 3000;
const port = process.env.PORT || 8080;

var name = "toilet paper";

Item.findOne({
  where: {
    item_id: 30,
  },
})
  .then((items) => {
    console.log("!");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, hostName, function () {
  console.log(`Server is running at http://${hostName}:${port}`);
});

app.use("/list", itemController);
app.use('/auth', authController);
