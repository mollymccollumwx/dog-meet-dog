$(document).ready(function () {
  $(".submit-button").on("click", function (event) {
    event.preventDefault();
    const userLoggedIn = {
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
    };
    $.post("/api/users/login", userLoggedIn).then((response) => {
      console.log(response);
      if (response.success) {
        //   store to local storage
        localStorage.setItem("currentUserID", response.userId);
      } else {
        console.log(response);
      }
    });
  });
});