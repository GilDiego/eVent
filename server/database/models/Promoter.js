const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Promoter = sequelize.define('promoter', {
    legal_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    business_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tax_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    promoter_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
       type: DataTypes.TEXT,
       allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    business_type: {
        type: DataTypes.STRING, // ENUM? Qué tipos?
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    /* SI SE DESCARTA EL MODELO LOCATION:
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    }, */
    authorized: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Promoter;