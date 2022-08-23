// 2 вариант 

$(function(){
    $('p').each(function(){      
            $(this).replaceWith('<div>' +$(this).text() + '</div>');
        });
});








//1 вариант
/* 
$(function(){
    $('p').each(function(){  
        $(this).click(function() {
            $(this).replaceWith('<div>' +$(this).text() + '</div>');
        });
    });
});
*/

/*
$(function (){
        $("button").click(function () {
            $(this).replaceWith("<p>" + $(this).text() + "</p>");
        });
    });
    */
