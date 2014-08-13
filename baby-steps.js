//program that accepts one or more numbers as command-line arguments
//and prints the sum of those numbers to the console(stdout)
var result = 0;
for(i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
  //the process object uses an argv property to access command-line arguments
}

console.log(result);
//run with node programs.js 1 2 3
