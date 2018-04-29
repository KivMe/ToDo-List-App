$(document).ready(function(){
    $("ul").on("click", "li", function(){

    $(this).toggleClass("grey");

});

$("ul").on("click","span", function(event){
    
    $(this).parent().fadeOut(500,function(){
        
        $(this).remove();
    
    });
    
    event.stopPropagation();

});

$("input[type = 'text']").on("keypress", function(event){
    
    if(event.which === 13){
        
        var todoText = $(this).val();
        
        $("ul").append("<li><span class=\"tasks\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> " + todoText + "</li>");
        $(this).val("");
    
    }

});

$(".fa-plus").click(function(){
    
    if($("input[type = 'text']").css("display") == "none"){
        
        $("input[type = 'text']").fadeIn();
    
    }else {
        
        $("input[type = 'text']").fadeOut();
    
    }

});
});
