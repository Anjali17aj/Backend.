//query string.

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

// app.get("/:username/:id",(req, res) => { //to send a variable we use colon
//     console.log(req.params); //shows request's parameter
//     res.send("you contacted searching path");
// });


app.get("/:username/:id",(req, res) => { //to send a variable we use colon
    let {username, id} = req.params; //shows request's parameter
    let htmlStr = `<h1>welcome to the page of @${username}!.</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});

