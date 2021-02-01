const express = require("express");
const db = require("../models");

const router = express.Router();


//API ROUTES
//GET Route to get all users
router.get("/api/users",(req,res)=>{
    db.User.findAll().then(allUsers=>{
        res.json(allUsers)
    }) 
})
//POST Route create a new user in database
router.post("/api/users",(req,res)=>{
    db.User.create(req.body)
    .then((createdUser)=> {
        res.json(createdUser);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

//PUT Route to update the user in database
router.put("/api/users/:id", (req, res)=> {
    db.User.update(req.body,{
        where: {
        id: req.params.id,
        },
    })
    .then((result)=> {
        res.json(result);
    })
    .catch((err)=>{
        console.log (err);
        res.status(404).end();
    });
});

//DELETE Route to delete user from database
router.delete("/api/user/:id", (req, res) => {
    db.User.delete({
      where: {
        id: req.params.id,
      },
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).end();
      });
  });

module.exports = router;