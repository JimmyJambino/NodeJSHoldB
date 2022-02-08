// app.js is the default/generally accepted name for all express projects.

// import Express
const express = require("express"); // library
const app = express(); // instance
// One-liner: const app = require("express")()

app.use(express.json()); // tells express that we are allowed to parse JSON
app.get("/", (req, res) => { // backend URI
    res.send({"message":"We did it!"}); // JSON data
}); // Request, response, express gives me this info?

app.get("/welcome", (req, res) => {
    res.send({message: "Welcome to the server!"})
})

app.post("/mirror", (req, res) => {
    res.send(req.body)
})
// app.listen() at the bottom of the file, conventional.
app.listen(8080) // standard port for http, 9090 is standard port for https
