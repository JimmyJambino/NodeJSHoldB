import db from "./createConnection.js"

db.tutorials.deleteOne({channel: "Computerphile"})