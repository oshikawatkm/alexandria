'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    hash: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  Book.associate = function(models) {
    // associations can be defined here
    Book.hasMany(models.BookCategory, {foreignKey: 'book_id'});
    Book.hasMany(models.Keys, {foreignKey: 'book_id'});
    Book.hasMany(models.Recommends, {foreignKey: 'book_id'});
    Book.hasMany(models.PurchaseApplication, {foreignKey: 'book_id'});
    Book.hasMany(models.Commands, {foreignKey: 'book_id'});
    Book.belongsTo(models.User);
  };
  return Book;
};