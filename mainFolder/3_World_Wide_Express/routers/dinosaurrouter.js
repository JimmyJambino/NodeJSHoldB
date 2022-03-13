const router = require("express").Router();
const dino = require("../dinosaurs/dinosaurs.json")

router.get("/calculatecooldinosaurs", (req, res) => {
    res.send({data: dino.coolDinosaurs.length})
})

router.get("amountofcooldinosaurs", (req, res) => {
    res.redirect("/calculatecooldinosaurs") // if this was a fetch, it won't give me this data. This only works because this is .. ? Has to do with data/endpoint vs website/html file
})

router.get("/coolestdinosaur", (req, res) => {
    if(req.query.cool.toLowerCase() === "yes") {
        res.send({dinosaurs: "Mosasaurius"})
    } else {
        res.send({
            dinosaurs: "T. Rex"
        })
    }

    
})

module.exports = { // module is an object, while exports is a key (field)
    router: router // it's ok to name it the same, but we might as well shorten it to just router. It will understand the kvp.
}