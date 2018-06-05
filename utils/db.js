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
    : new Sequelize(
        process.env.DB_PROD_NAME,
        process.env.DB_PROD_USERNAME,
        process.env.DB_PROD_PASSWORD,
        {
          host: process.env.DB_PROD_HOST,
          dialect: 'mysql',
          operatorsAliases: false,

          pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
          },
        },
      );
module.exports = sequelize;
