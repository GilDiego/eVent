const {  DataTypes } = require('sequelize');
const sequelize = require('../db');

const Evento = sequelize.define('Evento',{
    eventName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Evento;