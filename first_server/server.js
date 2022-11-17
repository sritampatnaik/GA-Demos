require('dotenv').config()
const httpStatus = require('http-status');// IMPORT
const express = require("express");
const bodyParser = require('body-parser'); 
const app = express();

app.use(bodyParser.json()); 

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

// EJS

app.get("/plants/new", (req, res) => {
  res.render("new.ejs");
})

app.get("/plants/:id/edit", (req, res) => {
  const index = req.params.id;
  res.render("edit.ejs", {
    value:plants[index],
    index
  });
})


// RESTful Endpoints

// GET /plants
app.get("/plants", (req, res) => {
  res.json(plants);
})

// POST /plants
app.post("/plants", (req, res) => {
  const {value} = req.body;
  if(!value) return res.sendStatus(httpStatus.BAD_REQUEST) // validation
  plants.push(value);
  res.sendStatus(httpStatus.CREATED);
})

// GET /plants/:id
app.get("/plants/:id", (req, res) => {
  const index = req.params.id;
  res.json({value:plants[index]});
})

// PUT /plants/:id
app.put("/plants/:id", (req, res) => {
  
  // Capture the value and index information from the REQUEST
  const {value} = req.body;
  const index = req.params.id;

  // Update the array
  plants[index] = value;

  // Return appropriate http status (200)
  res.sendStatus(httpStatus.OK);
})

// DELETE /plants/:id
app.delete("/plants/:id", (req, res) => {
  throw "Not implemented";
})



app.listen(process.env.PORT, () => {
  console.log(`I am listening to port ${process.env.PORT}`);
});