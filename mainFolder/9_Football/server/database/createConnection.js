import sqlite3 from "sqlite3"
import {open} from "sqlite"

const db = await open({
    filename: "football.db", // filename: "/tmp/database.db", root of the filesystem. Doesn't exist on other systems.
    driver: sqlite3.Database
})

export default db
