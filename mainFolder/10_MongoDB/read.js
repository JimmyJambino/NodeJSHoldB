import db from "./createConnection.js"

const tutorials = await db.tutorials.find().toArray()

console.log(tutorials)