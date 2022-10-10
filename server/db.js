const {Sequelize} = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize(
    process.env.DB_NAME, // name of db
    process.env.DB_USER, // user of db
    process.env.DB_PASSWORD, // passw of db
    {
        dialect: 'postgres',
        host: process.env.DB_HOST, // host of db,
        port: process.env.DB_PORT, // port of db
    }
)