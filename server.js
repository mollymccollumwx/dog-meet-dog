const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const app = express();
const db = require("./models");
const UsersController = require("./controllers/userController");

const fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true,
  })
);

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "deckz8crp",
  api_key: "425322847743815",
  api_secret: "ryfL4bUqAh7PbwfeEzxzcmuS0r4",
});

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");

//////////////HTML/HANDLEBARS ROUTES//////////////////////
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/connections", (req, res) => {
  res.render("connections");
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

////////CLOUDINARY TRIAL ROUTE///////////////////////////////////
app.post("/upload", function (req, res, next) {
  const file = req.files.photo;
  // console.log(file);
  cloudinary.uploader.upload(file.tempFilePath, function (err, result) {
    console.log("Error: ", err);
    console.log("Cloudinary URL: ", result.url);
  });
  // file.mv("./uploads/" + file.name, function (err, result) {
  //   if (err) throw err;
  //   res.send({
  //     success: true,
  //     message: "File uploaded!",
  //   });
  // });
});

//////////API ROUTES////////////////////////////////
app.post("/api/signup", function(req, res) {
  db.User.create(req.body).then(function(dbUser){
    res.json(dbUser);
  });
});

app.use(UsersController);

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
