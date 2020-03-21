'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookCategory = sequelize.define('BookCategory', {
    book_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  BookCategory.associate = function(models) {
    // associations can be defined here
    BookCategory.belongsTo(models.Category);
    BookCategory.belongsTo(models.Book);
  };
  return BookCategory;
};