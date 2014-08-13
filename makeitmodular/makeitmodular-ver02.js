//Intro to the concept of modules
//program that prints a list of files in a given directory
//filtered by extension of the files.
//the program takes two arguments one is the directory name and the
//second the extension filter
var lslib = require('./module');

var dirname = process.argv[2];
var ext = process.argv[3];

lslib(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
