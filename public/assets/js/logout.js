// event listener for the logout button on the nav bar 
//redirects the user to the homepage
//clears out local storage
$(".logout-button").on("click", function(event){
    event.preventDefault();
    window.open("/", "_self");
    localStorage.clear();
})