const express = require("express");
const morgan = require("morgan");

//express app
const app = express();

//listen for request
app.listen(3000);

//creating middleware
app.use(morgan("dev"));

//register  view engine
app.set("view engine", "ejs");

//respond to requests
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "ABC",
      snippet: "Face the sun",
    },
    {
      title: "XYZ",
      snippet: "Face the sun  2",
    },
    {
      title: "LMP",
      snippet: "Face the sun  3",
    },
  ];
  //render view
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
