//program that uses a single asynchromous filesystem operation to
//read a file and print the number of newlines it contains to the console.
var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1;
  console.log(lines);
});
