const db = require("../models");

module.exports = function (app) {
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

  ////////CLOUDINARY ROUTE///////////////////////////////////
  app.post("/upload/:id", function (req, res, next) {
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath, function (err, result) {
      console.log("Error: ", err);
      console.log("Cloudinary URL: ", result.url);
      db.User.update(
        { imageLink: result.url },
        { where: { id: req.params.id } }
      ).then((updatedUser) => {
        console.log(updatedUser);
        res.json({ success: true });
      });
    });
  });

  //////////SIGNUP ROUTES////////////////////////////////
  app.post("/api/signup", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });
};