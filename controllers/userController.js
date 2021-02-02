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
// get route for all extra small dogs
router.get("/api/users/extra-small", (req, res) => {
  db.User.findAll({
    where: {
      dogSize: "Extra Small",
    },
  }).then((extraSmallDogs) => {
    res.json(extraSmallDogs);
  })
  
});

//Get route for small dogs
router.get("/api/users/small", (req, res) => {
  db.User.findAll({
    where: {
      dogSize: "Small",
    },
  }).then((smallDogs) => {
    res.json(smallDogs);
  })
  
});

//Get route for medium dogs
router.get("/api/users/medium", (req, res) => {
  db.User.findAll({
    where: {
      dogSize: "Medium",
    },
  }).then((mediumDogs) => {
    res.json(mediumDogs);
  })
  
});

//Get route for large dogs
router.get("/api/users/large", (req, res) => {
  db.User.findAll({
    where: {
      dogSize: "Large",
    },
  }).then((largeDogs) => {
    res.json(largeDogs);
  })

});

//Get route for extra-large dogs
router.get("/api/users/extra-large", (req, res) => {
  db.User.findAll({
    where: {
      dogSize: "Extra Large",
    },
  }).then((extraLargeDogs) => {
    res.json(extraLargeDogs);
  })

});

//Get route for vaccinated dogs
router.get("/api/users/vaccinated", (req, res) => {
  db.User.findAll({
    where: {
      dogVaccinated: true,
    },
  }).then((vaccinated) => {
    res.json(vaccinated);
  })

});

//Get route for vaccinated dogs
// router.get("/api/users/not-vaccinated", (req, res) => {
//   db.User.findAll({
//     where: {
//       dogVaccinated: false,
//     },
//   }).then((notVaccinated) => {
//     res.json(notVaccinated);
//   })

// });

//Get route for all dog friendly
router.get("/api/users/all-dog", (req, res) => {
  db.User.findAll({
    where: {
      friendliness: "All dog friendly",
    },
  }).then((allDogFriendly) => {
    res.json(allDogFriendly);
  })

});

//Get route for all dog friendly
router.get("/api/users/small-dog", (req, res) => {
  db.User.findAll({
    where: {
      friendliness: "Small dog friendly",
    },
  }).then((smallDogFriendly) => {
    res.json(smallDogFriendly);
  })

});

//Get route for large dog friendly
router.get("/api/users/large-dog", (req, res) => {
  db.User.findAll({
    where: {
      friendliness: "Large dog friendly",
    },
  }).then((largeDogFriendly) => {
    res.json(largeDogFriendly);
  })

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
router.delete("/api/users/:id", (req, res) => {
  db.User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.json(result);
      res.status(200).end();
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
