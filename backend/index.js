require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const app = express();
 
  app.use(
    cors({
      origin: [process.env.DASHBOARD_URL], 
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/allHoldings", async(req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async(req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async(req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode
  })

  newOrder.save();

  res.send("New order recived...");
})

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
