/**
 * slideshow jQuery plugin
 * @author Peter French
 * @source http://github.com/peterfrench/jQuery-slideshow
 */
(function( $ ){

  $.fn.slideshow = function( slides, speed, randomStart ) {

    var settings = $.extend(
		// defaults
		{
			'slides'		: '.slideshow-item',
			'speed'			: 5000,
			'randomStart'	: false
		},
		// params
		$.isPlainObject(slides) ? slides
		: {
			'slides'		: slides,
			'speed'			: speed,
			'randomStart'	: randomStart
		}
	);

	return this.each(function() {

		var self = this;
		var $slides = $(this).find('.slideshow-item');
		
		// don't create a slideshow if there is only one slide.
		if( $slides.length < 2 ) return;
		
		var i,
			cycle = null,
			$nav = $('<nav />').appendTo(this);
						
		for(i = 1; i <= $slides.length; i++) $nav.append( $('<a href="#"><span>'+i+'</span></a>'));
		
		$nav.wrapInner('<div class="slideshow-nav-inner" />');
		
		// get starting slide
		if(settings.randomStart) {
			i = Math.floor(Math.random()*$slides.length);
		}else{
			i = 0;
		}
		
		// show & hide slides
		$nav.find('a').eq(i).addClass('active')
		$slides.filter(':visible').hide();
		$slides.eq(i).show();	
		
		// bind button functions
		$nav.find('a').click(function(){
			clearInterval(cycle);
			var $current = $slides.filter(':visible'),
				$next = $slides.eq($nav.find('a').index(this));
			if ( $current == $next ) return;
			$current.fadeOut(500);
			$next.fadeIn(750);
			$nav.find('.active').removeClass('active');
			$(this).addClass('active');
			return false;
		});
		
		// run slideshow
		cycle = setInterval(function(){
			var $current = $slides.filter(':visible'),
				$next = $current.next('.slideshow-item');
			if ( !$next.length ) $next = $slides.filter(':eq(0)');
			var i = $slides.index($next);
			$current.fadeOut(500);
			$next.fadeIn(750);
			$nav.find('.active').removeClass('active');
			$nav.find('a').eq(i).addClass('active');
		}, settings.speed);
	});

  }
})( jQuery );