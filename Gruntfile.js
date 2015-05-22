module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'package.json', 'src/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
      }
    },
    watch: {
      files: ['Gruntfile.js', 'package.json', 'tests/*.js', 'src/*.js'],
      tasks: ['jshint', 'mochaTest'],
      options: {
        atBegin: true
      }
    },
    mochaTest: {
      src: ['tests/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
};