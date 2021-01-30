
//API call to the dog API for list of breeds 
$(document).ready(function () {
  const breedSelection = $("#breed-selection");
  const APIkey = "b28e0896-2cdc-40c9-bc2a-b043817011ed";
  $.ajax({
    url:
      "https://cors-anywhere.herokuapp.com/https://api.thedogapi.com/v1/breeds",
    // headers[“x-api-key”] = "b28e0896-2cdc-40c9-bc2a-b043817011ed",
    headers: { Authorization: APIkey },
    method: "GET",
  }).then((response) => {
    console.log(response);
    console.log(response[100].name);
    for (let i = 0; i < response.length; i++) {
      const newOption = $("<option>");
      newOption.text(response[i].name);
      breedSelection.append(newOption);
    }
    // const testOption = $("<option>").text("test");
    // breedSelection.append(testOption);
  });

// $(document).on("submit", "#submit-form", handleUserFormSubmit);

$('#submit-form').on("click", function(event){
  event.preventDefault();

  const newUser = {
    email: $("#email").val().trim(),
    password: $("#password").val().trim(),
    ownerFirstName: $("#owner-first-name").val().trim(),
    ownerLastName: $("#owner-last-name").val().trim(),
    dogName: $("#dog-name").val().trim(),
    zipCode: $("#zip-code").val().trim(),
    dogBreed: $("#breed-selection").val(),
    dogAge: $("#dog-age").val(),
    dogSize: $("#dog-size").val(),
    dogVaccinated: $("#vaccinated:checked").val(),
    friendliness: $('input[name=question]:checked', '#friendliness').val()
  }
  // console.log(newUser);

  $.post("/api/signup", newUser).then(newUser => {
    console.log(newUser);
  });
  
});





  //grab value from email input and store it as the users email in the database 








});

