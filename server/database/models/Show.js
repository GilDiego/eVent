const {  DataTypes } = require('sequelize');
const sequelize = require('../db');

const Show = sequelize.define('show',{
    eventName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Show;