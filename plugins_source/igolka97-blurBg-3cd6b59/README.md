blurBg
======

jQuery function, witch can blur the back side of transperent background of div.
A lot of people were looking for this plugin. This plugin is designed to blur the image that are for absolutely positioned layer.
This was done in the style of iOS 7, which uses this concept.

Usage
=====

Using is very simple.
````
$(element).blurBg(radius);
````
"Radius" - radius of blur. For example:
````
$('.overlay').blurBg(24);
````
You can ask it to put/impose a color to background in second parameter:
````
$(element).blurBg(radius, color);
````
For example:
````
$('.overlay').blurBg(24, "rgba(255, 255, 255, 0.5");
````
