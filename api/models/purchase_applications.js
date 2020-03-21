'use strict';
module.exports = (sequelize, DataTypes) => {
  const PurchaseApplication = sequelize.define('Purchase_Applications', {
    status: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  PurchaseApplication.associate = function(models) {
    // associations can be defined here
    PurchaseApplication.belongsTo(models.User);
    PurchaseApplication.belongsTo(models.Book);
  };
  return PurchaseApplication;
};