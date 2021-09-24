const { Sequelize } = require('sequelize');
const { database } = require('../config');



// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize(
//     database.database,
//     database.username,
//     database.password, {
//         host: database.host,
//         dialect: 'postgres',
//         logging: false
//     },
// );

const sequelize = new Sequelize('postgres://hoyicmlg:8QFr5bF5Kt3fmPkDbJDpXpmkH5n46KVd@motty.db.elephantsql.com/hoyicmlg', {
    // Hace que no muestre todos los mensajes de conexion con SQL en la consola cuando inicias el servidor.
    logging: false
})
module.exports = sequelize;