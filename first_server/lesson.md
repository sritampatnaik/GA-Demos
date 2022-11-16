# Lesson - URL Parameters

## Lesson Plan

|#|Item|Duration|
|-|-----|--------|
|1|Career Services|1 hr|
|-|BREAK|10 mins|
|2|Lesson|1 hr|
|-|BREAK|10 mins|
|3|Lab|40 mins|

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
## Lesson Agenda

Anatomy of a URL:
<img src="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL/mdn-url-all.png" />


1. Route Parameter
    - GET /awesome    
    - GET /:name

1. Order is important

1. Multiple Params
    - GET /:name/:plantIndex

1. Inspect Request Object at [expressjs.com](https://expressjs.com)

1. Use of Query String Parameter 
    - All value are captured as string
    - GET /:name/:plantIndex?appendText=&repeat=

1. Use [dotenv library](https://www.npmjs.com/package/dotenv) to load environment variables from .env file
  
# Lesson - RESTful

## Lesson Plan

|#|Item|Duration|
|-|-----|--------|
|1|Lesson - RESTful|1 hr 20 mins|
|-|BREAK|10 mins|
|2|Lesson - MVC Model|1 hr 20 mins|

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

> PUT is used to update entire object.
> PATCH is used to update partial object.

## Apply RESTful to an array of plants

Note: We will temporary exclude endpoint (2) and (5) from the above table. That would gives us:

|#| **URL** | **HTTP Verb** |  **Action**|**Content Type**|
|-|------------|-------------|------------|---------------|
|1| /photos/         | GET       | index  |application/json|
|2| /photos          | POST      | create |application/json|  
|3| /photos/:id      | GET       | show   |application/json|
|4| /photos/:id      | PUT       | update |application/json|
|5| /photos/:id      | DELETE    | destroy|application/json|