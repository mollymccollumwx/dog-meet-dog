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
    const dogBreedValue = $("#dog-breed").val(data.dogBreed),
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
  $(".save-button").on("click", function (event) {
    event.preventDefault();
    const updatedUser = {
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
      ownerFirstName: $("#owner-first-name").val().trim(),
      ownerLastName: $("#owner-last-name").val().trim(),
      dogName: $("#dog-name").val().trim(),
      city: $("#city").val().trim(),
      dogBreed: $("#breed-selection").val(),
      dogAge: $("#dog-age").val(),
      dogSize: $("#dog-size").val(),
      dogVaccinated: $("#vaccinated:checked").val(),
      friendliness: $("input[name=question]:checked", "#friendliness").val(),
    };
    // console.log("You clicked the save button")
    const currentUser = localStorage.getItem("currentUserID");
    $.ajax({
      method: "PUT", 
      url: "/api/users/" + currentUser,
      data: updatedUser,
    }).then(response=>{
      // console.log("Promised reached")
      console.log(response);
      window.open("/dashboard", "_self");
    })
  });
});