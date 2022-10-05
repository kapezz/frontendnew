$(function(){
    $('input[type=checkbox]:even').prop('disabled', true);
    $(':checkbox:not([disabled])').prop('checked', true);
});