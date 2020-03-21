'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profiles', [
      {
        company: '',
        website: 'https://google.com',
        user_id: 1,
        description: 'こんにちは'
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        company: '',
        website: 'https://google.com',
        user_id: 2,
        description: ''
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        company: '角川',
        website: 'https://google.com',
        user_id: 3,
        description: '著者です。'
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profiles', null, {});
  }
};
