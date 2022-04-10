import db from "./createMySQLConnection.js"

// db.query(`INSERT INTO players (name) VALUES ('MALTE')`, (err, data) => {
//     console.log(data)

//     db.end()
// })

const {err, results, fields} = await db.query(`INSERT INTO players (name) VALUES ('MALTE');`) // we might need to use mysql2 here and implement promises in order to use await
console.log(results)
db.end()

