$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        740:{
            items:2
        },
        1000:{
            items:5
        }
    }
});

$('.owl-prev').click(function() {
$(".owl-item").removeClass("slider-text-anim");
  if ( $(".owl-item").hasClass("active") ) {
      $(this).addClass("slider-text-anim");
    //   alert("У элемента задан класс");
  }
  else {
      $(this).removeClass("slider-text-anim");
    //   alert("У элемента не задан класс");	    
  }
});

$('.owl-next').click(function() {
$(".owl-item").removeClass("slider-text-anim");
  if ( $(".owl-item").hasClass("active") ) {
      $(this).addClass("slider-text-anim");
    //   alert("У элемента задан класс");
  }
  else {
      $(this).removeClass("slider-text-anim");
    //   alert("У элемента не задан класс");	    
  }
});