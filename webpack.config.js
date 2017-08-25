const buildEnv = process.env.NODE_ENV || 'development';
if(buildEnv === 'production'){
  module.exports = require('./configs/webpack.prod.js');
}
else{
  module.exports = require('./configs/webpack.dev.js');
}

