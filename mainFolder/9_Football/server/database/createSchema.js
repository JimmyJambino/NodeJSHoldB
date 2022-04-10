import db from "./createConnection.js"

// You could implement deleteMode (if true then) to control whether to drop or not.
db.exec(`DROP TABLE IF EXISTS players;`)
db.exec(`CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50)
);`)

// Seed  roles (admin, tester, anon etc)
db.run("INSERT INTO players (name) values ('Messi')")