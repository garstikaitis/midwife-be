const Sequelize = require('sequelize');

const router = require('express').Router();
const models = require('../models');

const Op = Sequelize.Op;

router.get('/', (req, res) => {
  models.User.findAll({
    include: [
      {
        model: models.Experience,
        where: {
          userId: {
            [Op.not]: null,
          },
        },
        attributes: ['id', 'name', 'createdAt', 'updatedAt', 'timesDone'],
      },
    ],
  }).then(result => {
    return res.json({
      users: result,
    });
  });
});

router.post('/', (req, res) => {
  const obj = models.User.build({
    fname: 'Gintaras',
    lname: 'Arstikaitis',
    semester: 2,
    email: 'hello@gmail.com',
  });
});

module.exports = router;
