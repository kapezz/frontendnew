$(document).ready(function() {
  $(".dropw_dawnd_text").click(function(event){
   event.stopPropagation();
    var element = $(this);
    //Закрываем все блоки
    $(".toggle-dropdown").removeClass('active');
    //Открываем ту которая нам нужна 
    element.addClass('active');
 });
});
