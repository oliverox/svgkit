//'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        svgstore: {
            options: {
            includedemo: true,
            prefix: 'icon-', // This will prefix each ID
                svg: { // will be added as attributes to the resulting SVG
                    viewBox: '0 0 64 64'
                }
            },
            default : {
                files: {
                    'dest/dest.svg': ['svgs/*.svg'],
                },
            },            
            your_target: {
                // Target-specific file lists and/or options go here.
            }
        }


    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-svgstore');


    // test task to run unit tests
    grunt.registerTask('default', 'Builds svgdefs.svg', ['svgstore']);

};