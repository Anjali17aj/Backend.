//using ejs
const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));  //setting path for view folder to be in the main file only  and path is a package so we have to require it to use it . require a path. path.join path is a package and join is a function that is used to join 2 path. __dirname --> index.js ki current working directory

app.get("/",(req, res) => {  //route no. 1
  res.render("home.ejs"); //express will automatically go to views folder and will find home.ejs so no need to mention the path
});

app.get("/hello",(req, res) => { // route no. 2
    res.send("hello"); //express will automatically go to views folder and will find home.ejs so no need to mention the path
  });

  app.get("/rolldice",(req, res) => { // route no. 2
    let diceVal = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs", {diceVal}); //express will automatically go to views folder and will find home.ejs so no need to mention the path
  });

app.listen(port, ()=>{
   console.log(`Listening on port ${port}`);
});
