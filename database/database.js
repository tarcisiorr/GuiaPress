const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress','root','n0d3r00t',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;