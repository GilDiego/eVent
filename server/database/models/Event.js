const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Event = sequelize.define(
  'event',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    starring: {
      type: DataTypes.STRING,
    },
    remote: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pictures: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    start_date: {
      type: DataTypes.STRING,
      validate: {
        isDate: true,
      },
      allowNull: false,
    },
    finish_date: {
      type: DataTypes.STRING,
    },
    schedule: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    isrecurrent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    weekdays: {
      type: DataTypes.ARRAY(
        DataTypes.ENUM(
          'Domingo',
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado',
          'Domingo'
        )
      ),
      allowNull: false,
    },
    tags: {
      type: DataTypes.ENUM(
        'Exteriores',
        'Interiores',
        'En vivo',
        'Recital',
        'Teatro',
        'Película',
        'Disco',
        'Deportes'
      ),
      allowNull: false,
    },
    age_rating: {
      type: DataTypes.ENUM('0+', '7+', '13+', '18+'),
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticket_limit: {
      type: DataTypes.INTEGER,
    },
    seat_booking: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Event;
