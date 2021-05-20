'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User_Pages', [{
      userId: 1,
      pageId: 1,
      text: '테스트 텍스트1입니다',
      colorHex: '#fffff8',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 1,
      pageId: 1,
      text: '테스트 텍스트2입니다',
      colorHex: '#fffff8',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User_Pages', null, {});
  }
};
