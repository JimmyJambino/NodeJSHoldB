import "dotenv/config" // short hand for the import + config()
import express from 'express'
import http from 'http'
import userregistrationRouter from './routers/userregistration.js'

// node, require("crypto").randomBytes(64) buffered result? We saw it in fs FileSystem? Thor knows?
// .toString("hex") is nice.

const app = express()
app.use(express.urlencoded({ extended: true})) // how deep is the url encoding, extended in this case. Parsing forms and not json.

import path from 'path'

app.use(express.static(path.resolve("../client/public/"))) // remember that index.html is magically searched for.


import session from 'express-session'

const sessionMiddleware = session({ // running on http but we are asking it to run on https with secure: true, so it won't run
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
})
app.use(sessionMiddleware)
app.use(userregistrationRouter)

const server = http.createServer(app)

import {Server} from 'socket.io'

const io = new Server(server) // the namespace


// Look up socket.io express-session, adds the session to the socket.
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next)
io.use(wrap(sessionMiddleware))

io.on("connection", (data) => {
    socket.on("colorChanged", (data) => {
        const username = socket.request.session.username 
        data.username = username
        io.emit("changeTheColor", data)
    })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {

})