$(document).ready(function () {
  //GET route for connections/id
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
    // $(".message-modal").addClass("is-active");
    const userEmail = $(this).attr("value");
    console.log($(this).attr("value"));

    // alert("Huh");
    var email = userEmail;
    var subject = "Let's have a dog party!";
    var emailBody = "Your message goes here.";
    window.location =
      "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    // $(".modal-card-title").text("Connect with " + data[0].dogName);
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
    $(".meet-modal").addClass("is-active");
  });
  // $(function () {
  $("#email-link").on("click", function (event) {
    event.preventDefault();
  });
  // });
  // mailto:mollymccollumwx@gmail.com
});
