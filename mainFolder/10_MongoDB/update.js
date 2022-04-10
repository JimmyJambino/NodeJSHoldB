import db from "./createConnection.js"

db.tutorials.updateOne({channel: "How to Basic"}, {$set: {viewCounter: 12010}})