$(document).ready(function () {
  // localStorage.clear();
  const fileInput = document.querySelector("#dog-file input[type=file]");
  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector("#dog-file .file-name");
      fileName.textContent = fileInput.files[0].name;
    }
  };

  // $(document).on("submit", "#submit-form", handleUserFormSubmit);

  $("#submit-form").on("click", function (event) {
    event.preventDefault();
    if (
      $("#email").val() === "" ||
      $("#password").val() === "" ||
      $("#owner-first-name").val() === "" ||
      $("#owner-last-name").val() === "" ||
      $("#dog-name").val() === "" ||
      $("#city").val() === "" ||
      $("#dog-breed").val() === "" ||
      $("#dog-age").val() === "" ||
      $("#dog-size").val() === "" ||
      $("#vaccinated:checked").val() === undefined ||
      $("input[name=question]:checked", "#friendliness").val() === undefined
    ) {
      alert("You Can't Leave Anything Blank");
    } else {
      const newUser = {
        email: $("#email").val().trim(),
        password: $("#password").val().trim(),
        ownerFirstName: $("#owner-first-name").val().trim(),
        ownerLastName: $("#owner-last-name").val().trim(),
        dogName: $("#dog-name").val().trim(),
        city: $("#city").val().trim(),
        dogBreed: $("#dog-breed").val(),
        dogAge: $("#dog-age").val(),
        dogSize: $("#dog-size").val(),
        dogVaccinated: $("#vaccinated:checked").val(),
        friendliness: $("input[name=question]:checked", "#friendliness").val(),
      };

      // Add new user to database
      $.post("/api/signup", newUser).then((newUser) => {
        var form = new FormData();
        form.append("photo", fileInput.files[0], "file");

        var settings = {
          url: "/upload/" + newUser.id,
          method: "POST",
          timeout: 0,
          processData: false,
          mimeType: "multipart/form-data",
          contentType: false,
          data: form,
        };

        $.ajax(settings).done(function (response) {
          console.log(response);
          localStorage.setItem("currentUserID", newUser.id);
          const currentUser = localStorage.getItem("currentUserID");
          location.href = "/dashboard";
        });
      });
      
    }
  });
});
