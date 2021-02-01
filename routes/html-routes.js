const db = require("../models");

module.exports = function (app){
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
        userOneId: req.params.id,
      },
      include: [
        { model: db.User, as: "userOne" },
        { model: db.User, as: "userTwo" },
      ],
    })
      .then((connections) => {
        console.log(connections[0].dataValues);
        res.render("connections", { connections: connections });
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
}

