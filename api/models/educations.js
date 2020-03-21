'use strict';
module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define('Education', {
    school: DataTypes.STRING,
    degree: DataTypes.STRING,
    fieldofstudy: DataTypes.STRING,
    from: DataTypes.DATE,
    to: DataTypes.DATE,
    current: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    profile_id: DataTypes.INTEGER
  }, {
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  Education.associate = function(models) {
    // associations can be defined here
    Education.belongsTo(models.Profile);
  };
  return Education;
};