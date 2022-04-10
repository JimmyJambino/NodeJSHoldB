import db from './createMySQLConnection' // can call it whatever (db in this case) because we exported as default.

//Communicating with the driver here.
db.query(`
CREATE TABLE IF NOT EXISTS players (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(70)
);
`)

db.end()