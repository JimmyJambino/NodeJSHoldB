import express from 'express'
const app = express()
app.use(express.static("public"))

// type module does not support DIR

// import http from 'https', https.createServer(key, cert)
import http from 'http'
import path from 'path'
const server = http.createServer(app)

import { Server } from 'socket.io' // on and emit, ear and mouth 
const io = new Server(server)

io.on("connection", (socket) => {
    console.log("A client connected", socket.id)
    socket.on("a client changed the color", ({ data }) => {
        //socket.emit("please change the color", {data}) // Only the same socket
        //socket.broadcast.emit("please change the color", {data}) // Only the other sockets
        io.emit("please change the color", {data}) // All of the sockets in the io namespace. A namespace is not the same as in C#. A namespace is similar to a discord server,
        // and a room is equivalent to a room. Lookup socket.io rooms !!!
    })

    socket.on("disconnect", () => {
        console.log("Bye", socket.id)
    })
})

app.use("/", (req, res) => {
    res.sendFile(path.resolve("./public/colors.html"))
})

server.listen(3000)
