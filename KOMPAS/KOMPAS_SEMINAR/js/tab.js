$('.js-tabs__link').on('click', function () { //Click on button
  
    // $(this) is clicked button
    
    $(this) 
      .closest('.js-tabs') // Look for its parent
      .find($('.js-tabs__link')) // Find all buttons
      .removeClass('js-tabs__link_active'); // And remove active class from 'em
    
    $(this).addClass('js-tabs__link_active'); // Make pressed button active
    
    $(this)
      .closest('.js-tabs') // Look for its parent
      .find($('.js-tabs__tab')) // Find all tabs
      .removeClass('js-tabs__tab_active'); // And remove active class from 'em
    
    $(this)
      .closest('.js-tabs') // Look for its parent
      .find($('.js-tabs__tab')[$('.js-tabs__link').index($(this))]) // Find tab with equal index 
      .addClass('js-tabs__tab_active'); // Make it active
    
  });
  