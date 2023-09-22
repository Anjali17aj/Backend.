//TOPIC: Routing

const express = require('express'); //its a function that will be executed
const app = express(); //express will return something and will be stored in app object
//opp will help us to create server side web app
// console.dir(app);

//Listening
let port = 3000;
app.listen(port, () => {   //app object has specific method --> listen, listen creates a web server which listens incoming API and when the web server starts it prints app is listening on port ...
    console.log(`app is listening on port ${port}`);
});


//receive
app.get("/",(req, res) => {
    res.send("Hello, you contacted root path");
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

app.post("/",(req, res) => {
    res.send("you sent a post request to root");
});
