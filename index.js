// imports for express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// import from queries.js
const db = require("./queries");

// configuration for body parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// if you go to http://localhost:3000/vendors you should see all the vendors
app.get("/vendors", db.getVendors);
