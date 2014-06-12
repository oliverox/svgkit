//'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        svgstore: {
            options: {
            includedemo: false,
            prefix: 'icon-', // This will prefix each ID
                svg: { // will be added as attributes to the resulting SVG
                    viewBox: '0 0 64 64'
                }
            },
            default : {
                files: {
                    'dest/sprite.svg': ['svgs/*.svg'],
                },
            }
        },
        svgmin: {
            options: {                                      // Configuration that will be passed directly to SVGO
                plugins: [
                  { removeViewBox: false },
                  { cleanupIDs: false }
                ]
            },
            dist: {                                         // Target
                files: {                                    // Dictionary of files
                    'dest/sprite.svg': 'dest/sprite.svg'     // 'destination': 'source'
                }
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-svgmin');


    // test task to run unit tests
    grunt.registerTask('createdemo', '', function () {
        var svgContent = grunt.file.read('dest/sprite.svg');
        grunt.file.write('dest/injectsprite.js', 'document.addEventListener(\'DOMContentLoaded\', function() { var svgSprite = document.querySelectorAll(\'.svg-sprite\'); svgSprite[0].innerHTML = \'' + svgContent + '\'; });');
        var styles = "svg { width:30px; height:30px; } .svg-sprite { display:none; } .front { fill: black; } .back { fill: lightblue; }";
        var spritedemohtml = "<!doctype html><html><head><title>SVG-Sprite</title><style>" + styles + "</style><head><body><div class='svg-sprite'></div><script type='text/javascript' src='injectsprite.js'></script>";
        var icons = svgContent.split('<title>');
        for (var i=1; i<icons.length; i++) {
            console.log(icons[i].split('</title>')[0]);
            spritedemohtml += "<svg><use xlink:href='#icon-" + icons[i].split('</title>')[0] + "'></use></svg>";
        }
        spritedemohtml += "</body></html>";
        grunt.file.write('dest/spritedemo.html', spritedemohtml);
    });
    grunt.registerTask('default', 'Builds sprite file icons.svg', ['svgstore', 'svgmin', 'createdemo']);

};