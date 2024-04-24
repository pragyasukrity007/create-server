const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  //it will log only in the console and not in the browser console
  // console.log(req.url, "req.url");
  // console.log(req.method, "req.method");

  //lodash

  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() =>{
    console.log("hellooooooooo")
  }
  )

  greet();


  //set header content type
  res.setHeader("Content-Type", "text/html");
  //content to send to the broswer
  // res.write('<head><link rel="styleseet" href="#"></head>');
  // res.write('<p> Hello World!!!!!!!! </p>');
  // res.write('<p> Hello World 222222222!!!!!!!! </p>');
  //sends it to the browser
  // res.end();

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("errorrrrr");
      res.end();
    } else {
      //multiple
      // res.write(data);
      // res.end();
      //single data
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on PORT 3000");
});
