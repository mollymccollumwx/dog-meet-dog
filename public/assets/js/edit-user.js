// const db = require("../../../models");
$(document).ready(function () {
  //Select all inputs from form on edit-user.handlebars

  const breedSelection = $("#breed-selection");
  const APIkey = "b28e0896-2cdc-40c9-bc2a-b043817011ed";
  $.ajax({
    url:
      "https://cors-anywhere.herokuapp.com/https://api.thedogapi.com/v1/breeds",
    headers: { Authorization: APIkey },
    method: "GET",
  }).then((response) => {
    for (let i = 0; i < response.length; i++) {
      const newOption = $("<option>");
      newOption.text(response[i].name);
      breedSelection.append(newOption);
    }
  });
  const currentUser = localStorage.getItem("currentUserID");
  $.get("/api/users/" + currentUser, function (data) {
    console.log(data);
    const emailValue = $("#email").val(data.email);

    //-Password
    const passwordValue = $("#password").val(data.password);
    //-Owners First Name
    const ownerFirstNameValue = $("#owner-first-name").val(data.ownerFirstName);
    //-Owners Last Name
    const ownerLastNameValue = $("#owner-last-name").val(data.ownerLastName);
    //-Dog Name
    const dogNameValue = $("#dog-name").val(data.dogName);
    //-Zip Code
    const cityValue = $("#city").val(data.city);
    //-Breed
    const dogBreedValue = $("#breed-selection").val(data.dogBreed);

    //-Age
    const dogAgeValue = $("#dog-age").val(data.dogAge);
    //-Size
    const dogSizeValue = $("#dog-size").val(data.dogSize);
    const dogVaccinatedValue = $("#vaccinated");
    //-Vaccinated
    if (data.dogVaccinated) {
      dogVaccinatedValue.prop("checked", true);
    } else {
      dogVaccinatedValue.prop("checked", false);
    }
    //-Friendliness
    if (data.friendliness === "All dog friendly") {
      $("#all-dog-friendly").prop("checked", true);
    } else if (data.friendliness === "Large dog friendly") {
      $("#large-dog-friendly").prop("checked", true);
    } else if (data.friendliness === "Small dog friendly") {
      $("small-dog-friendly").prop("checked", true);
    }
    //-ImageLink
    const imageLinkValue = $(".file-name").val(data.imageLink);
  });
  //Event Listener for Save Button
<<<<<<< HEAD
//   $(".save-button").on("click", function (event) {
//     event.preventDefault();
//     $.put("/api/users", (req, res) => {
//       db.User.update(req.body, {
//         where: {
//           id: req.body.id,
//         },
//       }).then(user=> {
//           res.json(user)h
//       })
//     });
//   });
=======
  //   $(".save-button").on("click", function (event) {
  //     event.preventDefault();
  //     $.put("/api/users", (req, res) => {
  //       db.User.update(req.body, {
  //         where: {
  //           id: req.body.id,
  //         },
  //       }).then(user=> {
  //           res.json(user)
  //       })
  //     });
  //   });
>>>>>>> ca1cc228c477c4ea09489992e979ece67e4062da
});
