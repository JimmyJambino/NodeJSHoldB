const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())

const fs = require('fs') // filesystem

const nav = fs.readFileSync("./public/components/nav/nav.html").toString() // . is important
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

const frontpagePage = nav+frontpage; // Did we just add two html pages together??

app.get("/", (req, res) => {
    res.send(frontpagePage)
    //res.sendFile(__dirname+"/public/pages/frontpage/frontpage.html")
})

app.get("/themepark", (req, res) => {
    res.sendFile(__dirname+"/public/pages/themepark/themepark.html")
})

app.listen(8080)