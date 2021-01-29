const express = require("express");
const db = require("../models");

const router = express.Router();

//VIEWS ROUTES
//GET Route to render index page


//GET Route to render signup page


//GET Route to dashboard page


//GET Route to connections page

//GET Route to edit user page

//GET Route for delete page

//GET Route for treat points page


//API ROUTES
//GET Route to get all users
router.get("/api/users",(req,res)=>{
    db.User.findAll().then(allUsers=>{
        res.json(allUsers)
    }) 
})
//POST Route create a new user in database


//PUT Route to update the user in database


//DELETE Route to delete user from database