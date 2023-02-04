$(document).ready(function(){
    $('.show__more-projects-a').click(function(){
        $(this).toggleClass('active');
        $('.hidden__blocks').slideToggle(300);      
        return false;
    });
});

$(document).ready(function () {
  $(".show__more-projects-a").click( function (){
    if($(this).hasClass("active")){
     $(this).text("Скрыть проекты");
    }else{
      $(this).text("Показать еще проекты");
    }
  });
});                  

           