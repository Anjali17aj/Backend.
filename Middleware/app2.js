const express = require("express");
const app = express();

//logger - morgan
app.use((req, res, next) => {
    req.time = Date.now()
    //req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path);
    next();
});

//error handling middleware
app.use((req, res) => {
    res.status(404),send("page not found");
});

app.get("/random", (req, res, next) => { //http://localhost:8080/random
    console.log("this is a random page");
    next();
});

//middleware -> response send
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => { //http://localhost:8080/random
    res.send("this is a random page");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});