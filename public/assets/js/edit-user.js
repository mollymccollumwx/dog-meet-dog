$(document).ready(function () {
  //Select all inputs from form on edit-user.handlebars
  const currentUser = localStorage.getItem("currentUserID");
  $.get("/api/users/" + currentUser, function (data) {
    console.log(data);
    const emailValue = $("#email").val(data.email);
    const passwordValue = $("#password").val(data.password);
    const ownerFirstNameValue = $("#owner-first-name").val(data.ownerFirstName);
    const ownerLastNameValue = $("#owner-last-name").val(data.ownerLastName);
    const dogNameValue = $("#dog-name").val(data.dogName);
    const cityValue = $("#city").val(data.city);
    const dogBreedValue = $("#breed-selection").val(data.dogBreed);
    const dogAgeValue = $("#dog-age").val(data.dogAge);
    const dogSizeValue = $("#dog-size").val(data.dogSize);
    const dogVaccinatedValue = $("#vaccinated");
    if (data.dogVaccinated) {
      dogVaccinatedValue.prop("checked", true);
    } else {
      dogVaccinatedValue.prop("checked", false);
    }
    if (data.friendliness === "All dog friendly") {
      $("#all-dog-friendly").prop("checked", true);
    } else if (data.friendliness === "Large dog friendly") {
      $("#large-dog-friendly").prop("checked", true);
    } else if (data.friendliness === "Small dog friendly") {
      $("small-dog-friendly").prop("checked", true);
    }
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
    const currentUser = localStorage.getItem("currentUserID");
    $.ajax({
      method: "PUT",
      url: "/api/users/" + currentUser,
      data: updatedUser,
    }).then((response) => {});
  });
});
