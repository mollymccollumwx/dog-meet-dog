
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
  });

$(document).on("submit", "#submit-form", handleUserFormSubmit);

function handleUserFormSubmit(event) {
  event.preventDefault();
  //grab value from email input and store it as the users email in the database 
  console.log()
}





});

