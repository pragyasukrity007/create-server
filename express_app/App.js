const express = require("express");

//express app
const app = express();

//listen for request
app.listen(3000);

//respond to requests
app.get("/", (req, res) => {
  //res.send("<p> Home page </p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //res.send("<p> About page </p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirect
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//404 page
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
