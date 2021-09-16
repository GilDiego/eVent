const { Sequelize } = require('sequelize');
const { database } = require('../config');



// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize(
//     database.database,
//     database.username,
//     database.password, {
//         host: database.host,
//         dialect: 'postgres'
//     }
// );

const sequelize = new Sequelize('postgres://hoyicmlg:8QFr5bF5Kt3fmPkDbJDpXpmkH5n46KVd@motty.db.elephantsql.com/hoyicmlg')
module.exports = sequelize;