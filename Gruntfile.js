module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'package.json'],
      options: {
        curly: true,
        eqeqeq: true,
      }
    },
    watch: {
      files: ['Gruntfile.js', 'package.json'],
      tasks: ['jshint', 'mochaTest'],
      options: {
        atBegin: true
      }
    },
    mochaTest: {
      src: []
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
};