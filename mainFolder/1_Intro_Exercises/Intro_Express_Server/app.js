// app.js is the default/generally accepted name for all express projects.
// remember to make a package.json file because it is the entry point to the app. The dependencies can also be installed via npm install "dependency"
// they can be found in the node_modules

// import Express
const express = require("express"); // library, dependency
const app = express(); // instance
// One-liner: const app = require("express")()

app.use(express.json()); // tells express that we are allowed to parse JSON, also called body parsing.
app.get("/", (req, res) => { // backend URI
    res.send({"message":"We did it!"}); // JSON data
}); // Request, response, express gives me this info?

app.get("/welcome", (req, res) => {
    res.send({message: "Welcome to the server!"})
})

app.post("/mirror", (req, res) => {
    res.send(req.body)
})

// url kangaroofacts?cankick=true&lol=nah
app.get("/kangaroofacts", (req, res) => {
    //console.log(req.query)
    res.send(req.query);
    // res.send(req.query.cankick); // only one param
});

// url
app.get("/clientgreeting/:name", (req, res) => {
    res.send({greeting:`Hello there, ${req.params.name}`})
})

// app.listen() at the bottom of the file, conventional.
// standard port for http, 9090 is standard port for https
app.listen(8080, (error) => {
    console.log("Server is running on port", 8080)
}) 
// nodemon app.js
// send data with a Get request: path variable, query string
// url:/1, url: ?key=value&key2=value2

