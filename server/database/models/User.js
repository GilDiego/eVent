const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthdate: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    picture: {
        type: DataTypes.STRING,
        defaultValue: "https://cdn2.vectorstock.com/i/thumb-large/04/96/user-icon-vector-19240496.jpg",
        allowNull: false,
    },
    country: {
        type: DataTypes.ENUM,
        allowNull: false,
    },
    province: {
        type: DataTypes.ENUM,
        allowNull: false,
    },
    city: {
        type: DataTypes.ENUM,
        allowNull: false,
    },
    /* O BIEN
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    */
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

module.exports = User;