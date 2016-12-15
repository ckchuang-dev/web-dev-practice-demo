$('button').on("click", function(){
    // $('div').fadeToggle("1000", function(){
    //     //$('div').remove();
    // });
    $('div').slideToggle("1000", function(){
         $(this).remove();
    });
});
