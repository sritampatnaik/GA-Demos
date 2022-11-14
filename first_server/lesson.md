
Add these array to the code:
```js
const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];
```


1. Route Parameter
    - GET /awesome    
    - GET /:name

1. Order is important

1. Multiple Params
    - GET /:name/:plantIndex

1. Inspect Request Object at [expressjs.com](https://expressjs.com)

1. Use of Query String Parameter 
    - All value are captured as string
    - GET /:text?appendText=&repeat=

1. Use [dotenv library](https://www.npmjs.com/package/dotenv) to load environment variables from .env file
  