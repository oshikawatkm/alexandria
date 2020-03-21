'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    company: DataTypes.STRING,
    website: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsTo(models.User)
    Profile.hasOne(models.Education, {foreignKey : 'profile_id'})
  };
  return Profile;
};