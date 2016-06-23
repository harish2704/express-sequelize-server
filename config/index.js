
var _ = require('lodash'),
  dbConfigs = require('./database.json'),
  env = process.env.NODE_ENV || 'development',
  envConfig = {},
  defaultConfig = {
    cookieName: 'xxyyzz.sid',
    cookieSecret: 'F#JKLn&()yHIO$%900nsd',
    env: 'development',
    port: 8000,
  },
  config;

try {
  envConfig = require('./env/' + env );
} catch(e){
  console.log( 'Failed to require config file: ', 'env/'+ env );
  envConfig = {};
}

config = _.defaults( {}, envConfig, defaultConfig );
config.db = dbConfigs[env];
config.env = env;

module.exports = config;

