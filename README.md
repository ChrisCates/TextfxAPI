textfxAPI
=========

textfx is a handy jquery plugin for awesome text effects!

<h2>TextFX is available via bower now!</h2>
<pre>
bower install chriscates-textfx
</pre>

Include these files:
<pre>
&#60;script type="text/javascript" src="jquery.js"&#62;&#60;/script&#62;
&#60;script type="text/javascript" src="jquery.transit.js"&#62;&#60;/script&#62;
&#60;script type="text/javascript" src="jquery.textFx.js"&#62;&#60;/script&#62;
</pre>

The Javascript Object:
<pre>
/*
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

//Here are examples of how to write a textFx!
$('.element1').textFx({
	type: 'fadeIn',
	iChar: 500,
	iAnim: '250'
	//Fades in
});
$('.element2').textFx({
	type: 'slideIn',
	iChar: 750,
	iAnim: 500,
	direction: 'top'
	//Slides in from the top.
});
$('.element3').textFx({
	type: 'rotate',
	iChar: 750,
	iAnim: 500,
	rotate: '180-0' 
	//Rotates from 180 degrees to 0.
});
</pre>

Refer to the .htm document for live examples!
