$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut("1000", function(){
        $(this).remove();
    });
    //to avoid bubble event
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
    //hit enter
    if(event.which === 13){
        //grab text from input
        var toDoItem = $(this).val();
        //create new li into ul
        $("ul").append("<li><span>X</span> " + toDoItem + "</li>");
    }
});