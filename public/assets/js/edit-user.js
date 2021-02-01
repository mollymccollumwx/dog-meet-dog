// const db = require("../../../models");
$(document).ready(function () {
  //Select all inputs from form on edit-user.handlebars
  
  const breedSelection = $("#breed-selection");
  const APIkey = "b28e0896-2cdc-40c9-bc2a-b043817011ed";
  $.ajax({
    url:
      "https://cors-anywhere.herokuapp.com/https://api.thedogapi.com/v1/breeds",
    // headers[“x-api-key”] = "b28e0896-2cdc-40c9-bc2a-b043817011ed",
    headers: { Authorization: APIkey },
    method: "GET",
  }).then((response) => {
    for (let i = 0; i < response.length; i++) {
      const newOption = $("<option>");
      newOption.text(response[i].name);
      breedSelection.append(newOption);
    }
    // const testOption = $("<option>").text("test");
    // breedSelection.append(testOption);
  });

  $.get("/api/users", function (data) {
    console.log(data);
    const emailValue = $("#email").val(data[0].email);

    //-Password
    const passwordValue = $("#password").val(data[0].password);
    //-Owners First Name
    const ownerFirstNameValue = $("#owner-first-name").val(
      data[0].ownerFirstName
    );
    //-Owners Last Name
    const ownerLastNameValue = $("#owner-last-name").val(data[0].ownerLastName);
    //-Dog Name
    const dogNameValue = $("#dog-name").val(data[0].dogName);
    //-Zip Code
    const cityValue = $("#city").val(data[0].city);
    //-Breed
    const dogBreedValue = $("#breed-selection").val(data[0].dogBreed);

    //-Age
    const dogAgeValue = $("#dog-age").val(data[0].dogAge);
    //-Size
    const dogSizeValue = $("#dog-size").val(data[0].dogSize);
    const dogVaccinatedValue = $("#vaccinated");
    //-Vaccinated
    if (data[0].dogVaccinated) {
      dogVaccinatedValue.prop("checked", true);
    } else {
      dogVaccinatedValue.prop("checked", false);
    }
    //-Friendliness
    if (data[0].friendliness === "All dog friendly") {
      $("#all-dog-friendly").prop("checked", true);
    } else if (data[0].friendliness === "Large dog friendly") {
      $("#large-dog-friendly").prop("checked", true);
    } else if (data[0].friendliness === "Small dog friendly") {
      $("small-dog-friendly").prop("checked", true);
    }
    //-ImageLink
    const imageLinkValue = $(".file-name").val(data[0].imageLink);
  });
  //Event Listener for Save Button
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
});
