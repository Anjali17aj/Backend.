const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true})); //express will parse url encoded data
app.use(express.json()); //express will parse json data

app.get("/register", (req, res) => { //register is a route then callback..sends a get response
    let { user, password} = req.query;
    res.send(`standard GET response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    
    res.send(`standard POST response. Welcom ${user}!`);
});


app.listen(port, () => {
    console.log(`listening to port ${port}`);
});