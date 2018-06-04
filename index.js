const express = require('express');

const sequelize = require('./utils/db');
const router = require('./controllers/experiences');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/', router);

app.listen(3000, () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
});
