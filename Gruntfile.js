/*
 * grunt-html-inheritance
 * https://github.com/askladchikov/grunt-template-inherit
 *
 * Copyright (c) 2014 Andrey Skladchikov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    html_inheritance: {
      main: {
        options: {
              modules: ["main", "ver1"], //array of modules you want to build additionall to "main"
              dstDir: "tmp",
          },
          files: {
            src:'test/fixtures/**.html'
          },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-debug-task');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('default', ['clean', 'html_inheritance', 'nodeunit']);

};
