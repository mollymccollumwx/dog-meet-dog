const db = require("../models");
const { Op } = require("sequelize");

module.exports = function (app) {
  //////////////HTML/HANDLEBARS ROUTES//////////////////////
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.get("/connections/:id", (req, res) => {
    db.Connection.findAll({
      where: {
        [Op.or]: [{ userOneId: req.params.id }, { userTwoId: req.params.id }],
      },
      include: [
        { model: db.User, as: "userOne" },
        { model: db.User, as: "userTwo" },
      ],
    })
      .then((connections) => {
        //created new object
        const usersMap = {};

        //looping over connections data
        for (let i = 0; i < connections.length; i++) {
          //declaring new variable for each object in the connections array
          const userOne = connections[i].userOne;
          const userTwo = connections[i].userTwo;

          //making a conditional matches id in connections and id from the URL
          if (userOne.id === parseInt(req.params.id)) {
            // creating a new key that userOne from our connections data and concats with userTWo from connections data
            const key = userOne.id + "" + userTwo.id;
            //creating key value pair with the key from line above and the value from userTwo data from connections
            usersMap[key] = userTwo.dataValues;

            //making a conditional matches id in connections and id from the URL
            //reverses logic from above
            //overwrites if it already exists
          } else if (userTwo.id === parseInt(req.params.id)) {
            const key = userTwo.id + "" + userOne.id;
            usersMap[key] = userOne.dataValues;
          }
        }
        //making object of objects into array of objects
        const arrayOfObjects = Object.values(usersMap);

        res.render("connections", { connections: arrayOfObjects });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("/dashboard", (req, res) => {
    res.render("dashboard");
  });

  app.get("/delete-user", (req, res) => {
    res.render("delete-user");
  });

  app.get("/edit-user", (req, res) => {
    res.render("edit-user");
  });

  app.get("/index", (req, res) => {
    res.render("index");
  });

  app.get("/treat-points", (req, res) => {
    res.render("treat-points");
  });

  app.get("/api/config", (req, res) => {
    res.json({
      success: true,
    });
  });
};
