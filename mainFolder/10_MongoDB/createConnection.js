import { MongoClient } from "mongodb"

const url ="mongodb://localhost:27017" // port can be seen when running the server

const dbName = "youtubevideos"

const client = await MongoClient.connect(url)
// rn it is connected to server but not database?

const db = client.db(dbName)

console.log(db)

export default {
    tutorials: db.collection("tutorials")
}