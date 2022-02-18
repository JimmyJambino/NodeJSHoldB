const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.sendFile("C:/Users/Jimmy/Documents/github/NodeJSHoldB/mainFolder/3_World_Wide_Express/public/index.html"); // wrong way
})

// Not RESTApi
app.get("/bored", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html") // Better way
})

app.listen(8080, () => {
    console.log("yayeet")
})