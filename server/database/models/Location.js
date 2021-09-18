const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Location = sequelize.define('location', {
    country: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Location;