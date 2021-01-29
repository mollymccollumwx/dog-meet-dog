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

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

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
