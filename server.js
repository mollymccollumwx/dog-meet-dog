require('dotenv').config();
const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const app = express();
const db = require("./models");
const UsersController = require("./controllers/userController");
const ConnectionsController = require("./controllers/connectionController");


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

const fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true,
  })
);

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});


////////CLOUDINARY ROUTE///////////////////////////////////
app.post("/upload/:id", function (req, res, next) {
  const file = req.files.photo;
  cloudinary.uploader.upload(file.tempFilePath, function (err, result) {
    db.User.update(
      { imageLink: result.url },
      { where: { id: req.params.id } }
    ).then((updatedUser) => {
      res.json({ success: true });
    });
  });
});

app.use(UsersController);
app.use(ConnectionsController);
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

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
