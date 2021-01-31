$(document).ready(function () {
  //get route from API/Users
  $.get("/api/users", function (data) {
    //jQuery to dynamically create cards with the user information
    for (let i = 0; i < data.length; i++) {
      const dashboard = $("#dashboard");
      const mainColumn = $("<div>").addClass("column is-3");
      const newCard = $("<div>").addClass("card");
      const cardImageDiv = $("<div>").addClass("card-image");
      const figure = $("<figure>").addClass("image");
      const cardImage = $("<img>")
        .attr("src", data[i].imageLink)
        .attr("style", "width: 100%");
      const cardContent = $("<div>").addClass("card-content");
      const columns = $("<div>").addClass("columns");
      const columnOne = $("<div>").addClass("column is-8");
      const media = $("<div>").addClass("media");
      const mediaContent = $("<div>").addClass("media-content");
      const dogName = $("<h3>").addClass("title is-4").text(data[i].dogName);
      const dogInfo = $("<div>").addClass("content");
      const ulElement = $("<ul>");
      const liCity = $("<li>").text(data[i].city);
      const liDogAge = $("<li>").text(data[i].dogAge);
      const liDogBreed = $("<li>").text(data[i].dogBreed);
      const liFriendliness = $("<li>").text(data[i].friendliness);
      //vaccinated li element with if statement to determine if true or false
      const liVaccinated = $("<li>");
      if (data[i].dogVaccinated) {
        liVaccinated.text("Vaccinated");
      } else {
        liVaccinated.text("Not Vaccinated");
      }
      const columnTwo = $("<div>").addClass("column is-4");
      const boneIcon = $("<i>").addClass("fas fa-bone fa-lg");
      // const treatPoints = data[0].treatPoints
      const treatPoints = $("<p>")
        .text(" " + data[i].treatPoints)
        .attr("style", "display: inline");
      const buttonDiv = $("<div>").addClass("has-text-centered");
      const connectButton = $("<button>")
        .addClass("button connect-btn is-large mt-5")
        .text("Connect!");

      //appending all the elements to the dashboard.handlebars
      figure.append(cardImage);
      cardImageDiv.append(figure);
      newCard.append(cardImageDiv);
      mediaContent.append(dogName);
      mediaContent.append(dogInfo);
      ulElement.append(liCity);
      ulElement.append(liDogAge);
      ulElement.append(liDogBreed);
      ulElement.append(liFriendliness);
      ulElement.append(liVaccinated);
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
      buttonDiv.append(connectButton)
      mainColumn.append(buttonDiv)
      dashboard.append(mainColumn);
    }
  });

  // Add event listener to card to show modal
  $(".connect-btn").on("click", function (event) {
    event.preventDefault();
    console.log("card clicked!");
    $(".modal").addClass("is-active");
  });
});
