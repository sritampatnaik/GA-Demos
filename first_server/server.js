require('dotenv').config()
const express = require("express");
const app = express();

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

app.listen(process.env.PORT, () => {
  console.log(`I am listening to port ${process.env.PORT}`);
});