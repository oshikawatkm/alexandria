'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deposit = sequelize.define('Deposit', {
    amount: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  Deposit.associate = function(models) {
    // associations can be defined here
    Deposit.belongsTo(models.User)
  };
  return Deposit;
};