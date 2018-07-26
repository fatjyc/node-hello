var sayHello = require('./lib/hello');


var language = process.argv[2] || '';

console.log(sayHello(language))