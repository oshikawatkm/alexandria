'use strict';

//sequelize model:create --name users  --underscored --attributes name:string,nameKana:string,email:string,password:string,sex:integer,address:string,mobile_phoneNum:string,home_phoneNum:string,authority:integer

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nameKana: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique : true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          min: 8
        }
      },
      sex: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0',
      },
      address: {
        type: Sequelize.STRING
      },
      mobile_phoneNum: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      home_phoneNum: {
        type: Sequelize.STRING
      },
      authority: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};