# Lesson - URL Parameters

## Lesson Plan

|#|Item|Duration|
|-|-----|--------|
|1|Lesson|1 hr 20 mins|
|-|BREAK|10 mins|
|2|Lab|1 hr 20 mins|

## Start Lesson Code

Copy & paste this code to `server.js` before lesson begins.

```js
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
```
## Lesson Objectives

1. Route Parameter
    - GET /awesome    
    - GET /:name

    ```js
        res.send(`Hi, ${name}`);
    ```

1. Order is important

1. Multiple Params
    - GET /:name/:plantIndex

    ```js
        res.send(`Hi, ${req.params.name}. You have chosen ${plants[req.params.plantIndex]}. `);
    ```

1. Inspect Request Object at [expressjs.com](https://expressjs.com)

1. Use of Query String Parameter 
    - All value are captured as string
    ```js
        res.send(`Hi, ${req.params.name}. You have chosen ${plants[req.params.plantIndex]}. ${req.query.appendText}`);
    ```
    - GET /:name/:plantIndex?appendText=&repeat=
    ```js
        let resBody = "";
        for(let i=0 ; i<Number(req.query.repeat) ; i++){
            resBody += `Hi, ${req.params.name}. You have chosen ${plants[req.params.plantIndex]}. ${req.query.appendText}`;
        }
        res.send(resBody);
    ```

1. Use [dotenv library](https://www.npmjs.com/package/dotenv) to load environment variables from .env file
  
# Lesson - RESTful

## Lesson Plan

|#|Item|Duration|
|-|-----|--------|
|1|Lesson - RESTful|1 hr 20 mins|
|-|BREAK|10 mins|
|2|Lesson - MVC Model|1 hr 20 mins|

> Lab on saturday

## Introduction to RESTful

> RESTful API is a convention on how online resources can be read and manipulated via HTTP Endpoints.

The 7 RESTful routes that allow us basic operations for reading and manipulating a collection of data:

|#| **URL** | **HTTP Verb** |  **Action**|**Content Type**|
|-|------------|-------------|------------|---------------|
|1| /photos/         | GET       | index  |application/json|
|2| /photos/new      | GET       | new    |text/html|
|3| /photos          | POST      | create |application/json|  
|4| /photos/:id      | GET       | show   |application/json|
|5| /photos/:id/edit | GET       | edit   |text/html|
|6| /photos/:id      | PATCH/PUT | update |application/json|
|7| /photos/:id      | DELETE    | destroy|application/json|

## Apply RESTful to an array of plants

Note: We will temporary exclude endpoint (2) and (5) from the above table. That would gives us:

|#| **URL** | **HTTP Verb** |  **Action**|**Content Type**|
|-|------------|-------------|------------|---------------|
|1| /photos/         | GET       | index  |application/json|
|2| /photos          | POST      | create |application/json|  
|3| /photos/:id      | GET       | show   |application/json|
|4| /photos/:id      | PUT       | update |application/json|
|5| /photos/:id      | DELETE    | destroy|application/json|