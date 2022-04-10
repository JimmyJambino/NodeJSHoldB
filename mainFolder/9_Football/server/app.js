// npm i sqlite sqlite3
// sqlite is the database?, sqlite3 is the driver

import express from "express"
const app = express();
const PORT = process.env.PORT || 3000;
// import cors from "cors"
// app.use(cors())
import path from "path"
app.use(express.json())

app.use(express.static(path.resolve("../client/public"))) // works magically because of index.html
import playersRouter from "./routers/playersRouter.js"


app.use(playersRouter)


app.listen(PORT, () => {

})