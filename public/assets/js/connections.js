$(document).ready(function(){

//GET route for connections/id 
    $("#connections-link").on("click", function(event){
      event.preventDefault()
      console.log("Connections Linked Clicked")
      const currentUser = localStorage.getItem("currentUserID");
      $.ajax({
        method: "GET",
        url: "/connections/" + currentUser
      }).then(response=>{
        window.open("/connections/" + currentUser,"_self")
      })
    })
    $(".message-button").on("click", function(event){
        event.preventDefault();
        $(".message-modal").addClass("is-active");
      // $(".modal-card-title").text("Connect with " + data[0].dogName);
    });
    $(".delete, .cancel-button").on("click", function (event) {
        event.preventDefault();
        $(".modal").removeClass("is-active");
      });
  
      $(".save-button, .back-button").on("click", function (event) {
        event.preventDefault();
        location.reload();
      });

      $(".meet-button").on("click", function(event){
        event.preventDefault();
        $(".meet-modal").addClass("is-active");
        
    });
});