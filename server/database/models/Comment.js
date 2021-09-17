const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const Commment = sequelize.define('comment',{
    review: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    rating: {
        type: DataTypes.ENUM(["0","1","2","3","4","5"]),
    }
    
});


module.exports = Commment;