'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: '田中 一郎',
        nameKana: 'タナカ イチロウ',
        nickname: 'タナッカー',
        email: 'tanacker@gmail.com',
        password: 'password',
        sex: 1,
        address: "東京都渋谷区",
        mobile_phoneNum: "09012341",
        home_phoneNum: "",
        authority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '木村 健一',
        nameKana: 'キムラ ケンイチ',
        nickname: 'KIMU',
        email: 'kimu@gmail.com',
        password: 'password',
        sex: 1,
        address: "東京都渋谷区",
        mobile_phoneNum: "09012341",
        home_phoneNum: "",
        authority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '佐々木 純',
        nameKana: 'ササキ ジュン',
        nickname: '佐々木',
        email: 'sasaki@gmail.com',
        password: 'password',
        sex: 1,
        address: "東京都渋谷区",
        mobile_phoneNum: "09012341",
        home_phoneNum: "",
        authority: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
