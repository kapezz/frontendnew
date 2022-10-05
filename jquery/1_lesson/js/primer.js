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

 $(function(){
   $('.icons img').each(function(){ //выборка по каждому отдельному элементу 
      if($(this).attr('src')=='img/icon3.png') { //выбор текущего зис = сравнение есть ли в нем срс картинка конкретная 
         $(this).fadeOut(1000); // применение к нему (только к нему) скрытия
      }
   });
});

$(function(){
   var mainText = $('.mainText').clone(); // создаем переменную передаем в нее клон
   $('body').append(mainText); // указываем место куда поместить переменную 
});

$(function(){
   var mainText = $('.mainText').remove(); // удаляем нужную переменную 
   $('nav').after(mainText); // добавляем ее в другом месте 
});

// выбор и ссылок и изображений (через запятую)
$(function(){
   $('img, a').css('background', 'red');  
});

//при наведении на указаный блок будет какое то событие, то есть мы тут например указали алерт, но можно сказать все что угодно 
$(function(){
   $('.logo').mouseover(function(){ 
      alert('событие mouseover');
   });
});

//mouseout – если мы отвели мышку с указанного места то тогда будет происходить событие
$(function(){
   $('.logo').mouseout(function(){ 
      alert('событие mouseover');
   });
});

$(function(){
   $('.logo').mousemove(function(){ 
      alert('событие mouseover');
   });
});


$(function(){
   $('.arrowDown').click(function(){ //выбираем элемент, указываем событие 
      var clone = $(this).clone(); // создаем переменную (для этого же элемента) 
      $(this).after(clone); // помешаем этот элемент сразу после основного = дублируем 
   });
});

//HOVER пример 1 = прямого события хавер нет, но можно его с имитировать примерно так, добавили класс при навидении мыши и потом когда мышь ушла то удаляем класс
$(function(){
   var link = $('menu li a');
   link.mouseover(function(){
      $(this).addClass('border');
   });
   link.mouseout(function(){
      $(this).removeClass('border');
   });
});
// HOVER = пример 2
$(function(){
   var link = $('menu li a');
   link.hover(
      function() {
      $(this).addClass('border');
   }, function() {
      $(this).removeClass('border');
   });
});

$(function(){
   $('.mainText').click(function(e){
      alert(e.screenX+' '+e.screenY); // отобразяться точки скрина считаться будет от начала блока  
      alert(e.pageX+' '+e.pageY); // отобразяться точки страницы 
      alert(e.altKey); // сработает фальс или тру в том случае если будет нажатие мыши плюс кнопка альт 
      alert(e.ctrlKey);// сработает при нажатии контрала плюс мышка
      alert(e.shiftKey); // сработает при нажатии на шифт плюс мышка 
      alert(e.target); // при нажатии мышкой получим указания что это за объект 
   })
});

// отмена стандартного поведения, то есть если были ссылки то они перекидывать не будут или первое или второй 
$(function(){
   $('.btn, .arrowDown').click(function(){
      // e.preventDefault();
      return false;
   })
});