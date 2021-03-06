(function($){

    $.fn.extend({

        addTemporaryClass: function(className, duration) {
            var elements = this;
            setTimeout(function() {
                elements.removeClass(className);
            }, duration);

            return this.each(function() {
                $(this).addClass(className);
            });
        }
    });

})(jQuery);

var student = 0;

var ui_colors = {
  other: '#DA6044',
  checked: 	'#00E568'
}

$('.slide').hammer().on('drag', function(event) {
  var offset, zero;
  //event.gesture.preventDefault();

  // Calculate where left=0 in relation to the parent
  offset = $('.slider-list').offset();
  zero = offset.left;

  $(this).offset({ left: zero + event.gesture.deltaX });

  if( event.gesture.deltaX < 0 ) {
	  $(this).parent().css('background', ui_colors.checked);

  }


  if ( event.gesture.deltaX < -100) {
      $("confirmed").addTemporaryClass("appear", 1000);
            console.log("fucking confirmed!");

            var audio = $("#notification")[0];
            audio.play();
  }

  if ( event.gesture.deltaX > 0) {
	  $(this).parent().css('background', ui_colors.other);
    if (event.gesture.deltaX >= 200) {
      $("footer").addClass("footer_appear");
            console.log("fucking menu popup!");
      $("footer").removeClass("footer_slideout");
    }
	}

  $("button").click(function(){
    $("footer").addClass("footer_slideout");
});

});

$('.slide').hammer().on('release', function(event) {
  $(this).animate({ left: 0 }, 100, function () {
	  $(this).parent().css('background', '#fff');
  });
});
