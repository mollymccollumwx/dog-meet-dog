$(document).ready(function(){
//get route from API/Users 
$.get("/api/users", function(data){
//use jQuery to dynamically create cards with the user information 
console.log(data);
})
})
