$(document).ready(function(){

    $(".message-button").on("click", function(event){
        event.preventDefault();
        $(".message-modal").addClass("is-active");
      // $(".modal-card-title").text("Connect with " + data[0].dogName);
    })
})