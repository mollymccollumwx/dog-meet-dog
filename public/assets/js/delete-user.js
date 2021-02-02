$(document).ready(function() {
    $(".delete-button").on("click", function(event){
        event.preventDefault();
        console.log("you clicked the delete button")

        const currentUser = localStorage.getItem("currentUserID");
        $.ajax({
            method: "DELETE",
            url: "/api/users/" + currentUser
        }).then(response =>{
            console.log(response);
            console.log(currentUser + " has been deleted");

            localStorage.clear();
            window.open("/", "_self");
            
        });
    });
});