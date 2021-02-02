$(document).ready(function () {
  //GET route for connections/id

  const currentUser = localStorage.getItem("currentUserID");
  $.get("/api/users/" + currentUser).then((data) => {
    $("#welcome-message").text("Bow wow, " + data.dogName + "!");
    $(".user-image").attr("src", data.imageLink);
  });

  $("#connections-link").on("click", function (event) {
    event.preventDefault();
    console.log("Connections Linked Clicked");
    const currentUser = localStorage.getItem("currentUserID");
    $.ajax({
      method: "GET",
      url: "/connections/" + currentUser,
    }).then((response) => {
      window.open("/connections/" + currentUser, "_self");
    });
  });
  $(".message-button").on("click", function (event) {
    event.preventDefault();
    console.log(this);
    const userEmail = $(this).attr("value");
    console.log($(this).attr("value"));

    var email = userEmail;
    var subject = "Let's have a dog party!";
    var emailBody = "Your message goes here.";
    window.location =
      "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
  });
  $(".delete, .cancel-button").on("click", function (event) {
    event.preventDefault();
    $(".modal").removeClass("is-active");
  });

  $(".back-button").on("click", function (event) {
    event.preventDefault();
    location.reload();
  });

  $(".meet-button").on("click", function (event) {
    event.preventDefault();
    // Add PUT route to increment treat points by 10
    const currentUser = localStorage.getItem("currentUserID");
    $.get("/api/users/" + currentUser, function (data) {
      console.log(data.treatPoints);
    });

    $(".meet-modal").addClass("is-active");
  });

  $("#email-link").on("click", function (event) {
    event.preventDefault();
  });
});
