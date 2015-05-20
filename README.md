# Node/Mocha/Grunt(watch) Testing Skeleton

### How to use

- git clone this repo
- npm install
- grunt watch

Add the following function to your .bash_profile and you can generate a test suite from command line
with the command 'mktest'

    function mktest() {
      wget https://raw.githubusercontent.com/eihli/test-skeleton/master/Gruntfile.js
      wget https://raw.githubusercontent.com/eihli/test-skeleton/master/package.json
      npm install    
    }

After running mktest, run 'grunt watch' and go edit the Gruntfile to add whatever files
you want it to monitor for changes.

For details about what everything does in the gruntfile: http://gruntjs.com/sample-gruntfile
