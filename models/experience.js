'use strict';
module.exports = (sequelize, DataTypes) => {
  var Experience = sequelize.define(
    'Experience',
    {
      name: DataTypes.STRING,
      timesDone: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {},
  );
  Experience.associate = function(models) {
    Experience.belongsTo(models.User);
  };
  return Experience;
};
