$(document).ready(function() {
	var open_btn = $('.popup-btn'),
		popup = $('.popup'),
		close_btn = $('.close-popup'),
		body  = $('body');
  
	open_btn.on('click', function() {
	  popup.fadeIn();
	  body.addClass('popup-active');
	});
  
	close_btn.on('click', function() {
	  popup.fadeOut();
	  body.removeClass('popup-active');
	});
  
	$(document).on('click', function(e) {
	  if( $(e.target).hasClass('popup') ) {
		$(popup).fadeOut();
		body.removeClass('popup-active');
	  }
	});
  });

  $(document).ready(function() {
	var open_btn = $('.popup-btn-success'),
		popup = $('.popup-success'),
		close_btn = $('.close-popup-success'),
		body  = $('body');
  
	open_btn.on('click', function() {
	  popup.fadeIn();
	  body.addClass('popup-active');
	});
  
	close_btn.on('click', function() {
	  popup.fadeOut();
	  body.removeClass('popup-active');
	});
  
	$(document).on('click', function(e) {
	  if( $(e.target).hasClass('popup-success') ) {
		$(popup).fadeOut();
		body.removeClass('popup-active');
	  }
	});
  });