import dotenv from "dotenv" //use this in app.js as well
dotenv.config() // Reads the .env file? See documentation.
import mysql from "mysql"

//const {HOST, DB_USER} = process.env // This can be used to destructure. Can be faster (but insignificant time saved tho)

const connection = mysql.createConnection({ // Creates a connection object, not an actual connection. 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
    //database: 'cinema' // create cinema db in mysql shell before connect() or it can't find it.
})

connection.connect()  

export default connection

// How to define variables outside the codebase:
// environmental variables is a possibility. Like PORT = 5000, then apply it in a script. But it is still visible in the package.json that is pushed.
// Better to use a package for environmental variables (dotenv) to apply a file that contains the necessary variables. Read documentation.