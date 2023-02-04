$(document).ready(function () {
    $('.small a').click(function(e){
        if($('.big img').attr('src')!==$(this).attr('href')) {
        // если большая картинка такая же как картинка в ссылке, ничего происходить не должно (перезагрузки не будет)
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000); 
            // выбираем основной блок с картинкой 
            // скрываем его
            // меняем атрибут с src (выбранного блока изначально) на ссылку href
            // после мы обратно показали (фейд ин) уже новую замененную картинку 

        }



        
       



        e.preventDefault(); // заблокировали стандартное поведение ссылки
    });
    $('.button').click(function(){
        $('.gallery').slideToggle(500);
        // свернуть и развернуть галерею при нажатии на кнопку батон
        if($('.button').text()=='-'){ 
            $('.button').text('+');
            //если текст кнопки минус то меняем на плюс 
            // или если текст кнопки плюс (элс) то меняем на минус
        } else {
            $('.button').text('-');
        }
    });
    $('.small a img').click(function(){
        $('.small a img').fadeTo(500,1).css({
            'border':'none'
        });
        // сначала мы указали что никаких бордеров не будет у всех 
        $(this).fadeTo(500,0.6).css({
            'border':'1px dotted red'
            //а потом указываем что фейд ту 500 мс до опасити 0.6 и красный бордер на конкретном 

    });

});

});