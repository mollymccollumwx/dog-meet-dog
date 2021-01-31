$(document).ready(function () {
//Select all inputs from form on edit-user.handlebars
$.get("/api/users", function(data) {
    console.log(data)
    const emailValue = $("#email").val(data[0].email)

//-Password
const passwordValue = $("#password").val(data[0].password)
//-Owners First Name
const ownerFirstNameValue = $("#owner-first-name").val(data[0].ownerFirstName)
//-Owners Last Name
const ownerLastNameValue = $("#owner-last-name").val(data[0].ownerLastName)
//-Dog Name
const dogNameValue = $("#dog-name").val(data[0].dogName)
//-Zip Code
const cityValue = $("#city").val(data[0].city)
//-Breed
const dogBreedValue = $("#breed-selection").val(data[0].dogBreed)
//-Age
const dogAgeValue = $("#dog-age").val(data[0].dogAge)
//-Size
const dogSizeValue = $("#dog-size").val(data[0].dogSize)
//-Vaccinated
const dogVaccinatedValue = $("#vaccinated:checked").val(data[0].dogVaccinated)
//-Friendliness
const friendlinessValue = $("#friendliness").val(data[0].friendliness)
//-ImageLink
const imageLinkValue = $(".file-name").val(data[0].imageLink)
})

})