'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recommend = sequelize.define('Recommend', {
    from: DataTypes.INTEGER,
    to: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  Recommend.associate = function(models) {
    // associations can be defined here
    Recommend.belongsTo(models.Comment);
    Recommend.belongsTo(models.User);
    Recommend.belongsTo(models.Book);
    Recommend.hasMany(models.Comment, {foreignKey: 'user_id'});
  };
  return Recommend;
};