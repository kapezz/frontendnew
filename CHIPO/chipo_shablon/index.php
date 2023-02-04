<?php
defined('_JEXEC') or die;
header("Content-Type: text/html; charset=utf-8");

/* The following line gets the application object for things like displaying the site name */
$app = JFactory::getApplication();
?>
<?php echo '<?'; ?>xml version="1.0" encoding="<?php echo $this->_charset ?>"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/style.css" type="text/css" />
<link rel="shortcut icon" href="<?php echo JFactory::getConfig()->get('live_site','').'/templates/'.JFactory::getApplication('site')->getTemplate().'/img/favicon.ico'; ?>" />
<link rel="image_src" href="<?php echo JFactory::getConfig()->get('live_site','').'/templates/'.JFactory::getApplication('site')->getTemplate().'/img/logo.png'; ?>" />

<!--
<script language="javascript" type="text/javascript">
function clearText(field)
{
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
}
</script>
-->
</head>
<body>
<div class="black__block">
    <div class="top__wrapper">   
        <div class="main__wrapper">
            <header class="header">
                <div class="header__top">
                    <div class="header__logo"><a href="#"><img src="img/logo.png"></a></div>
                    <div class="language"> <jdoc:include type="modules" name="languageswitching" /></div>    
                    <div class="header__telephone">
                        <img class="telephone_icon" src="img/icon_phone.png" alt="">
                        <a href="tel:380679120895">+38(067)912-08-95</a></div>
                </div>    
                <div class="header__slider">
                    <jdoc:include type="modules" name="slider" style="none" />
                </div>
            </header>
        </div>
    </div>

    <div class="main__wrapper content_padding">
        <section class="main__section">
            <nav class="main__nav">
                <jdoc:include type="modules" name="topmenu" />
            <!--<ul>
                <li><a class="active" href="#">Главная</a></li>
                <li><a href="#">Цены</a></li>
                <li><a href="#">Галерея</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>-->
            </nav>
            <div class="main__content ">

            <jdoc:include type="modules" name="mainblocks" style="none" />
            
                <jdoc:include type="message" />
                <jdoc:include type="component" />

            <div class="main__content_items">
          <a class="main_item">
                <h3 class="main__h3">Чистка подушек</h3>
                <img class="main__img" src="img/pillow.png" alt="">
                <p class="main__p">Ваша старая подушка разрезается,содержимое подушки освобождается от трухи,перетертого пера, пропаривается, просушиваеться и задувается в новый наперник.</p>
                
            </a>
            <a class="main_item" href="#">
                <h3 class="main__h3">Чистка одеял</h3>
                <img class="main__img" src="img/blanket.png" alt="">
                <p class="main__p">Старое одеяло или старая большая подушка чиститься в обычном режиме,изготавливается новый наперник под одеяло с ячейками и туда задувается чищенный пух.</p>
            </a>
            <a class="main_item" >
                <h3 class="main__h3">Реставрация перин</h3>
                <img class="main__img" src="img/featherbed.png" alt="">
                <p class="main__p">Ваша старая подушка разрезается,содержимое подушки освобождается от трухи,перетертого пера, пропаривается, просушиваеться и задувается в новый наперник.</p>
            </a>
        </div>
            <h2 class="main__h2">
                Чистка подушек в Днепре
            </h2>
            <p>Не сухая! Паровая, единственная в Днепре специализированная, профессиональная чистка подушек паром при t 120°C, с последующей полной просушкой, удалением трухи, обеспылеванием и заменой наперника на новый. Также просим обратить внимание на то, что наперники у нас шьются индивидуально для каждого клиента, будь-какого размера с точностью до сантиметра, от 20см. до 2 метров. Если Вы считаете, что для Вас будет максимально удобна подушка например размером 34см.на 97см.- будьте уверены- мы выполним Ваш каприз.</p>
        </div>
    </section>
    <footer class="footer">
        <jdoc:include type="modules" name="footermenu" />
    </footer>
</div> <!--main wrapper-->



</body>
</html>