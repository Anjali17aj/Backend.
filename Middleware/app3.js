const express = require("express");
const app = express();

//----------error-----------
//error handling middleware
// app.use((req, res) => {
//     res.status(404),send("page not found");
// });

// app.use("/api", (req, res, next) => { //http://localhost:8080/random
//     let {token} = req.query;
//     if(token === "giveaccess"){ //http://localhost:8080/api?token=giveaccess
//         next();
//     }
//     res.send("ACCESS DENIED!");
// });

//passing multiple middlewares. checkToken is a middleware
const checkToken = (req, res, next) => { //http://localhost:8080/random
    let {token} = req.query;
    if(token === "giveaccess"){ //http://localhost:8080/api?token=giveaccess
        next();
    }
    throw new error("ACCESS DENIED!");
};


app.get("/api", checkToken, (req, res) =>{
    res.send("data");
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