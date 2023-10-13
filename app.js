const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = ( req, res, next) => {
    let {token} = req.query;
    if(token == "giveaccess"){ //http://localhost:8080/api?token=giveaccess
        next();
    }
    throw new ExpressError(401,"Access denied!");
};

app.get("/api", checkToken, (req, res) => { //http://localhost:8080/random
    res.send("data");
});

app.get("/",(req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => { //http://localhost:8080/random
    res.send("this is a random page");
});


//errr handling. 
app.get("/err", (req, res) =>{
    abcd = abcd;
 });
 
 //express custom errr handling.

 app.use((err, req, res, next) =>{
    let {status, message} = err; //let {status = 500, message="some error occured"} = err;
    res.status(status).send(message);
 });
// app.use((err, req, res, next) =>{
//    console.log("--------err----------"); //http://localhost:8080/api?token=giveaccess
//    next(err);  //http://localhost:8080/api?token=giveaccessnot
// });

app.use((err, req, res, next) =>{
    console.log("--------err----------"); 
    next(err);
    //res.send(err);
 });

//  app.use((err, req, res, next) =>{
//     console.log("--------err----------"); 
//     next(err);
//  });


app.listen(8080, () => {
    console.log("server listening to port 8080");
});