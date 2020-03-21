'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT,
    book_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Book)
    Comment.belongsTo(models.User)
    Comment.hasOne(models.Reccomend, {foreignKey: 'comment_id'});
  };
  return Comment;
};