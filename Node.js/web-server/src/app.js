const express = require("express");
const path = require("path");
const hbs = require("hbs");
const fetchMapData = require("./weather");

const app = express();

const port = process.env.PORT || 3000;

// Define path for express config
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebar engine
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index.hbs", {
    title: "Weather App",
    name: "Yash",
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "About Page",
    name: "Yash",
  });
});

app.get("/help", (req, res) => {
  res.render("help.hbs", {
    title: "Help Page",
    name: "Yash",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Please provide address..!!",
    });
  }

  fetchMapData(req.query.address)
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
});

app.get("/help/*", (req, res) => {
  res.render("error.hbs", {
    title: "404",
    message: "Help article not found",
    name: "yash",
  });
});

app.get("*", (req, res) => {
  res.render("error.hbs", {
    title: "404",
    message: "Page not found",
    name: "yash",
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
