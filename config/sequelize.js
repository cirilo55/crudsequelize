const Sequelize = require('sequelize');
const config = require('./config.json').development;
const seq = new Sequelize (config.database, config.username, config.password, config);

module.exports= seq;
