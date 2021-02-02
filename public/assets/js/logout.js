$(".logout-button").on("click", function(event){
    event.preventDefault();
    window.open("/", "_self");
    localStorage.clear();
})