console.log("Hello rarararwa")
const dinosaurs = require("./dinosaurs.json")
const {coolDinosaurs} = require("./dinosaurs.json") // now it is no longer the whole object, but just the coolDinosaurs field in the json object. This is destructuring syntax.

function amountOfCoolDinosaurs() {
    return dinosaurs.coolDinosaurs.length
}

const [first, second, third] = coolDinosaurs;
console.log(first)

//console.log(module) // node thing?

// We could also just export the function amountOfCoolDinosaurs and then we could access it from the require/import in app.js without the module.exports part.
module.exports = { // exporting things from the module? Or are we importing?
    newKey: "Sup",
    calculateAmountOfCoolDinosaurs: amountOfCoolDinosaurs // () unecessary?
}

