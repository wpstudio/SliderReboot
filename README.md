SliderReboot
============

Example Code for a SliderReboot (BYOP) Training Class.  This code will be used to build a WordPress plugin.

[Example Slider](http://wpchef.com/SliderReboot)

* * *

Compatibility
----------------
IE7+ / Firefox 3.6+ / Chrome 4+ / Safari 5+ / Opera 10+
* * *  
Dependencies
-----------------
 jQuery 1.7.2 /  jQuery UI 1.8.18  /  jQuery Mobile Events  /  jQuery Transition

* * *  

Options
----------
**currentSlide** default: 0 - first slide to be active  
**slideSpeed** default: 1000 - transition speed of the slides  
**slideMovement** default: 150 - amount of space the current slide shifts, in pixels, when moving to the next slide  
**slideDirection** default: "toLeft" - direction the slide moves  
**elementSpeed** default: 1000 - transition speed of foreground elements  
**autoSlideDelay** default: 3000 - automatic slide switching delay  
**resumeSlideDelay** default: 250 - minimum delay before the automatic slide switching starts after paused  
**stopOnMouseOver** default: true - pauses the automatic slide switching when the mouse is over the container  
**easingType** default: "easeInOutExpo" - easing type used in slide and foreground elements transitions  
**itemDefaultZIndex** default: 10 - z-index assigned to each slide  
**itemSelector** default: "div.item" - css selector used to find each slide  
**itemLoadedClass** default: "loaded" - css class added right after a slide is loaded  
**activeItemClass** default: "active" - css class added to the active slide  
**itemBackgroundSelector** default: ".background img" - css selector used to find the background element of a slide  
**itemForegroundElementSelector** default: ".foreground img" - css selector used to find the foreground element in a slide  
**controlsSelector** default: undefined - css selector used to find the pagination links

* * *

Sample
---------
````javascript
$(function () {  
  $("#slider_reboot-container").sliderreboot({  
    slideMovement: 100,  
    slideSpeed: 1000,  
    easingType: "easeInOutQuart",  
    itemSelector: ".item",  
    itemBackgroundSelector: ".background",  
    elementSpeed: 1100,  
    itemForegroundElementSelector: ".foreground .element",  
    controlsSelector: "#slider-pagination a"  
  });  
});  
`````
````html
<div id="slider_reboot-container" class="slides">
	<div class="item first">
		<a href="#">
			<div class="background">
				<img src="background1.jpg" />
				<div class="overlay"></div>
			</div>
			<div class="foreground">
				<div class="element icon"></div>
				<div class="element title">First Test</div>
				<div class="element subtitle">lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed lacus vei mi imperdiet mollis. Nulla at nisi quam, at porta magna.</div>
			</div>
		</a>
	</div>
	<div class="item">
		<a href="#">
			<div class="background">
				<img src="background2.jpg" />
				<div class="overlay"></div>
			</div>
			<div class="foreground">
				<div class="element icon"></div>
				<div class="element title">Second Test</div>
				<div class="element subtitle">lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed lacus vei mi imperdiet mollis. Nulla at nisi quam, at porta magna.</div>
			</div>
		</a>
	</div>
	<div class="item">
		<a href="#">
			<div class="background">
				<img src="background3.jpg" />
				<div class="overlay"></div>
			</div>
			<div class="foreground">
				<div class="element icon"></div>
				<div class="element title">Third Test</div>
				<div class="element subtitle">lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed lacus vei mi imperdiet mollis. Nulla at nisi quam, at porta magna.</div>
			</div>
		</a>
	</div>
</div>
<p id="slider-pagination" class="pager">
  <a href="#" rel="prev">Previous</a> - <a href="#" rel="next">Next</a>
</p>
````

