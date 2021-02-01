$(document).ready(function(){

    $(".message-button").on("click", function(event){
        event.preventDefault();
        $(".message-modal").addClass("is-active");
      // $(".modal-card-title").text("Connect with " + data[0].dogName);
    });
    $(".delete, .cancel-button").on("click", function (event) {
        event.preventDefault();
        $(".modal").removeClass("is-active");
      });
  
      $(".save-button").on("click", function (event) {
        event.preventDefault();
        location.reload();
      });

      $(".meet-button").on("click", function(event){
        event.preventDefault();
        $(".meet-modal").addClass("is-active");
        
    });
});