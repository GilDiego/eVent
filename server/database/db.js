const { Sequelize } = require('sequelize');
const { databaseUrl } = require('../config');

module.exports = new Sequelize(databaseUrl || 'postgres://localhost:5432/event', {
  logging: false,
});
