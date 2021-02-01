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
        // Store to local storage
        localStorage.setItem("currentUserID", response.userId);
        // Open dashboard
        window.open("/dashboard")
      } else {
        console.log(response);
      }
    });
  });
});