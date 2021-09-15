require('dotenv').config();

const { DB_USER,
        DB_PASSWORD,
        DB_HOST } = process.env;

module.exports = {
    database:{
        username: `${DB_USER}`,
        password:  `${DB_PASSWORD}`,
        database: 'event',//nombre de la base de datos
        host: `${DB_HOST}`
    }
} 