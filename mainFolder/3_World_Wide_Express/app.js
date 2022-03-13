const express = require("express") // If it's not a filepath it will look in node_modules
const app = express()
app.use(express.static("public")) // telling the app that the client has access to these files (folder)
// We can also make more than 1 folder static..?

// app.get("/", (req, res) => {
//     res.sendFile("C:/Users/Jimmy/Documents/github/NodeJSHoldB/mainFolder/3_World_Wide_Express/public/index.html"); // wrong way
// })

const dinosaurs = require("./dinosaurs/dinosaurs.json") // if it's a filepath it will look in a path.
console.log(dinosaurs)
const dino = require("./dinosaurs/dinosaurs.js") // We can also destructure the function out from
console.log(dino.calculateAmountOfCoolDinosaurs())

const {router} = require("./routers/dinosaurrouter.js")
app.use(router)

app.use("prepend", router) // This will preprend "prepend" to the endpoint.

app.get("/", (req, res) => { // This is a route. "/" is the endpoint.
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
})

app.get("/welcome", (req, res) => {
    res.send(
        `<h2>Welcome</h2>`
    )
}) 

/// ########################
/*
create endpoint called /proxy
fetch from googles homepage
response.text()
send the page as a response
bonus: async/await
*/

/// ########################

const nodefetch = require('node-fetch')
app.get("/proxy", (req, res) => { // proxying through node to the client can circumvent CORS issues, because the origin will be the same.
    nodefetch("https://www.google.dk")
    .then(response => response.text())
    .then(page => {
        res.send(page)
    })
    /*
    const response = await fetch("url")
    const homepage = await response.text()
    res.send(homepage)
    need async in front of (req, res) --> async (req, res)
    */
})

// Svelte notes: degit is a scaffolding tool. expo init as well etc. Degit is not svelte specific, it has many template projects. It is also lighter as it doesn't DL version history.
// look up npx vs npm


// Not RESTApi
app.get("/bored", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html") // Better way
})
// Could also save process.env.PORT in a const PORT.
const PORT = process.env.PORT || 8080 // dafuq.. is first check defined, otherwise second. This can be extended with more || operators. javascript magic.

app.listen(PORT, () => { // can also be "saved" as const server =, and we can access the used port with server.address().port
    console.log(PORT)
})


//console.log(process.env.PORT) // Environmental variables. Nodemon is in the global nodemodules (what?) 
// Running the port as the environmental variable: 
// PORT=3000 nodemon app.js, but this only works on mac, so we need Cross environmental package
// ^npm i --save-dev cross-env <-- "--save-dev" saves for dev only