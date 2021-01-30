$(document).ready(function(){
//get route from API/Users 
$.get("/api/users", function(data){
//use jQuery to dynamically create cards with the user information 
const newCard = $("<div>").addClass("card");
const cardImageDiv = $("<div>").addClass("card-image");
const figure = $("<figure>").addClass("image is-4by3");
const cardImage = $("<img>").attr("src", "https://images.unsplash.com/photo-1566624790190-511a09f6ddbd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzh8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
const cardContent = $("<div>").addClass("card-content");
const columns = $("<div>").addClass("columns"); 
const columnOne = $("<div>").addClass("column is-9"); 
const media = $("<div>").addClass("media");
const mediaContent = $("<div>").addClass("media-content");
const dogName = $("<h3>").addClass("title is-4");
const dogInfo = $("<div>").addClass("content");
const ulElement = $("<ul>");
const liElement = $("<li>");
const columnTwo = $("<div>").addClass("column is-3");
const boneIcon = $("<i>").addClass("fas fa-bone fa-lg");
console.log(data);
})
})
