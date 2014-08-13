//filter
var fs = require('fs')
var path = require('path')
                            //arguments
module.exports = function (dir//directory name, filterStr//file ext, callback//function) {
                              //callback checks for errors
  fs.readdir(dir, function (err, list//ideomatic node convention) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
