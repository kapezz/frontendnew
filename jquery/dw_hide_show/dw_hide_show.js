var openclose;
var openclose_2;
var openmore;
var must_close;
var no_close;
var word_key;
var var_id;
document.addEventListener("click", function(isclick)
{
  name_data  =  isclick.target.dataset;
  the_id     =  isclick.target.id;

  if(name_data.click =='no_close')
  {
      no_close=1;
  }

  var hide_open_text = {
     'показать'          : 'скрыть' ,
     'Показать еще :'    : 'Скрыть :' ,
     'Показать еще'      : 'Скрыть',
     'Посмотреть ответ :': 'Скрыть ответ.'
  };
  if (hide_open_text[isclick.target.innerHTML])
  {
     var key       = isclick.target.innerHTML;
     var key_value = hide_open_text[isclick.target.innerHTML];
     word_key = key;
  }

  const expand_hide_open_text = {}

  Object.entries(hide_open_text).forEach(([key, value]) => {
    expand_hide_open_text[value] = key
  })

  if (expand_hide_open_text[isclick.target.innerHTML])
  {
     var key       = isclick.target.innerHTML;
     var key_value = expand_hide_open_text[isclick.target.innerHTML];

  }

  if(name_data.open)
  {
      openclose = document.getElementById(name_data.open);
      if(openclose)
      {
          if ( openclose.dataset.display != 'block' )
          {
             if(isclick.target.innerHTML==key) { isclick.target.innerHTML = key_value;}
             openclose.setAttribute('data-display', 'block');
          }
          else
          {
            if(isclick.target.innerHTML==key) { isclick.target.innerHTML = key_value ;}
            openclose.setAttribute('data-display', 'none');
          }
      }
  }

// -------------- openmore

  if(name_data.openmore)
  {
    if(!openclose_2){openclose_2 = document.getElementById(name_data.openmore);}
    if(must_close && must_close == openclose_2) { openclose_2=must_close;}
    if(must_close && must_close != openclose_2)
    {
      must_close.setAttribute('data-display', 'none'); must_close='';
      if(id_to_word){if(the_id!=id_to_word) {document.getElementById(id_to_word).innerHTML = first_word ; id_to_word='';}}
    }

    if(openclose_2)
    {
        if ( openclose_2.dataset.display != 'block' )
        {
           if(isclick.target.innerHTML==key) { isclick.target.innerHTML = key_value;}
           openclose_2.setAttribute('data-display', 'block');
           var_id     = the_id;
           first_word = word_key;
        }
        else
        {
          if(isclick.target.innerHTML==key) { isclick.target.innerHTML = key_value ;}
          openclose_2.setAttribute('data-display', 'none');
        }
        must_close  = openclose_2;
        id_to_word  = var_id;
        openclose_2 = '';
        no_close    = '';
        var_id      = '';
    }
  }
  else if (no_close) {
     no_close='';
  }
  else
  {
    if(must_close)
    {
        if(id_to_word){if(the_id!=id_to_word) {document.getElementById(id_to_word).innerHTML = word_key ; id_to_word='';}}
        must_close.setAttribute('data-display', 'none');
        must_close='';
        openclose_2='';
    }
  }
  // -------------- openmore
});
