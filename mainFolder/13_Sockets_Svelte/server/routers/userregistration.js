import express from 'express'

const router = express.Router()

router.get("/api/fetchUser", (req, res) => {
    res.send({data: req.session.username})
}) 

router.get("/api/logout", (req, res) => {
    res.send({ data: "Sad to see you go." })
})

router.post("/api/registerUser", (req, res) => {
    req.session.username = req.body.name // name is what we defined "name" in the html form.
    res.send({ data: "Welcome: " + req.body.name })
})

router.get("/api/logout", (req, res) => {
    req.session.destroy(()=> {
        res.send({ data: "Goodbye"})
    })
})

export default router