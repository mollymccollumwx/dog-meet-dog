$(document).ready(function(){
//get route from API/Users 
$.get("/api/users", function(data){
//use jQuery to dynamically create cards with the user information 
const mainColumn = $(".is-one-third");
const newCard = $("<div>").addClass("card");
const cardImageDiv = $("<div>").addClass("card-image");
const figure = $("<figure>").addClass("image is-4by3");
const cardImage = $("<img>").attr("src", "https://images.unsplash.com/photo-1566624790190-511a09f6ddbd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzh8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
const cardContent = $("<div>").addClass("card-content");
const columns = $("<div>").addClass("columns"); 
const columnOne = $("<div>").addClass("column is-9"); 
const media = $("<div>").addClass("media");
const mediaContent = $("<div>").addClass("media-content");
const dogName = $("<h3>").addClass("title is-4").text(data[0].dogName);
const dogInfo = $("<div>").addClass("content");
const ulElement = $("<ul>");
const liElement = $("<li>").text("Atlanta");
const columnTwo = $("<div>").addClass("column is-3");
const boneIcon = $("<i>").addClass("fas fa-bone fa-lg");
// const treatPoints = data[0].treatPoints
const treatPoints = $("<p>").text(" 100").attr("style", "display: inline");


figure.append(cardImage);
cardImageDiv.append(figure);
newCard.append(cardImageDiv); 
mediaContent.append(dogName);
mediaContent.append(dogInfo);
ulElement.append(liElement);
dogInfo.append(ulElement);
media.append(mediaContent);
columnOne.append(media);
columns.append(columnOne);
columnTwo.append(boneIcon);
columnTwo.append(treatPoints);
columns.append(columnTwo);
cardContent.append(columns);
newCard.append(cardContent);
mainColumn.append(newCard);



console.log(data);
})
})
