var fs = require('fs');
var path = require('path');

function readFilter(dirName, fileExt, callback){
  fs.readdir(dirName, function(err, list){
    if (err)
      return callback(err, null);
    var filtered_list = list.filter(function(file){
      return path.extname(file) === "." + fileExt;
    });
    return callback(null,filtered_list);
  });
};
module.exports = readFilter;