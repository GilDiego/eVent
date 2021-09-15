const {  DataTypes } = require('sequelize');
const sequelize = require('../db');

const Event = sequelize.define('event',{
    eventName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Event;