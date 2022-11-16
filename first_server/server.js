require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser"); // Introduce
const httpStatus = require("http-status"); // Introduce
const app = express();

app.use(bodyParser.json());

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

// EJS

app.get("/plants/:id/edit", (req, res) => {
  const index = req.params.id;
  res.render("edit.ejs", {index, value:plants[index]});
})

app.get("/plants/new", (req, res) => {
  res.render("new.ejs", {}); 
})

// REST

app.get("/plants", (req, res) => {
  res.json(plants);
});

app.get("/plants/:id", (req, res) => {
  const result = plants[req.params.id]; // using id as index
  if(!result)
    return res.sendStatus(httpStatus.NOT_FOUND);
  else
    return res.json(result);
})

app.post("/plants", (req, res) => {
  const {data} = req.body;
  if(!data)
    return res.sendStatus(httpStatus.BAD_REQUEST)
  else{
    plants.push(data);
    return res.sendStatus(httpStatus.CREATED);
  }
})

app.put("/plants/:id", (req, res) => {
  const {data} = req.body;
  const index = req.params.id;
  console.log("PUT", req.body, index);
  if(index > (plants.length - 1)) return res.sendStatus(httpStatus.BAD_REQUEST); // Unable to find the id (index)

  plants[index] = data;
  return res.sendStatus(httpStatus.OK);
})

app.delete("/plants/:id", (req, res) => {  
  const index = req.params.id;

  if(index > (plants.length - 1)) return res.sendStatus(httpStatus.BAD_REQUEST); // Unable to find the id (index)

  plants.splice(index, 1);

  return res.sendStatus(httpStatus.OK);
})

// http://localhost:4000/edison/2?appendText=Shall%20we%20cook?
app.get("/:name/:plantIndex", (req, res) => {
  console.log(req.query);
  res.send(`Hi, ${req.params.name}. You have selected ${plants[req.params.plantIndex]}. ${req.query.appendText}`);
});

app.listen(process.env.PORT, () => {
  console.log(`I am listening to port ${process.env.PORT}`);
});