import express from "express" // improt {Router} from "express"
const router = express.Router() // = Router()
import db from "../database/createConnection.js"

const players = [
    {id: 1, name: "Messi"},
    {id: 2, name: "Ronaldo"},
    {id: 3, name: "Ronaldinho"}    
]

router.get("/players", async (req, res) => {
    const players = await db.all("SELECT * FROM players;")
    console.log(players)
    res.send({data:players})
})

router.post("/api/players", async (req, res) => {
    const {name} = req.body
    const {changes} = await db.run(`INSERT INTO players (name) VALUES (?);`, [name]) // This sanitizes the value, which prevents sqlinjection.
    console.log(result)
    res.send({rowsAffected: changes})
})

export default router