'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.BookCategory, {foreignKey: 'category_id'});
  };
  return Category;
};