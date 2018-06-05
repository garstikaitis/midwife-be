const Sequelize = require('sequelize');
const sequelize =
  process.env !== 'production'
    ? new Sequelize('midwife', 'root', 'rootroot', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,

        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      })
    : new Sequelize('heroku_c891aa4219bdd6f', 'bbe73983f1c94f', 'cdd31008', {
        host: 'eu-cdbr-west-02.cleardb.net',
        dialect: 'mysql',
        operatorsAliases: false,

        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      });
module.exports = sequelize;
