const express = require("express");

const books = require("./products.js.js");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("using express");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/books", (req, res) => {
  res.send(books);
});

app.get("/books/:name", allBooks, (req, res) => {
  const name = req.params.name;
  res.send(name);
});

function allBooks(req, res, next) {
  console.log("Fetching all books");
  console.log((req.params.name = "yash"));
  next();
}

app.listen(port, () => {
  console.log("listening on port 3000");
});
