$(function(){
   $(':submit').click(function(){ 
    var value = $(':checkbox:checked').each(function(){
        var value = $(this).val();
        alert(value);
    }); 
   });
    
});