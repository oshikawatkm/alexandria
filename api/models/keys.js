'use strict';
module.exports = (sequelize, DataTypes) => {
  const Key = sequelize.define('Key', {
    file: DataTypes.STRING,
    hash: DataTypes.STRING,
    book_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  Key.associate = function(models) {
    // associations can be defined here
    Reservation.belongsTo(models.Book);
    Reservation.belongsTo(models.User);
  };
  return Key;
};