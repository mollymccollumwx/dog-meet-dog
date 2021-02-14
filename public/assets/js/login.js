$(document).ready(function () {
  localStorage.clear();
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
        window.open("/dashboard", "_self")
      } else {
        console.log(response);
      }
    });
  });
});