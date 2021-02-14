$(document).ready(function () {
  localStorage.clear();
  $(".submit-button").on("click", function (event) {
    event.preventDefault();
    const userLoggedIn = {
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
    };
    $.post("/api/users/login", userLoggedIn).then((response) => {
      if (response.success) {
        // Store to local storage
        localStorage.setItem("currentUserID", response.userId);
        // Open dashboard
        window.open("/dashboard","_self")
      }
    });
  });
});