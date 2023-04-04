var popup_show = false;
(function(jQuery){
    samo.page_ready = false; jQuery(function() { samo.page_ready = true;});
    samo.page_callback = function(page, samo_action, params) {
        if (!samo.page_ready) { setTimeout(function() {samo.page_callback(page, samo_action, params);}, 0); return;}
        // Your custom callback here
        if (page == "search_tour") {
            if (!popup_show) {
                popup_show = true;
                //Большое окно popup
                jQuery(".popup_cont").fadeIn("fast");

                //Маленькое окно popup
                jQuery(".popup_mini_cont").fadeIn("fast");
            }
            //Большое окно popup
            jQuery(".popup_cont .close").click(function() {
                jQuery(".popup_cont").hide();
            });
            //Маленькое окно popup
            jQuery(".popup_mini_cont .close").click(function() {
                jQuery(".popup_mini_cont").hide();
            });
        }
        /*
         console.log(arguments);
         switch (page) {
         case 'search_tour':
         if (samo_action == 'TOWNFROMINC' || samo_action == 'default_action') {
         if (params.TOWNFROMINC == 2) {
         jQuery.notify('Добро пожаловать в Москву!');
         }
         }
         break;
         default:
         break;
         }
         */
        return;
    };
})(samo.jQuery);