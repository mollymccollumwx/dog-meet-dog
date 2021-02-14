$(document).ready(function () {
  var dashboard = $("#dashboard");

  //get route from API/Users
  $.get("/api/users", function (data) {
    //jQuery to dynamically create cards with the user information
    const filteredData = data.filter((dog) => {
      const currentUser = parseInt(localStorage.getItem("currentUserID"));
      return dog.id !== currentUser;
    });
    createCards(filteredData);
  });

  // extra small get route
  $("#extra-small").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/extra-small", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });

  // small get route
  $("#small").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/small", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });

  // medium get route
  $("#medium").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/medium", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });

  // large get route
  $("#large").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/large", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });

  // extra-large get route
  $("#extra-large").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/extra-large", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });

  //vaccinated get route
  $("#vaccinated").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/vaccinated", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });

  //vaccinated get route
  $("#not-vaccinated").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/not-vaccinated", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });

  //all dog friendly
  $("#all-dog").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/all-dog", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });

  // small dog friendly
  $("#small-dog").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/small-dog", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });

  // large dog friendly
  $("#large-dog").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/large-dog", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });

  // age query for puppy
  $("#puppy").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/puppy", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });
  // age query for young
  $("#young").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/young", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });

  // age query for young
  $("#adult").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/adult", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });

  // age query for young
  $("#senior").on("click", function (event) {
    event.preventDefault();

    $.get("/api/users/senior", function (data) {
      dashboard.empty();
      createCards(data);
    });
  });
  // function to dynamically generate cards
  function createCards(data) {
    for (let i = 0; i < data.length; i++) {
      // Variables to create cards
      // const dashboard = $("#dashboard");
      const mainColumn = $("<div>").addClass(
        "column is-3 is-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
      );
      const newCard = $("<div>").addClass("card");
      const cardImageDiv = $("<div>").addClass("card-image");
      const figure = $("<figure>").addClass("image");
      const cardImage = $("<img>")
        .attr("src", data[i].imageLink)
        .attr("style", "width: 100%")
        .addClass("dog-image");
      const cardContent = $("<div>").addClass("card-content");
      const columns = $("<div>").addClass("columns");
      const columnOne = $("<div>").addClass("column is-full pr-0");
      const spanColumns = $("<div>").addClass("columns");
      const dogNameColumn = $("<div>").addClass("column is-8");
      const treatPointsColumn = $("<div>").addClass("column is-4");
      const media = $("<div>").addClass("media");
      const mediaContent = $("<div>").addClass("media-content");
      const dogName = $("<h3>").addClass("title is-4").text(data[i].dogName);
      const dogInfo = $("<div>").addClass("content");
      const ulElement = $("<ul>");
      const liCity = $("<li>").text(data[i].city + " 📍");
      const liDogAge = $("<li>").text(data[i].dogAge + " 🎂");
      const liDogBreed = $("<li>").text(data[i].dogBreed + " 🐶");
      const liFriendliness = $("<li>").text(data[i].friendliness + " 😄");
      const liVaccinated = $("<li>");
      // Determine if dog is vaccinated
      if (data[i].dogVaccinated) {
        liVaccinated.text("Vaccinated 💉");
      } else {
        liVaccinated.text("Not Vaccinated 💉");
      }
      const boneIcon = $("<i>").addClass("fas fa-bone fa-lg");
      const treatPoints = $("<p>")
        .text(" " + data[i].treatPoints)
        .attr("style", "display: inline");
      const buttonDiv = $("<div>").addClass("has-text-centered");
      const connectButton = $("<button>")
        .addClass("button connect-btn is-large mt-5")
        .text("Connect!")
        .attr("data-id", data[i].id);

      // Appending all the elements to the dashboard.handlebars
      figure.append(cardImage);
      cardImageDiv.append(figure);
      newCard.append(cardImageDiv);
      dogNameColumn.append(dogName);
      treatPointsColumn.append(boneIcon);
      treatPointsColumn.append(treatPoints);
      spanColumns.append(dogNameColumn);
      spanColumns.append(treatPointsColumn);
      mediaContent.append(spanColumns);
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
      cardContent.append(columns);
      newCard.append(cardContent);
      mainColumn.append(newCard);
      buttonDiv.append(connectButton);
      mainColumn.append(buttonDiv);
      dashboard.append(mainColumn);
    }

    $(".connect-btn").on("click", function (event) {
      event.preventDefault();
      const userOneId = localStorage.getItem("currentUserID");
      const userTwoId = $(this).data("id");

      $(".connect-modal").addClass("is-active");
      $("#connect-name").text(
        "You're one step closer to finding a fur-ever friend!"
      );

      //post route to grab and store two user ids
      $.post("/api/connections", {
        userOneId: userOneId,
        userTwoId: userTwoId,
      }).then((response) => {});

      $(".cancel-button").on("click", function (event) {
        event.preventDefault();
        location.reload();
      });

      $(".connections-button").on("click", function (event) {
        event.preventDefault();
        window.open("/connections/" + userOneId, "_self");
      });
    });
  }
});
