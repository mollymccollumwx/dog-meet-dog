const express = require("express");

const db = require("../models");

const router = express.Router();

//Get 
router.get("/api/connections", (req, res)=> {
    db.Connection.findAll().then(allConnections=> {
        res.json(allConnections); 
    })
})



//Post 

