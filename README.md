SVGkit
======

Pre-requesites
--------------
npm --version >= 1.4.3

Install
-------
    npm install


Generate SVG Sprites
--------------------

Save all SVG icons inside *./svgs* directory.

Run

    grunt


Injecting Sprites in HTML
-------------------------

SVGKit generates 3 files in *./dest* directory
    injectsprite.js
    sprite.svg
    spritedemo.html

Open spritedemo.html in a browser to see the generated SVG sprite.

To use generated sprite into your HTML document, include the generated javascript file into a script tag,

    <script type="text/javascript" src="injectsprite.js"></script>

and create an empty div element with class name 'svg-sprite'. This div should be set as hidden and will be used as the SVG injection location.

Reference the desired SVG image as follows

    <svg class='icon-back'>
        <use class='path1' xlink:href='#icon-back'></use>
    </svg>

Style the SVG using the appropriate classes.