const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Pruebauser = sequelize.define('Pruebauser',{
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
    }
})

module.exports = Pruebauser;