const express = require("express");
const app = express();

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

app.get("/", (req, res) => {
  console.log("Oh hey! I got a request. Let me respond with something");
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("I am listening for requests!!!");
});