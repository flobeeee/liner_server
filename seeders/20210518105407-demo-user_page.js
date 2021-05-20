'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User_Pages', [{
      userId: 1,
      pageId: 1,
      text: '테마1 컬러1입니다',
      colorHex: '#ffff8d',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 1,
      pageId: 1,
      text: '테마1 컬러2입니다',
      colorHex: '#a5f2e9',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 1,
      pageId: 1,
      text: '테마1 컬러3입니다',
      colorHex: '#ffd5c8',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 2,
      pageId: 2,
      text: '유튜브 텍스트1입니다. 테마2번입니다.',
      colorHex: '#f6f0aa',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 2,
      pageId: 2,
      text: '유튜브 텍스트2입니다. 테마2번입니다',
      colorHex: '#d3edd1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User_Pages', null, {});
  }
};
