//text
$(function(){
    var tagP = $('.mainText p').text('новый текст для тега п');
 });

 //вывод текста алертом 
 $(function(){
    var tagP = $('.mainText p').text();
    alert(tagP);
 });

 // скрыть текст 
 $(function(){
    var tagP = $('.mainText p').hide();
 });

 // скрыть текст постепенно - 3000 милисекунд  
 $(function(){
    var tagP = $('.mainText p').hide(3000);
 });
// скрыть текст а потом его показать 
$(function(){
    var tagP = $('.mainText p').hide(3000);
    $('.mainText p').show(3000);
 });
 
 // и тоже самое , что бы не вызывать п 2 раза
 $(function(){
    $('.mainText p').hide(3000).show(3000);
 });

 // положили в переменную и вызвали 
 $(function(){
    var tagP = $('.mainText p');
    $(tagP).hide(3000).show(3000);
 });

 // без доллара тоже самое 
 $(function(){
    var tagP = $('.mainText p');
    tagP.hide(3000).show(3000);
 });

 //заменили текст (старый не отобазиться даже если ставить задержку)
 $(function(){
    var tagP = $('.mainText p');
    tagP.hide().text('это уже совсем новый текст').show(3000);
 });

 //выборка сразу всех элементов соответствующих запросу 
 $(function(){
    $('.icons > div').hide(3000);
  });

  // просто поменять ширну и высоту
  $(function(){
    var w = $('.mainText').width(150);
    var h = $('.mainText').height(200);
  });

  $(function(){
    function widthAndHeight(element) { // название функции и в ней элемент = это по сути любой клас
        var className = "." + element; // создали переменную куда добавляем точку и сам элемент .btn например
        var w = $(className).width(); // создали переменную куда добавляем переменную с класснейм и метод ширина
        var h = $(className).height(); // создали переменную куда добавляем переменную с класснейм и метод высота
        $('.mainText p').text('Ширина: '+w+'; Высота: '+h); // указали где выводить и саму информацию что выводить
    }
    widthAndHeight('recive'); // вызвали функцию и вложили туда что именно мы будем считать 
    
  });

  // мы можем менять содержимое html 
  $(function(){
    $('.mainText').html('<b>Новый текст</b>'); 
    
  });

  $(function(){
    function elementOut(element, time) { // называем функцию, присвивамеые параметры элемент и время
       if(time>5000||time<1000||isNaN(time)) { // делаем проверку если время меньше или больше или это не цифра
          return false; // возвращаем фальс 
       } else { // если же все хорошо то идем дальше 
          var className = "."+element; // создаем переменную добавляем точку что бы был класс 
          $(className).fadeOut(time); // на переменную делаем фейд аут - по указанному  времени в вызове функциии
       }
    }
    elementOut('mainText', 4500); // вызываем функцию и передаем пераметры
   
 });

 $(function(){
    $('.mainText').fadeTo(4000, 0.5); // указываем время и прозрачность 
 });

 // slideUp and slideDown = скрытие и появление элемента
 $(function(){
    $('.mainText').slideUp(2000).slideDown(2000); // скрывает элемент  
 });

 $(function(){
    var src = $('.logo img').attr('title', 'это новая компания'); // взять элемент добавить атрибут тайтл и текст 
 });
 $(function(){
    $('.logo img').removeAttr('alt'); // взять элемент и удалить атрибут 
 });

 $(function(){
    function changeAttr(element, newAttr, newValue) { // название функции, элемент, новый атрибут, значение атрибута
       var className = "."+element; // создали переменную 
       $(className).attr(newAttr, newValue); // в эту переменную добавляем метод аттр с параметрами newAttr, newValue
    }
    changeAttr('logo', 'title', 'new'); // вызываем функцию , добавляем параметры 
 });

 // передать элементу новый стиль 
 $(function(){
    $('nav menu li a').css('color', 'yellow');
 });

 $(function(){
    $('nav menu li a').animate({ 
       'font-size':'24px',
       'padding':'25px'
    },3000,function(){
       alert('Успешная анимация');
    });
 });

//добавить блок перед блоком 
$(function(){
    $('.mainText').before('<span>Новый блок</span>');
 });

 // новый блок после блока
 $(function(){
    $('.mainText').after('<span>Новый блок</span>');
 });

 // новый код в конце блока майн текст 
 $(function(){
    $('.mainText').append('<span>Новый блок</span>');
 });