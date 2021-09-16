const { Sequelize } = require('sequelize');
const { database } = require('../config');



// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: 'postgres'
    }
);

module.exports = sequelize;