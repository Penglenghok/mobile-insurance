$(document).ready(function(){
	function myParallax(){
		 $(window).scroll(function(){
	        var currentSP = $(window).scrollTop();
	        if (currentSP < 0) { currentSP = 0; }
	        $("[data-sarallax]").css({
	            "-webkit-transform":"translateY("+(currentSP/2.2)+"px) translateZ(0)",
	            "-moz-transform":"translateY("+(currentSP/2.2)+"px) translateZ(0)",
	            "-ms-transform":"translateY("+(currentSP/2.2)+"px) translateZ(0)",
	            "-o-transform":"translateY("+(currentSP/2.2)+"px) translateZ(0)",
	            "transform":"translateY("+(currentSP/2.2)+"px) translateZ(0)",
	        });
	    });
	}
	function mySlideZoomImg(){
		var count = 0;
		var sS = 0;
		$('[data-imgzoom]').wrap('<div class="sSlideZoomImg"></div>');
		$('[data-imgzoom]').each(function(){
			if (count != 0) {
				$(this).css({
					'animation-delay': sS+'s',
			        '-o-animation-delay': sS+'s',
			        '-moz--animation-delay': sS+'s',
			        '-webkit-animation-delay': sS+'s'
				});
			}
			count++;
			sS+=6;
		});
	}
	myParallax();
	mySlideZoomImg();
});