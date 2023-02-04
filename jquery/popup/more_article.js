$(document).ready(function(){
    $('.show__more-articles-a').click(function(){
        $(this).toggleClass('active-articles');
        $('.hidden__blocks-articles').slideToggle(300);      
        return false;
    });
  });

  $(document).ready(function () {
    $(".show__more-articles-a").click( function (){
      if($(this).hasClass("active-articles")){
       $(this).text("Скрыть статьи");
      }else{
        $(this).text("Показать еще статьи");
      }
    });
  });       