var myModule = require('./06_make_it_modular_module.js');

myModule(process.argv[2], process.argv[3], function callback(err, data){
  if (err){
    console.log(err);
  };
  if (data){
    console.log(data.join('\n'));
  };
});