require('dotenv').config()
const express = require("express");
const app = express();

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

app.get("/awesome", (req, res) => {
  res.send("I am awesome!");
});

// http://localhost:4000/edison/2?appendText=Shall%20we%20cook?
app.get("/:name/:plantIndex", (req, res) => {
  console.log(req.query);
  res.send(`Hi, ${req.params.name}. You have selected ${plants[req.params.plantIndex]}. ${req.query.appendText}`);
});

app.listen(process.env.PORT, () => {
  console.log(`I am listening to port ${process.env.PORT}`);
});