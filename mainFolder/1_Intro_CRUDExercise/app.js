const express = require("express");
const app = express();
app.use(express.json()); 
let idCounter = 1; // MySQL starts ids at 1

class Beer {
    constructor(name, id) {
        this.id = idCounter++; // auto increment
        this.name = name;
        if(id !== undefined) { // checks if we're attempting to manually assign id, and if so, does it.
            this.id = id;
        }
    }
}

const beerRepo = [new Beer("Heineken"), new Beer("Grøn Carlsberg"), new Beer("Tuborg Classic"), new Beer("Hoegaarden")];

app.get("/beers", (req, res) => {
    res.send(beerRepo);
});

app.get("/beers/:beerId", (req, res) => { // check if found, else send other response
    const beerId = parseInt(req.params.beerId);
    let body = {};
    beerRepo.forEach(beer => {
        if(beer.id === beerId) {
            body = beer;
        }
    });
    res.send(body); // if we always have to send a response back, then assigning an empty object is one of several choices to solve the issue. 
});

app.post("/beers", (req, res) => {
    const beer = new Beer(req.body.name)
    beerRepo.push(beer);
    res.send(beer);
});

app.put("/beers/:beerId/", (req, res) => {
    const beerId = parseInt(req.params.beerId); 
    let body = {};

    for(let i = 0; i < beerRepo.length; i++) {
        if(beerRepo[i].id === beerId) {
            beerRepo[i] = new Beer(req.body.name, beerId);
            body = beerRepo[i];
        }
    }
    res.send(body);
});

app.patch("/beers/:beerId/", (req, res) => {
    const beerId = parseInt(req.params.beerId);
    let body = {};
    beerRepo.forEach(beer => {
        if(beer.id === beerId) {
            if(beer.name !== req.body.name && req.body.name !== undefined) {
                beer.name = req.body.name;
            }
            body = beer;
        }
    })
    res.send(body);
});

app.delete("/beers/:beerId", (req, res) => {
    const beerId = parseInt(req.params.beerId);
    let body = {};
    const index = beerRepo.findIndex(beer => {
        return beer.id === beerId;
    });
    if(index !== -1) 
    {
        body = beerRepo[index];
        beerRepo.splice(index,1);
    }
    res.send(body);
});

app.listen(8080);