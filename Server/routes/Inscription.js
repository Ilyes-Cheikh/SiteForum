const express = require("express")
const router = express.Router()
const Inscr = require("../models/Inscr");
const multer = require('multer');

router.use(express.json());
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './CV');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: storage,
})

router.get("/", (req, res) => {
    Inscr.find().then((users) => {
        res.send(JSON.stringify(users))
    }).catch((err) => {
        console.log(err)
    })
})

router.delete("/", (req, res) => { //delete all inscriptions
    Inscr.deleteMany({}).then((users) => {
        res.send(JSON.stringify(users))
    }).catch((err) => {
        console.log(err)
    })
})

router.post("/", upload.single('CV'), (req, res) => {
    console.log(req.body)
    email = req.body.Email
    Inscr.findOne({Email:email}).then((user)=>{
        if(user){
            return res.status(422).send(JSON.stringify({error: 'Email already exists'}))
        }else{
            const newInscr = new Inscr({
                Nom: req.body.Nom,
                Prenom: req.body.Prenom,
                Email: req.body.Email,
                Birthday: req.body.Birthday,
                Status: req.body.Status,
                Universite: req.body.Universite,
                Classe: req.body.Classe,
                Vaccine: req.body.Vaccine,
                Partage: req.body.Partage,
        
            })
            if (req.file !== undefined){
                newInscr.CV = req.file.originalname
            }else{
                newInscr.CV = null
            }
            newInscr.save().then((result) => {
                console.log(result)
                res.status(200).send(JSON.stringify(result))
            }).catch(err => {
                console.log(err)
                res.status(400).send(JSON.stringify({ error: "Error adding this to the db" }))
            })
        }
    }).catch(err=>{
        res.status(400).json({err:"error while finding mail"})
    })
    
})


module.exports = router