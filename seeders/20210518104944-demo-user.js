'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      userId: 'user1',
      themeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 'user2',
      themeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
