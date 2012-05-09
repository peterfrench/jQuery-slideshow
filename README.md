# slideshow jQuery plugin

Turn a group of images into a simple slideshow with navigation.

## Usage
### .slideshow( [ slides, speed, randomStart ] ) (returns jQuery)
### .slideshow( options ) (returns jQuery)

Create a slideshow with a 7 second pause between slides & start out displaying a random slide.

	$('#slideshow').slideshow({ speed: 7000, randomStart: true });


Use custom selectors for slides.

	$('#slideshow').slideshow('.slide', 5000);

## Defaults

slide '.slideshow-item'

speed 5000

randomStartfalse


