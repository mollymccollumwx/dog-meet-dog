$(document).ready(function() {
    $(".delete-button").on("click", function(event){
        event.preventDefault();

        const currentUser = localStorage.getItem("currentUserID");
        $.ajax({
            method: "DELETE",
            url: "/api/users/" + currentUser
        }).then(response =>{

            localStorage.clear();
            window.open("/", "_self");
            
        });
    });
});