$(document).ready(function() {
    $(".delete-button").on("click", function(event){
        event.preventDefault();
        console.log("you clicked the delete button")

        const currentUser = localStorage.getItem("currentUserId");
        $.ajax({
            method: "DELETE",
            url: "/api/users/" + currentUser
        }).then(function(){
            console.log(currentUser +" has been deleted");
        })
    })
})