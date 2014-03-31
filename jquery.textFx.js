/*
The API and textFX object reference:

type: this is the type of animation
	Types of animations:
	fadeIn - fades in each characters,
	slideIn - slidesIn each character from a direction,
	rotate - rotates each character in,
	scale - zooms in the text


iChar: this is the delay between each characters 
animation in ms

iAnim: this is the time of the animation for 
each character in ms

direction: only applicable to slide, is the direction 
(top, left, down, right) the character slides from

*/
(function(e){function t(t,n,r,i){var s=t.text().split(n),o="";if(s.length){e(s).each(function(e,t){o+='<span class="'+r+(e+1)+'">'+t+"</span>"+i});t.empty().append(o)}}var n={init:function(){return this.each(function(){t(e(this),"","char","")})},words:function(){return this.each(function(){t(e(this)," ","word"," ")})},lines:function(){return this.each(function(){var n="eefec303079ad17405c889e092e105b0";t(e(this).children("br").replaceWith(n).end(),n,"line","")})}};e.fn.lettering=function(t){if(t&&n[t]){return n[t].apply(this,[].slice.call(arguments,1))}else if(t==="letters"||!t){return n.init.apply(this,[].slice.call(arguments,0))}e.error("Method "+t+" does not exist on jQuery.lettering");return this}})(jQuery)(function ( $ ) {
	$.fn.textFx = function(options) {
		//Default settings for $.textFx();
		var o = $.extend({
			type: 'fadeIn',
			iChar: 250,
			iAnim: 500,
			direction: 'top'
		}, options);
		
		//Execute
		return this.each(function() {
			$(this).lettering();
			var letters = $(this).find('span'); //The selector for all the letters
			var counter = 0; //Counter for animations of each character.
			
			
			if (o.type == "fadeIn") {
				letters.css({
					opacity: 0
				});
				letters.each(function() {
					$(this).delay(o.iChar * counter).transition({
						opacity: 1
					}, o.iAnim);
					counter += 1;
				});
			}
			
			if (o.type == "slideIn") {
				if (o.direction == "top") {
					letters.css({
						position: 'relative',
						top: - letters.position().top - (letters.height() * 2)
					});
				}
				if (o.direction == "bottom") {
					letters.css({
						position: 'relative',
						top: $(document).height() - letters.position().top + (letters.height() * 2)
					});
				}
				if (o.direction == "left") {
					letters.css({
						position: 'relative',
						left: - letters.position().left - $(this).width()
					});
				}
				if (o.direction == "right") {
					letters.css({
						position: 'relative',
						left: letters.position().left + $(this).width()
					});
				}
				
				letters.each(function() {
					$(this).delay(o.iChar * counter).transition({
						top: 0,
						left: 0
					}, o.iAnim);
					counter += 1;
				});
			}
			
			if (o.type == "rotate") {						
				letters.css({
					opacity: 0
				});
				letters.each(function() {
					$(this).delay(o.iChar * counter).transition({
						opacity: 1,
						rotate: 360
					}, o.iAnim);
					counter += 1;
				});
			}
			
			if (o.type == "scale") {						
				$(this).css({
					scale: 0
				});
				$(this).each(function() {
					$(this).delay(o.iChar * counter).transition({
						scale: 1
					}, o.iAnim);
					counter += 1;
				});
			}
			
			
		});
	};

}( jQuery ));