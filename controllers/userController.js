const express = require("express");
const db = require("../models");

const router = express.Router();

//API ROUTES
//GET Route to get all users
router.get("/api/users", (req, res) => {
  db.User.findAll().then((allUsers) => {
    res.json(allUsers);
  });
});
//POST Route create a new user in database
router.post("/api/users", (req, res) => {
  db.User.create(req.body)
    .then((createdUser) => {
      res.json(createdUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

//PUT Route to update the user in database
router.put("/api/users/:id", (req, res) => {
  db.User.update(req.body, {
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

//DELETE Route to delete user from database
router.delete("/api/user/:id", (req, res) => {
  db.User.destroy({
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

// POST route for user login
router.post("/api/users/login", (req, res) => {
  console.log(req.body);
  db.User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((foundUser) => {
    if (foundUser) {
      if (foundUser.password === req.body.password) {
        return res.json({
          userId: foundUser.id,
          success: true,
        });
      } else {
        return res.json({ message: "Email or password is not correct." });
      }
    }
    return res.json({ message: "User not found." });
  });
});

router.get("/api/users/:id", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundUser) => {
    res.json(foundUser);
  });
});

module.exports = router;
