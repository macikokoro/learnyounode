//program that uses a single synchronous filesystem oper to read & print
//the number of newlines it contains to the console similar to cat file | wc -1
 var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2]);
    var lines = contents.toString().split('\n').length - 1;
    console.log(lines);

    //fs.readFileSync reads a file
    //process.argv access to command-line arguments
    //.toString converts Buffer objects to strings

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
