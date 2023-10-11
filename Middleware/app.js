const express = require("express");
const app = express();


app.use((req, res, next) => {
    // let { query} = req.query;
    // console.log(query);
    console.log("Hi, I am middleware");
    next(); //middleware's next
    return next();
    console.log("this is after next()")
});

app.use((req, res, next) => {
   
    console.log("Hi, I am 2nd middleware");
    next();
});
//middleware -> response send
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => { //http://localhost:8080/random
    res.send("this is a random page");
})

app.listen(8080, () => {
    console.log("server listening to port 8080");
});