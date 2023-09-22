const express = require('express'); //its a function that will be executed
const app = express(); //express will return something and will be stored in app object
//opp will help us to create server side web app
// console.dir(app);

//Listening
let port = 3000;
app.listen(port, () => {   //app object has specific method --> listen, listen creates a web server which listens incoming API and when the web server starts it prints app is listening on port ...
    console.log(`app is listening on port ${port}`);
});



//to stop the server --> ctrl+c

//error finding -->  go to web browser type localhost:3000 if you get -- Cannot GET /  -- then congrats you have a server but the thing is that the server is not having any suitable response for u

//receive
app.get("/",(req, res) => {
    res.send("you contacted root path");
});

app.get("/search",(req, res) => {
    res.send("you contacted searching path");
});

app.get("/help",(req, res) => {
    res.send("you contacted help path");
});

app.get("*",(req, res) => {
    res.send("you contacted a path that doesn't exist");
});


// app.use((req, res) => {  //whenever any request comes then app.use will receive the request and print request received
//     console.log("request received");
//     //1. res.send("Anjali is studying"); //response 
//     //2.  res.send({
//     //     name: "Apple",
//     //     color:"red",
//     // });
//     //3.
//     let code ="<h1>Fruits</h1> <ul><li>Pineapple</li><li>Grapes</li></ul>";
//     res.send(code);

//});

