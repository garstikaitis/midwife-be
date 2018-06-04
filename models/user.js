'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      email: DataTypes.STRING,
      semester: DataTypes.INTEGER,
    },
    {},
  );
  User.associate = function(models) {
    User.hasMany(models.Experience);
  };
  return User;
};
