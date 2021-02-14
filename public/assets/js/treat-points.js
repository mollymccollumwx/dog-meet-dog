$(document).ready(function(){
    $.get("/api/users", function(data){
        for(let i=0; i < data.length; i++){
            
        
        const column = $("<div>").addClass("column is-7"); 
        const card = $("<div>").addClass("card"); 
        const header = $("<header>").addClass("card-header");
        const dogName = $("<p>").addClass("card-header-title").text(data[i].dogName);
        const treatPoints = $("<p>").text("   " + data[i].treatPoints).addClass("mr-6 mt-3");
        const boneIcon = $("<i>").addClass("fas fa-bone fa-lg mt-4 pr-3");
        
        
        header.append(dogName); 
        header.append(boneIcon);
        header.append(treatPoints);
        
        card.append(header); 
        column.append(card); 
        $(".columns").append(column); 
    }        


    })
})