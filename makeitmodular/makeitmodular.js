//solution
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})
//only print to console from this file not from module.js
/*output
    Actual                                    Expected
   "CHANGELOG.md"                      ==    "CHANGELOG.md"
   "LICENCE.md"                        ==    "LICENCE.md"
   "README.md"                         ==    "README.md"
   ""                                  ==    ""

*/
