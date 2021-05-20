'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Themes', [
      {
        color1: '#ffff8d',
        color2: '#a5f2e9',
        color3: '#ffd5c8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        color1: '#f6f0aa',
        color2: '#d3edd1',
        color3: '#f9d6c1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        color1: '#f4ff40',
        color2: '#8affd7',
        color3: '#ffc477',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Themes', null, {});
  }
};
