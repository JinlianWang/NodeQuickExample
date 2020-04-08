var tools = require('./tools');

var minimist = require('minimist');

var argv = minimist(process.argv.slice(2));
console.dir(argv);
console.log ("a: ", argv.a)
tools.bar();
